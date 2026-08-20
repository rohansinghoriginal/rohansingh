import { Hero } from '@/components/sections/Hero';
import { QuickProof } from '@/components/sections/QuickProof';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { Education } from '@/components/sections/Education';
import { HowIBuild } from '@/components/sections/HowIBuild';
import { Skills } from '@/components/sections/Skills';
import { About } from '@/components/sections/About';
import { BeyondAI } from '@/components/sections/BeyondAI';
import { Contact } from '@/components/sections/Contact';
import { BreathingBackground } from '@/components/ui/GlowField';

export default function Home() {
  return (
    <>
      <BreathingBackground />
      <Hero />
      <QuickProof />
      <SelectedWork />
      <Education />
      <HowIBuild />
      <Skills />
      <About />
      <BeyondAI />
      <Contact />
    </>
  );
}