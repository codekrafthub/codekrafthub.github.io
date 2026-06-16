import styles from './About.module.css';
import { Bot, GraduationCap, Rocket } from 'lucide-react';

export default function About() {
  const pillars = [
    { icon: <Bot size={28} strokeWidth={1.5} />, title: 'AI & Automation', desc: 'Building intelligent systems that cut costs and boost efficiency.' },
    { icon: <GraduationCap size={28} strokeWidth={1.5} />, title: 'Training Programs', desc: 'Placement-focused learning with live projects and mentorship.' },
    { icon: <Rocket size={28} strokeWidth={1.5} />, title: 'Industry Impact', desc: 'Connecting academia to real business problems from day one.' },
  ];

  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>Who We Are</div>
        <h2 className={styles.headline}>
          We <span className={styles.gradient}>innovate, automate,</span><br />
          and scale.
        </h2>
        <p className={styles.body}>
          That&apos;s what we do at CodeKraft. Our AI and automation solutions help businesses
          embrace digital transformation — while our academic programs deliver internships,
          live projects, and placement-focused training to create industry-ready talent.
          Together, we enable businesses to grow and students to thrive.
        </p>

        <div className={styles.pillars}>
          {pillars.map(({ icon, title, desc }) => (
            <div key={title} className={styles.pillar}>
              <span className={styles.pillarIcon}>{icon}</span>
              <strong className={styles.pillarTitle}>{title}</strong>
              <span className={styles.pillarDesc}>{desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
