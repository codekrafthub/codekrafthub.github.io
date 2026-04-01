// ── Backend URL ──────────────────────────────────────────────────────────────
// After deploying to HF Spaces, replace this with your Space API URL.
// Format: "https://{hf-username-or-org}-{space-name}.hf.space"
// Example: "https://codekrafthub-alfaaz-ai.hf.space"
const BACKEND_URL = "https://alfaaz-ai-production.up.railway.app";

// ── DOM refs ─────────────────────────────────────────────────────────────────
const urlInput = document.getElementById("urlInput");
const fileInput = document.getElementById("fileInput");
const dropZone = document.getElementById("dropZone");

const btn = document.getElementById("transcribeBtn");
const cancelBtn = document.getElementById("cancelBtn");
const loading = document.getElementById("loading");
const resultSection = document.getElementById("resultSection");
const resultText = document.getElementById("resultText");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const etaBanner    = document.getElementById("etaBanner");

let selectedFile = null;
let activeController = null;   // AbortController for the current fetch
let activeEventSource = null;  // EventSource for SSE progress stream
let creepInterval  = null;     // Slow drift between SSE milestones
let creepTarget    = 0;        // Never creep past this value
let currentPct     = 0;        // Current displayed percentage

function setProgress(pct) {
    currentPct = pct;
    progressFill.style.width = pct + "%";
}

function startCreep(limit) {
    stopCreep();
    creepTarget = limit;
    creepInterval = setInterval(() => {
        if (currentPct < creepTarget) {
            setProgress(Math.min(currentPct + 0.4, creepTarget));
        }
    }, 300);
}

function stopCreep() {
    if (creepInterval) { clearInterval(creepInterval); creepInterval = null; }
}

// Cancel server-side job when user refreshes or navigates away
window.addEventListener("beforeunload", () => {
    if (activeController) activeController.abort();
    if (activeEventSource) { activeEventSource.close(); activeEventSource = null; }
});


/* ---------------- Drag Drop ---------------- */

dropZone.onclick = () => fileInput.click();

fileInput.onchange = e => {
    selectedFile = e.target.files[0];
    dropZone.innerText = selectedFile.name;
};

dropZone.addEventListener("dragover", e => {
    e.preventDefault();
    dropZone.classList.add("dragover");
});

dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragover");
});

dropZone.addEventListener("drop", e => {

    e.preventDefault();
    dropZone.classList.remove("dragover");

    selectedFile = e.dataTransfer.files[0];
    dropZone.innerText = selectedFile.name;

});

async function typeText(element, text, speed = 8){

    element.value = "";

    for(let i = 0; i < text.length; i++){

        element.value += text[i];

        element.scrollTop = element.scrollHeight;

        await new Promise(r => setTimeout(r, speed));

    }

}

/* ---------------- Transcription ---------------- */

