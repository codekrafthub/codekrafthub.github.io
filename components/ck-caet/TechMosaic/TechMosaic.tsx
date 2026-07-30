import React from 'react';
import { Cpu, Terminal, Zap } from 'lucide-react';
import styles from './TechMosaic.module.css';

const TECH_CATEGORIES = [
  {
    title: 'Development & Ops',
    items: [
      { name: 'Python', url: 'https://api.iconify.design/logos:python.svg' },
      { name: 'C / C++', url: 'https://cdn.simpleicons.org/cplusplus' },
      { name: 'PostgreSQL', url: 'https://api.iconify.design/logos:postgresql.svg' },
      { name: 'Git', url: 'https://api.iconify.design/logos:git-icon.svg' },
      { name: 'Docker', url: 'https://api.iconify.design/logos:docker-icon.svg' },
      { name: 'AWS', url: 'https://api.iconify.design/logos:aws.svg' },
    ],
  },
  {
    title: 'AI & Data Science',
    items: [
      { name: 'PyTorch', url: 'https://api.iconify.design/logos:pytorch-icon.svg' },
      { name: 'TensorFlow', url: 'https://api.iconify.design/logos:tensorflow.svg' },
      { name: 'Scikit-Learn', url: 'https://cdn.simpleicons.org/scikitlearn' },
      { name: 'Pandas', url: 'https://api.iconify.design/logos:pandas-icon.svg' },
      { name: 'NumPy', url: 'https://api.iconify.design/logos:numpy.svg' },
      { name: 'Nvidia', url: 'https://cdn.simpleicons.org/nvidia' },
    ],
  },
  {
    title: 'Generative AI',
    items: [
      { name: 'LangChain', url: 'https://cdn.simpleicons.org/langchain' },
      { name: 'OpenAI', url: 'https://api.iconify.design/logos:openai-icon.svg' },
      { name: 'Hugging Face', url: 'https://cdn.simpleicons.org/huggingface' },
      { name: 'Anthropic', url: 'https://cdn.simpleicons.org/anthropic' },
      { name: 'Meta AI', url: 'https://api.iconify.design/logos:meta-icon.svg' },
      { name: 'Elastic', url: 'https://api.iconify.design/logos:elasticsearch.svg' },
    ],
  },
  {
    title: 'Analytics & BI',
    items: [
      { name: 'Power BI', url: 'https://api.iconify.design/logos:microsoft-power-bi.svg' },
      { name: 'Tableau', url: 'https://api.iconify.design/logos:tableau-icon.svg' },
      { name: 'SQL Server', url: 'https://api.iconify.design/devicon:microsoftsqlserver.svg' },
      { name: 'KNIME', url: 'https://cdn.simpleicons.org/knime' },
      { name: 'Excel', url: 'https://api.iconify.design/vscode-icons:file-type-excel.svg' },
      { name: 'Jupyter', url: 'https://api.iconify.design/logos:jupyter.svg' },
    ],
  },
];

export default function TechMosaic() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.flexHeader}>
          <div className={styles.textContent}>
            <div className={styles.labelRow}>
              <span className={styles.labelBar} aria-hidden />
              <span className={styles.label}>Competence</span>
            </div>
            <h2 className={styles.heading}>The Tools of the Future</h2>
            <p className={styles.sub}>
              We don't teach syntax; we teach ecosystems. Master the industrial stack used by global 
              tech giants to build, deploy, and scale AI-driven applications.
            </p>
          </div>

          <div className={styles.visualContainer}>
            <div className={styles.matrixBox}>
              <div className={styles.stackCore}>
                <Cpu className={styles.cpuIcon} size={48} />
                <div className={styles.matrixGrid}></div>
                <div className={styles.glowCircle}></div>
              </div>
              <div className={styles.floatingTool} style={{ top: '0%', left: '10%' }}>
                <Terminal size={12} /> <span>Scalable</span>
              </div>
              <div className={styles.floatingTool} style={{ bottom: '15%', right: '5%' }}>
                <Zap size={12} /> <span>Production Ready</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {TECH_CATEGORIES.map((cat) => (
            <div key={cat.title} className={styles.category}>
              <h3 className={styles.catTitle}>{cat.title}</h3>
              <div className={styles.pillContainer}>
                {cat.items.map((tech) => (
                  <div key={tech.name} className={styles.techItem}>
                    <img 
                      src={tech.url} 
                      alt={tech.name}
                      className={styles.techLogo}
                      loading="lazy"
                    />
                    <span className={styles.techName}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
