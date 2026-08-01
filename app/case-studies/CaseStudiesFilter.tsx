'use client';

// ---------------------------------------------------------------------------
// CaseStudiesFilter — tiny client island for ?filter= URL param support.
//
// This component intentionally does NOT render any visible HTML of its own.
// It just reads window.location.search after hydration and hides cards that
// don't match the active filter by toggling their `hidden` attribute.
//
// Why this pattern?
//   - The card grid is rendered by the Server Component (page.tsx) and is
//     always present in the static HTML — visible to Google and non-JS users.
//   - This component is only a behavioural enhancement loaded after JS boots.
//   - No useSearchParams() → no BAILOUT_TO_CLIENT_SIDE_RENDERING.
// ---------------------------------------------------------------------------

import { useEffect } from 'react';

function applyFilter(filter: string | null) {
  const grid = document.getElementById('case-studies-grid');
  if (!grid) return;

  const cards = grid.querySelectorAll<HTMLElement>('[data-id]');
  let anyVisible = false;

  cards.forEach((card) => {
    const matches =
      !filter ||
      card.dataset.id === filter ||
      card.dataset.category === filter ||
      (card.dataset.industry ?? '').includes(filter.toLowerCase());

    card.hidden = !matches;
    if (matches) anyVisible = true;
  });

  // Show/hide the "no results" message if it exists
  const noResults = grid.querySelector<HTMLElement>('[data-no-results]');
  if (noResults) noResults.hidden = anyVisible;
}

export default function CaseStudiesFilter() {
  useEffect(() => {
    const readAndApply = () => {
      const params = new URLSearchParams(window.location.search);
      applyFilter(params.get('filter'));
    };

    // Apply on first mount
    readAndApply();

    // Keep in sync with browser back/forward navigation
    window.addEventListener('popstate', readAndApply);
    return () => window.removeEventListener('popstate', readAndApply);
  }, []);

  // Renders nothing — this is a pure behaviour component
  return null;
}
