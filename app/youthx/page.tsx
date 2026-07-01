import type { Metadata } from 'next';
import Background3D from '@/components/youthx/Background3D/Background3D';
import YouthXHero from '@/components/youthx/YouthXHero/YouthXHero';
import YouthXScene from '@/components/youthx/YouthXScene/YouthXScene';

export const metadata: Metadata = {
  title: 'YouthX Summit | Creating Lasting Impact',
  description: 'A premier annual tech summit by CodeKraft — empowering 400+ young minds through keynotes, exhibitions, and mentorship. Chhattisgarh, India.',
};

export default function YouthXPage() {
  return (
    <main style={{ backgroundColor: '#050505', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      {/* Fixed 3D background canvas */}
      <Background3D />

      {/* Scrollable cinematic content */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Scene 1 + 2: Boot → Breach (pinned hero) */}
        <YouthXHero />

        {/* Scenes 3–9: Broadcast → Partner CTA → Footer */}
        <YouthXScene />
      </div>
    </main>
  );
}
