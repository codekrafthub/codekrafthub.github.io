import styles from './About.module.css';
import { Bot, Laptop, Rocket } from 'lucide-react';

export default function About() {
  const pillars = [
    { icon: <Bot size={28} strokeWidth={1.5} />, title: 'AI & Automation', desc: 'Building intelligent systems that cut costs and boost efficiency.' },
    { icon: <Laptop size={28} strokeWidth={1.5} />, title: 'Bespoke Software', desc: 'Designing and scaling customized web, mobile, and cloud applications.' },
    { icon: <Rocket size={28} strokeWidth={1.5} />, title: 'Digital Shift', desc: 'Helping SMEs and enterprises transition to modern digital workflows.' },
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
          That&apos;s what we do at CodeKraft. Our custom AI and software automation solutions help modern businesses
          embrace digital transformation, optimize operational workflows, and achieve scalability. From custom API integrations
          and cloud databases to intelligent chatbots, we build high-impact tech to help your business grow.
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