btn.onclick = async () => {

// Cancel any previous in-flight request first
if (activeController) {
    activeController.abort();
    activeController = null;
}

loading.classList.remove("hidden");
resultSection.classList.add("hidden");
exportActions.classList.add("hidden");
cancelBtn.classList.remove("hidden");

progressText.innerText = "Preparing audio…";
setProgress(0);
btn.disabled = true;

// Show ETA banner immediately with a running timer
const txT0 = Date.now();
etaBanner.textContent = "Estimating…";
etaBanner.classList.remove("hidden");
const txTimer = setInterval(() => {
    const elapsed = Math.round((Date.now() - txT0) / 1000);
    if (etaBanner.dataset.estimated !== "1") {
        etaBanner.textContent = elapsed < 5 ? "Estimating…" : `Processing — ${elapsed}s elapsed`;
    }
}, 1000);

// Open SSE before firing the POST so progress events are not missed
if (activeEventSource) activeEventSource.close();
activeEventSource = new EventSource(BACKEND_URL + "/transcribe/progress");
activeEventSource.onmessage = e => {
    const ev = JSON.parse(e.data);
    if (ev.stage === "estimate") {
        etaBanner.textContent = ev.msg;
        etaBanner.dataset.estimated = "1";
        return;
    }
    if (ev.stage === "done" || ev.stage === "error") {
        activeEventSource.close();
        activeEventSource = null;
    }
    progressText.innerText = ev.msg;
    stopCreep();
    setProgress(ev.pct);
    const creepLimits = {
        downloading: 18, ingesting: 18,
        tier1: 36, tier2: 36, tier3: 36, tier4: 36,
        recognising: 72, diarizing: 93, chunking: Math.min(ev.pct + 8, 93),
    };
    const limit = creepLimits[ev.stage] ?? Math.min(ev.pct + 8, 93);
    if (ev.stage !== "done" && ev.stage !== "error") startCreep(limit);
};
activeEventSource.onerror = () => {
    if (activeEventSource) { activeEventSource.close(); activeEventSource = null; }
};

activeController = new AbortController();
const signal = activeController.signal;

try {

if (urlInput.value) {

    const form = new FormData();
    form.append("url", urlInput.value);
    response = await fetch(BACKEND_URL + "/transcribe/url", { method:"POST", body:form, signal });

} else if (selectedFile) {

    const form = new FormData();
    form.append("file", selectedFile);
    progressText.innerText = "Uploading file...";
    response = await fetch(BACKEND_URL + "/transcribe/file", { method:"POST", body:form, signal });

} else {
    alert("Upload a file or paste URL");
    loading.classList.add("hidden");
    cancelBtn.classList.add("hidden");
    btn.disabled = false;
    return;
}

if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Server error ${response.status}: ${errText.slice(0, 200)}`);
}

const data = await response.json();

if (data.error || data.detail) {
    throw new Error(data.error || JSON.stringify(data.detail));
}

clearInterval(txTimer);
delete etaBanner.dataset.estimated;

loading.classList.add("hidden");
cancelBtn.classList.add("hidden");
resultSection.classList.remove("hidden");

// Update the ETA banner to show actual elapsed time
if (data.processing_time_sec) {
    const elapsed = data.processing_time_sec;
    const elapsedLabel = elapsed < 60 ? `${Math.round(elapsed)} sec` : `${(elapsed / 60).toFixed(1)} min`;
    const existing = etaBanner.textContent.replace(/ · took .+$/, "");
    etaBanner.textContent = existing + ` · took ${elapsedLabel}`;
}

const transcript = data.full_text || data.text || "";
const audioDuration = data.duration || 0;

if (audioDuration > 120 || transcript.length > 3000) {
    resultText.value = transcript;
    resultText.scrollTop = 0;
} else {
    const speed = transcript.length > 600 ? 3 : 8;
    await typeText(resultText, transcript, speed);
}
exportActions.classList.remove("hidden");

const processingInfo = document.getElementById("processingInfo");
const tierInfo = [
    data.processing_time_sec ? `${data.processing_time_sec}s` : "",
    data.tier_used || "",
    data.duration ? `audio: ${Math.round(data.duration)}s` : "",
    Array.isArray(data.segments) ? `${data.segments.length} segments` : "",
].filter(Boolean).join(" · ");
processingInfo.innerText = tierInfo;

} catch(e) {
    clearInterval(txTimer);
    delete etaBanner.dataset.estimated;
    if (e.name === "AbortError") {
        stopCreep();
        if (activeEventSource) { activeEventSource.close(); activeEventSource = null; }
        progressText.innerText = "Cancelled.";
        etaBanner.classList.add("hidden");
        setTimeout(() => loading.classList.add("hidden"), 800);
    } else {
        stopCreep();
        if (activeEventSource) { activeEventSource.close(); activeEventSource = null; }
        loading.classList.add("hidden");
        etaBanner.classList.add("hidden");
        alert("Transcription failed: " + (e.message || e));
    }
} finally {
    activeController = null;
    stopCreep();
    if (activeEventSource) { activeEventSource.close(); activeEventSource = null; }
    cancelBtn.classList.add("hidden");
    btn.disabled = false;
}

};


/* ---------------- Cancel Button ---------------- */

cancelBtn.onclick = () => {
    if (activeEventSource) { activeEventSource.close(); activeEventSource = null; }
    if (activeController) {
        activeController.abort();
        activeController = null;
    }
};

/* ---------------- Refine Text ---------------- */

const refineBtn          = document.getElementById("refineBtn");
const refineLoading      = document.getElementById("refineLoading");
const refineInfo         = document.getElementById("refineInfo");
const refineProgressBar  = document.getElementById("refineProgressBar");
const refineProgressFill = document.getElementById("refineProgressFill");

refineBtn.onclick = async () => {

  const currentText = resultText.value.trim();
  if (!currentText) {
    alert("Nothing to refine — transcribe something first.");
    return;
  }

  refineBtn.disabled = true;
  refineBtn.textContent = "Refining...";
  refineLoading.classList.remove("hidden");
  refineInfo.classList.add("hidden");

  const estSec = Math.max(5, Math.round(currentText.length / 250));
  const estLabel = estSec < 60 ? `~${estSec} sec` : `~${(estSec / 60).toFixed(1)} min`;
  etaBanner.textContent = `Sending to Sarvam 30B — estimated ${estLabel}…`;
  etaBanner.classList.remove("hidden");

  const refineT0 = Date.now();
  const refineTimer = setInterval(() => {
    const elapsed = Math.round((Date.now() - refineT0) / 1000);
    etaBanner.textContent = `Sending to Sarvam 30B — ${elapsed}s elapsed (est. ${estLabel})`;
  }, 1000);

  let rpVal = 0;
  const rpRate = Math.max(0.3, (85 * 0.3) / estSec);
  refineProgressFill.style.width = "0%";
  refineProgressBar.classList.remove("hidden");
  let rpInterval = setInterval(() => {
    rpVal = Math.min(rpVal + rpRate, 88);
    refineProgressFill.style.width = rpVal + "%";
  }, 300);

  try {
    const form = new FormData();
    form.append("text", currentText);

    const resp = await fetch(BACKEND_URL + "/refine", { method: "POST", body: form });
    const data = await resp.json();

    clearInterval(refineTimer);
    clearInterval(rpInterval); rpInterval = null;

    if (data.error) {
      refineProgressBar.classList.add("hidden");
      refineProgressFill.style.width = "0%";
      etaBanner.classList.add("hidden");
      alert("Refine failed: " + data.error);
      return;
    }

    refineProgressFill.style.width = "100%";
    setTimeout(() => {
      refineProgressBar.classList.add("hidden");
      refineProgressFill.style.width = "0%";
    }, 700);

    const refined = data.refined_text;
    if (refined.length > 3000) {
        resultText.value = refined;
        resultText.scrollTop = 0;
    } else {
        const speed = refined.length > 600 ? 3 : 4;
        await typeText(resultText, refined, speed);
    }

    etaBanner.textContent = `✦ Sarvam 30B refined in ${data.processing_time_sec}s`;

    refineInfo.classList.remove("hidden");
    refineInfo.textContent =
      `✦ Refined by Sarvam 30B in ${data.processing_time_sec}s`;

  } catch (e) {
    clearInterval(refineTimer);
    refineProgressBar.classList.add("hidden");
    refineProgressFill.style.width = "0%";
    etaBanner.classList.add("hidden");
    alert("Refine request failed. Is the server running?");
  } finally {
    if (rpInterval) { clearInterval(rpInterval); rpInterval = null; }
    refineBtn.disabled = false;
    refineBtn.innerHTML = "✦ Refine Text";
    refineLoading.classList.add("hidden");
  }

};

/* ---------------- Stats Panel ---------------- */

const statsPanel = document.getElementById("statsPanel");
statsPanel.addEventListener("toggle", async () => {
  if (!statsPanel.open) return;
  const content = document.getElementById("statsContent");
  try {
    const resp = await fetch(BACKEND_URL + "/stats");
    const d = await resp.json();
    content.innerHTML = `
      <table class="stats-table">
        <tr><td>Uptime</td><td>${Math.round(d.uptime_sec)}s</td></tr>
        <tr><td>Total requests</td><td>${d.total_requests}</td></tr>
        <tr><td>Cancelled</td><td>${d.cancelled_requests}</td></tr>
        <tr><td>Failed</td><td>${d.failed_requests}</td></tr>
        <tr class="stats-divider"><td colspan="2"></td></tr>
        <tr><td>Groq seconds used</td><td>${d.groq.seconds_used}s / ${d.groq.quota_limit_sec}s &nbsp;<small>(${d.groq.requests} req, ${d.groq.quota_hits} quota hits)</small></td></tr>
        <tr><td>Sarvam seconds</td><td>${d.sarvam.seconds_used}s &nbsp;<small>(${d.sarvam.requests} req, ${d.sarvam.quota_hits} quota hits)</small></td></tr>
        <tr><td>Local GPU seconds</td><td>${d.local_gpu.seconds_used}s &nbsp;<small>(${d.local_gpu.requests} req)</small></td></tr>
        <tr><td>Local CPU seconds</td><td>${d.local_cpu.seconds_used}s &nbsp;<small>(${d.local_cpu.requests} req)</small></td></tr>
      </table>`;
  } catch (e) {
    content.textContent = "Failed to load stats.";
  }
});

/* ---------------- Copy Transcript ---------------- */

const copyBtn = document.getElementById("copyBtn");
const copyTick = document.getElementById("copyTick");
const exportActions = document.getElementById("exportActions");

document.getElementById("exportTxt").onclick  = () => { window.location.href = BACKEND_URL + "/export/txt"; };
document.getElementById("exportSrt").onclick  = () => { window.location.href = BACKEND_URL + "/export/srt"; };
document.getElementById("exportVtt").onclick  = () => { window.location.href = BACKEND_URL + "/export/vtt"; };
document.getElementById("exportJson").onclick = () => { window.location.href = BACKEND_URL + "/export/json"; };

copyBtn.onclick = () => {

navigator.clipboard.writeText(resultText.value);

copyTick.classList.remove("hidden");

setTimeout(()=>{
copyTick.classList.add("hidden");
},2000);

};
