
import EnglishHero from './EnglishHero';
import SkillsSection from './SkillsSection';
import LiteratureSection from './LiteratureSection';
import WritingSection from './WritingSection';

export default function EnglishPage() {
  return (
    <main className="min-h-screen">
      <EnglishHero />
      <SkillsSection />
      <LiteratureSection />
      <WritingSection />
    </main>
  );
}
