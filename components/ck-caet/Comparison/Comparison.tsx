import React from 'react';
import { XCircle, CheckCircle2, TrendingDown, TrendingUp, AlertTriangle, Rocket, Brain, Sparkles } from 'lucide-react';
import styles from './Comparison.module.css';

export default function SuccessComparison() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.flexHeader}>
          <div className={styles.textContent}>
            <div className={styles.labelRow}>
              <span className={styles.labelBar} aria-hidden />
              <span className={styles.label}>Career Trajectory</span>
            </div>
            <h2 className={styles.heading}>The AI Revolution: Where do you stand?</h2>
            <p className={styles.sub}>
              90% of traditional roles are evolving. You can either watch the change or lead it. 
              Here is how CK-CAET transforms your career path.
            </p>
          </div>
          
          <div className={styles.visualContainer}>
            <div className={styles.glitchBox}>
              <div className={styles.corePulse}>
                <Brain className={styles.brainIcon} size={48} />
                <div className={styles.orbit}></div>
                <div className={styles.ring}></div>
              </div>
              <div className={styles.floatingTag} style={{ top: '10%', right: '10%' }}>
                <Sparkles size={14} /> <span>AI Powered</span>
              </div>
              <div className={styles.floatingTag} style={{ bottom: '20%', left: '0%' }}>
                <span>Future Proof</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {/* Status Quo */}
          <div className={styles.col}>
            <div className={styles.colHeader}>
              <AlertTriangle className={styles.alertIcon} />
              <h3>Conventional Path</h3>
            </div>
            <div className={styles.colContent}>
              <div className={styles.item}>
                <TrendingDown className={styles.itemIconRed} />
                <div className={styles.itemText}>
                  <h4>Stagnant Growth</h4>
                  <p>Generic skills that are increasingly automated by AI agents.</p>
                </div>
              </div>
              <div className={styles.item}>
                <XCircle className={styles.itemIconRed} />
                <div className={styles.itemText}>
                  <h4>Theoretical Learning</h4>
                  <p>Certificates without application. No experience on production code.</p>
                </div>
              </div>
              <div className={styles.item}>
                <XCircle className={styles.itemIconRed} />
                <div className={styles.itemText}>
                  <h4>Low Market Demand</h4>
                  <p>Competing with thousands for roles with standard pay.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CK-CAET Path */}
          <div className={styles.colFeatured}>
            <div className={styles.colHeader}>
              <Rocket className={styles.rocketIcon} />
              <h3>The CAET Edge</h3>
            </div>
            <div className={styles.colContent}>
              <div className={styles.item}>
                <TrendingUp className={styles.itemIconBlue} />
                <div className={styles.itemText}>
                  <h4>Exponential Growth</h4>
                  <p>Mastering AI orchestration and advanced system design.</p>
                </div>
              </div>
              <div className={styles.item}>
                <CheckCircle2 className={styles.itemIconBlue} />
                <div className={styles.itemText}>
                  <h4>Industrial Precision</h4>
                  <p>Coding on live enterprise projects at CodeKraft IT Services.</p>
                </div>
              </div>
              <div className={styles.item}>
                <CheckCircle2 className={styles.itemIconBlue} />
                <div className={styles.itemText}>
                  <h4>Elite Opportunities</h4>
                  <p>Direct entry into our high-growth hiring partner network.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
