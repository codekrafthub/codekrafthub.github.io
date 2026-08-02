'use client';

import { XCircle, CheckCircle2, ShieldOff, ShieldCheck, Flame, Rocket, Package, Layers } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Link from 'next/link';
import styles from './WhyCodeKraft.module.css';

const ROWS = [
  {
    pain: {
      icon: <Package size={20} strokeWidth={1.8} />,
      heading: 'Generic output',
      body: 'Cookie-cutter solutions copy-pasted across clients — not designed for your domain, your scale, or your team.',
    },
    gain: {
      icon: <Layers size={20} strokeWidth={1.8} />,
      heading: 'Built for your domain',
      body: 'Deep sector research before a single line of code is written. Your workflows, your constraints, your terminology.',
    },
  },
  {
    pain: {
      icon: <ShieldOff size={20} strokeWidth={1.8} />,
      heading: 'Spec-complete, value-empty',
      body: 'Delivered on time. Used by no one. Retired in 18 months. The build was right — the goal was wrong.',
    },
    gain: {
      icon: <ShieldCheck size={20} strokeWidth={1.8} />,
      heading: 'Outcome-anchored delivery',
      body: 'We define success by business impact — revenue saved, time reclaimed, errors eliminated — not feature count.',
    },
  },
  {
    pain: {
      icon: <Flame size={20} strokeWidth={1.8} />,
      heading: 'AI as a checkbox',
      body: 'A chatbot bolted on because the RFP asked for one. No integration, no workflow change, no real value.',
    },
    gain: {
      icon: <Rocket size={20} strokeWidth={1.8} />,
      heading: 'AI as architecture',
      body: 'Automation and intelligence designed into the system from day one — not retrofitted after launch.',
    },
  },
];

export default function WhyCodeKraft() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="why-codekraft"
      ref={revealRef}
      className={`${styles.section} reveal`}
    >
      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>Why It Matters</span>
          <h2 className={styles.heading}>
            The Hidden Cost of{' '}
            <span className={styles.accent}>Getting Tech Wrong</span>
          </h2>
          <p className={styles.sub}>
            Most businesses don&apos;t fail for lack of ambition, they fail because their technology doesn&apos;t match their intent.
          </p>
        </div>

        {/* Comparison table */}
        <div className={styles.tableWrap}>
          {/* Column headers */}
          <div className={styles.colHeaders}>
            <div className={styles.colHeaderLeft}>
              <XCircle size={18} strokeWidth={2} />
              <span>The Wrong Build</span>
            </div>

            <div className={styles.vsDivider} aria-hidden="true">
              <span className={styles.vsText}>vs</span>
            </div>

            <div className={styles.colHeaderRight}>
              <CheckCircle2 size={18} strokeWidth={2} />
              <span>The CodeKraft Way</span>
            </div>
          </div>

          {/* Shimmer rule */}
          <div className={styles.shimmerLine} aria-hidden="true" />

          {/* Rows */}
          <div className={styles.rows}>
            {ROWS.map((row, i) => (
              <div key={i} className={styles.row}>
                {/* Pain cell */}
                <div className={styles.cellPain}>
                  <span className={styles.cellIcon}>{row.pain.icon}</span>
                  <div className={styles.cellText}>
                    <h3 className={styles.cellHeading}>{row.pain.heading}</h3>
                    <p className={styles.cellBody}>{row.pain.body}</p>
                  </div>
                </div>

                {/* Row divider */}
                <div className={styles.rowDivider} aria-hidden="true">
                  <div className={styles.rowDividerLine} />
                </div>

                {/* Gain cell */}
                <div className={styles.cellGain}>
                  <span className={styles.cellIcon}>{row.gain.icon}</span>
                  <div className={styles.cellText}>
                    <h3 className={styles.cellHeading}>{row.gain.heading}</h3>
                    <p className={styles.cellBody}>{row.gain.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaRow}>
          <Link href="#contact" className={styles.cta}>
            Build it right, from day one
          </Link>
        </div>
      </div>
    </section>
  );
}
