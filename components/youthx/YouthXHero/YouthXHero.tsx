'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './YouthXHero.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function YouthXHero() {
  const heroRef       = useRef<HTMLElement>(null);
  const gateWrapRef   = useRef<HTMLDivElement>(null);
  const xLeftRef      = useRef<HTMLDivElement>(null);
  const xRightRef     = useRef<HTMLDivElement>(null);
  const logoRef       = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Initial states
      gsap.set(xLeftRef.current,  { xPercent: 0, opacity: 1 });
      gsap.set(xRightRef.current, { xPercent: 0, opacity: 1 });
      gsap.set(logoRef.current,   { opacity: 0, scale: 0.88, y: 18 });
      gsap.set(scrollHintRef.current, { opacity: 0, y: 0 });

      // Boot: animate the wrapper only — gates are owned exclusively by ScrollTrigger
      gsap.from(gateWrapRef.current, {
        scale: 0.5,
        opacity: 0,
        rotation: -20,
        duration: 1.4,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Scroll hint appears after boot animation settles
      gsap.to(scrollHintRef.current, {
        opacity: 0.55,
        duration: 0.8,
        delay: 2.0,
        ease: 'power2.out',
        onComplete: () => {
          gsap.to(scrollHintRef.current, {
            y: 7, repeat: -1, yoyo: true, duration: 1.3, ease: 'sine.inOut',
          });
        },
      });

      // Scroll timeline (pinned 280% scroll distance):
      //  0.00–0.45 : gates slide apart
      //  0.28–0.55 : logo fades in
      //  0.55–0.85 : hold — logo breathes
      //  0.85–1.00 : logo exits upward
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=280%',
          scrub: 2,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(xLeftRef.current,
        { xPercent: 0, opacity: 1 },
        { xPercent: -130, opacity: 0, duration: 0.45, ease: 'power2.inOut' },
      0);

      tl.fromTo(xRightRef.current,
        { xPercent: 0, opacity: 1 },
        { xPercent: 130, opacity: 0, duration: 0.45, ease: 'power2.inOut' },
      0);

      tl.to(logoRef.current, {
        opacity: 1, scale: 1, y: 0,
        duration: 0.22, ease: 'power2.out',
      }, 0.28);

      tl.to(logoRef.current, {
        opacity: 0, y: -20,
        duration: 0.15, ease: 'power2.in',
      }, 0.85);

      // Hide scroll hint once user scrolls
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top -3%',
        onEnter:     () => gsap.to(scrollHintRef.current, { opacity: 0, duration: 0.3 }),
        onEnterBack: () => gsap.to(scrollHintRef.current, { opacity: 0.55, duration: 0.4 }),
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Navigation (Logo & Back Button) */}
      <Link href="/" className={styles.logo}>
        <Image src="/codekraft_logo_white.png" alt="" aria-hidden width={36} height={36} />
        <span>CodeKraft</span>
      </Link>

      <Link href="/ck-caet" className={styles.backButton}>
        ← Back to CAET
      </Link>

      <section ref={heroRef} className={styles.hero}>
        <div className={styles.content}>

          {/* Full logo — sits beneath the gates, revealed as they open */}
          <div className={styles.revealLayer}>
            <div ref={logoRef} className={styles.fullLogoWrapper}>
              <Image
                src="/youthx-logo-full.png"
                alt="YouthX Summit"
                width={640}
                height={210}
                className={styles.fullLogoImage}
                priority
              />
            </div>
          </div>

          {/* X gate — boot wrapper + left/right pre-split halves */}
          <div className={styles.xGateOuter}>
            <div ref={gateWrapRef} className={styles.xGateWrapper}>
              <div className={styles.xGlow} />

              <div ref={xLeftRef} className={styles.xGateLeft}>
                <img src="/youthx-x-left.png" alt="" className={styles.xGateImg} draggable={false} />
              </div>

              <div ref={xRightRef} className={styles.xGateRight}>
                <img src="/youthx-x-right.png" alt="" className={styles.xGateImg} draggable={false} />
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div ref={scrollHintRef} className={styles.scrollHint}>
            <span className={styles.scrollLine} />
            <span className={styles.scrollText}>SCROLL</span>
          </div>

        </div>
      </section>
    </>
  );
}
