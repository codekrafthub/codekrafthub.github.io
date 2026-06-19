import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.legal}>
          <strong>CodeKraft Centre for AI And Emerging Technologies</strong>
        </p>
        <p className={styles.affiliation}>
          Established within the Education and Skill Development Framework of the H.D. Schaefer Memorial Foundation,  
          a Section 8 Company under the Companies Act, 2013, Govt. of India.
        </p>
        <div className={styles.divider} />
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} CK-CAET. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
