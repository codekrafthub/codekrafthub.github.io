'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './YouthXScene.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function YouthXScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ─── SCENE: BROADCAST ─────────────────────────────────────────────
      const broadcastWords = gsap.utils.toArray<HTMLElement>('.broadcast-word');
      gsap.set(broadcastWords, { yPercent: 120, opacity: 0 });
      const broadcastSubEl = document.querySelector<HTMLElement>('.broadcast-sub');
      if (broadcastSubEl) gsap.set(broadcastSubEl, { opacity: 0, y: 30 });

      ScrollTrigger.create({
        trigger: '#scene-broadcast',
        start: 'top 65%',
        onEnter: () => {
          gsap.to(broadcastWords, {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: 'power4.out',
          });
          if (broadcastSubEl) {
            gsap.to(broadcastSubEl, { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power3.out' });
          }
        },
        once: true,
      });

      // ─── SCENE: EVENT DATA (HUD PANELS) ─────────────────────────────
      const hudPanels = gsap.utils.toArray<HTMLElement>('.hud-panel');
      gsap.set(hudPanels, { opacity: 0, y: 60, scale: 0.95 });

      ScrollTrigger.create({
        trigger: '#scene-data',
        start: 'top 70%',
        onEnter: () => {
          gsap.to(hudPanels, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
          });
        },
        once: true,
      });

      // Horizontal rule slides in
      const dataRule = document.querySelector<HTMLElement>('.data-rule');
      if (dataRule) {
        gsap.set(dataRule, { scaleX: 0, transformOrigin: 'left center' });
        ScrollTrigger.create({
          trigger: '#scene-data',
          start: 'top 75%',
          onEnter: () => gsap.to(dataRule, { scaleX: 1, duration: 1.2, ease: 'power4.out' }),
          once: true,
        });
      }

      // ─── SCENE: KEYNOTES ─────────────────────────────────────────────
      const keynoteLines = gsap.utils.toArray<HTMLElement>('.keynote-line');
      gsap.set(keynoteLines, { opacity: 0, x: -40 });

      ScrollTrigger.create({
        trigger: '#scene-keynotes',
        start: 'top 70%',
        onEnter: () => {
          gsap.to(keynoteLines, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
          });
        },
        once: true,
      });

      // ─── SCENE: EXHIBITIONS ──────────────────────────────────────────
      const exhibitCards = gsap.utils.toArray<HTMLElement>('.exhibit-card');
      gsap.set(exhibitCards, { opacity: 0, y: 80, clipPath: 'inset(100% 0 0 0)' });

      ScrollTrigger.create({
        trigger: '#scene-exhibits',
        start: 'top 70%',
        onEnter: () => {
          gsap.to(exhibitCards, {
            opacity: 1,
            y: 0,
            clipPath: 'inset(0% 0 0 0)',
            duration: 0.8,
            stagger: 0.15,
            ease: 'power4.out',
          });
        },
        once: true,
      });

      // ─── SCENE: GOALS ────────────────────────────────────────────────
      const goalItems = gsap.utils.toArray<HTMLElement>('.goal-line');
      gsap.set(goalItems, { opacity: 0, x: -30 });

      ScrollTrigger.create({
        trigger: '#scene-goals',
        start: 'top 70%',
        onEnter: () => {
          gsap.to(goalItems, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
          });
        },
        once: true,
      });

      // ─── SCENE: SPONSOR ──────────────────────────────────────────────
      const sponsorCards = gsap.utils.toArray<HTMLElement>('.sponsor-pillar');
      gsap.set(sponsorCards, { opacity: 0, y: 50 });

      ScrollTrigger.create({
        trigger: '#scene-sponsor',
        start: 'top 65%',
        onEnter: () => {
          gsap.to(sponsorCards, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
          });
        },
        once: true,
      });

      // ─── SCENE: AFTERMOVIE ───────────────────────────────────────────
      const videoEl = document.querySelector<HTMLElement>('.aftermovie-embed');
      if (videoEl) {
        gsap.set(videoEl, { opacity: 0, scale: 0.92 });
        ScrollTrigger.create({
          trigger: '#scene-aftermovie',
          start: 'top 70%',
          onEnter: () => gsap.to(videoEl, { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }),
          once: true,
        });
      }

      // ─── SCENE: PARTNER CTA ──────────────────────────────────────────
      const ctaTitle = document.querySelector<HTMLElement>('.cta-title');
      const ctaBtn = document.querySelector<HTMLElement>('.cta-btn');
      if (ctaTitle) {
        gsap.set(ctaTitle, { opacity: 0, y: 40 });
        ScrollTrigger.create({
          trigger: '#scene-cta',
          start: 'top 70%',
          onEnter: () => gsap.to(ctaTitle, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }),
          once: true,
        });
      }
      if (ctaBtn) {
        gsap.set(ctaBtn, { opacity: 0, y: 20 });
        ScrollTrigger.create({
          trigger: '#scene-cta',
          start: 'top 65%',
          onEnter: () => gsap.to(ctaBtn, { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: 'back.out(1.5)' }),
          once: true,
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={styles.sceneContainer}>

      {/* ── SCENE: BROADCAST ─────────────────────────────────────────── */}
      <section id="scene-broadcast" className={styles.scene}>
        <div className={styles.broadcastInner}>
          <div className={styles.sysLabel}>[ ANNUAL SUMMIT / 2026 ]</div>
          <div className={styles.broadcastWords}>
            {['CREATING', 'LASTING', 'IMPACT'].map((word) => (
              <div key={word} className={styles.wordClip}>
                <span className={`broadcast-word ${styles.broadcastWord}`}>{word}</span>
              </div>
            ))}
          </div>
          <p className={`broadcast-sub ${styles.broadcastSub}`}>
            A premier summit for innovators, creators, and future leaders.<br />
            Chhattisgarh's flagship youth technology event.
          </p>
        </div>
      </section>

      {/* ── SCENE: EVENT DATA (HUD) ──────────────────────────────────── */}
      <section id="scene-data" className={styles.scene}>
        <div className={styles.dataInner}>
          <div className={`data-rule ${styles.dataRule}`}></div>
          <div className={styles.dataHeader}>
            <span className={styles.sysLabel}>[ EVENT DATA / CG-01 ]</span>
          </div>
          <div className={styles.hudGrid}>
            <div className={`hud-panel ${styles.hudPanel}`}>
              <span className={styles.hudNumber}>400<span className={styles.hudPlus}>+</span></span>
              <span className={styles.hudLabel}>YOUNG MINDS</span>
            </div>
            <div className={`hud-panel ${styles.hudPanel}`}>
              <span className={styles.hudNumber}>6</span>
              <span className={styles.hudLabel}>KEYNOTE TRACKS</span>
            </div>
            <div className={`hud-panel ${styles.hudPanel}`}>
              <span className={styles.hudNumber}>20<span className={styles.hudPlus}>+</span></span>
              <span className={styles.hudLabel}>PROJECTS SHOWCASED</span>
            </div>
            <div className={`hud-panel ${styles.hudPanel}`}>
              <span className={styles.hudNumber}>#1</span>
              <span className={styles.hudLabel}>EDITION / 2026</span>
            </div>
          </div>
          <div className={styles.dataFooter}>
            <span className={styles.dataMeta}>OPEN TO AGE 14+</span>
            <span className={styles.dataMeta}>RAIPUR, CHHATTISGARH</span>
            <span className={styles.dataMeta}>EDUCATORS · PROFESSIONALS · LEADERS</span>
          </div>
        </div>
      </section>

      {/* ── SCENE: KEYNOTES ──────────────────────────────────────────── */}
      <section id="scene-keynotes" className={styles.scene}>
        <div className={styles.keynotesInner}>
          <div className={styles.keynotesLeft}>
            <span className={styles.sysLabel}>[ KEYNOTE TRACKS ]</span>
            <h2 className={styles.keynotesTitle}>Six<br />Domains</h2>
            <p className={styles.keynotesDesc}>Expert speakers from diverse fields converge to shape tomorrow's leaders.</p>
          </div>
          <div className={styles.keynotesRight}>
            {[
              { num: '01', track: 'Public Service' },
              { num: '02', track: 'Humanities & Authors' },
              { num: '03', track: 'Data Science' },
              { num: '04', track: 'Law' },
              { num: '05', track: 'Security & Risk Analysis' },
              { num: '06', track: 'Mental Health & Wellbeing' },
            ].map(({ num, track }) => (
              <div key={num} className={`keynote-line ${styles.keynoteLine}`}>
                <span className={styles.keynoteNum}>{num}</span>
                <span className={styles.keynoteTrack}>{track}</span>
                <div className={styles.keynoteBar}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCENE: EXHIBITIONS ───────────────────────────────────────── */}
      <section id="scene-exhibits" className={styles.sceneTight}>
        <div className={styles.exhibitsInner}>
          <span className={styles.sysLabel}>[ EXPERIENCE ZONES ]</span>
          <div className={styles.exhibitsGrid}>
            {[
              {
                icon: '⬡',
                title: 'Project Exhibition',
                desc: 'Innovative student and professional projects on display. Interact with builders shaping the future.',
                tag: 'ALL AGES',
              },
              {
                icon: '◈',
                title: 'Startup Exhibition',
                desc: 'Groundbreaking ventures and entrepreneurial ideas taking centerstage. Open to all.',
                tag: 'ALL AGES',
              },
              {
                icon: '◇',
                title: 'Food Stalls',
                desc: 'Local culinary experiences open to all visitors. No registration required.',
                tag: 'OPEN ACCESS',
              },
            ].map(({ icon, title, desc, tag }) => (
              <div key={title} className={`exhibit-card ${styles.exhibitCard}`}>
                <div className={styles.exhibitIcon}>{icon}</div>
                <div className={styles.exhibitTag}>{tag}</div>
                <h3 className={styles.exhibitTitle}>{title}</h3>
                <p className={styles.exhibitDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCENE: GOALS ─────────────────────────────────────────────── */}
      <section id="scene-goals" className={styles.scene}>
        <div className={styles.goalsInner}>
          <div className={styles.goalsLeft}>
            <span className={styles.sysLabel}>[ MISSION / 2026 ]</span>
            <h2 className={styles.goalsTitle}>What We're<br />Building</h2>
          </div>
          <div className={styles.goalsList}>
            {[
              'Empower 400+ young minds with technology and career guidance',
              'Showcase 20-30 innovative student and professional projects',
              'Facilitate meaningful networking and mentorship connections',
              'Establish annual tradition of youth empowerment',
              'Facilitate meaningful mentor-mentee connections',
              'Foundation for ongoing workshops and programs',
            ].map((goal, i) => (
              <div key={i} className={`goal-line ${styles.goalLine}`}>
                <span className={styles.goalIndex}>0{i + 1}</span>
                <p className={styles.goalText}>{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCENE: SPONSOR ───────────────────────────────────────────── */}
      <section id="scene-sponsor" className={styles.scene}>
        <div className={styles.sponsorInner}>
          <div className={styles.sponsorHeader}>
            <span className={styles.sysLabel}>[ PARTNERSHIP ]</span>
            <h2 className={styles.sponsorTitle}>Why Sponsor<br /><span className={styles.gradientText}>YouthX?</span></h2>
          </div>
          <div className={styles.sponsorGrid}>
            {[
              {
                id: 'R',
                title: 'Regional Impact',
                points: [
                  'State-level visibility across Chhattisgarh',
                  'Association with premier youth initiative',
                  'Media coverage and social buzz',
                ],
              },
              {
                id: 'B',
                title: 'Brand Alignment',
                points: [
                  'Position with innovation, education & youth',
                  'Demonstrate CSR commitment to skill development',
                  'Connect with purpose-driven demographic',
                ],
              },
              {
                id: 'L',
                title: 'Long-Term Association',
                points: [
                  'Foundation for annual event tradition',
                  'Ongoing partnership opportunities',
                  "Access to CodeKraft's growing alumni network",
                ],
              },
            ].map(({ id, title, points }) => (
              <div key={id} className={`sponsor-pillar ${styles.sponsorPillar}`}>
                <div className={styles.sponsorId}>{id}</div>
                <h3 className={styles.sponsorPillarTitle}>{title}</h3>
                <ul className={styles.sponsorList}>
                  {points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCENE: AFTERMOVIE ────────────────────────────────────────── */}
      <section id="scene-aftermovie" className={styles.scene}>
        <div className={styles.aftermovieInner}>
          <span className={styles.sysLabel}>[ AFTERMOVIE / YX-2026 ]</span>
          <h2 className={styles.aftermovieTitle}>Relive the Energy</h2>

          <div className={`aftermovie-embed ${styles.videoOuter}`}>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/q8SFD2TI0qo?si=qwqE5_v-if1oSrEN"
                title="YouthX 2026 Aftermovie"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          {/* Media publication marquee */}
          <div className={styles.marqueeOuter}>
            <div className={styles.marqueeTrack}>
              {[...Array(2)].map((_, ri) => (
                <div key={ri} className={styles.marqueeRow}>
                  {['Press Release', 'Featured in Tech Today', 'News 18 Coverage', 'Startup Weekly', 'Local Daily Front Page', 'Digital India Now'].map((pub) => (
                    <span key={pub} className={styles.marqueeItem}>{pub}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SCENE: PARTNER CTA ───────────────────────────────────────── */}
      <section id="scene-cta" className={styles.sceneCta}>
        <div className={styles.ctaInner}>
          <span className={styles.sysLabel}>[ PARTNERSHIP OPEN ]</span>
          <h2 className={`cta-title ${styles.ctaTitle}`}>
            PARTNER WITH<br />
            <span className={styles.gradientText}>US TODAY</span>
          </h2>
          <p className={styles.ctaSub}>
            Join us in shaping the future of technology and empowering the next generation of leaders.
          </p>
          <a href="mailto:codekraft.hub@gmail.com" className={`cta-btn ${styles.ctaButton}`}>
            Contact Partnership Team →
          </a>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <a href="/" className={styles.footerBrandName}>CodeKraft IT Services</a>
            <p className={styles.footerTagline}>Empowering youth through technology, education, and innovation.</p>
          </div>
          <div className={styles.footerContacts}>
            <a href="mailto:codekraft.hub@gmail.com" className={styles.footerContact}>codekraft.hub@gmail.com</a>
            <a href="tel:+917898378933" className={styles.footerContact}>+91 78983 78933</a>
            <span className={styles.footerContact}>Chhattisgarh, India</span>
          </div>
        </div>
        <div className={styles.footerCopy}>
          &copy; {new Date().getFullYear()} YouthX Summit — CodeKraft. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
