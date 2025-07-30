
import MathHero from './MathHero';
import TopicsSection from './TopicsSection';
import PracticeSection from './PracticeSection';
import ProgressSection from './ProgressSection';

export default function MathPage() {
  return (
    <main className="min-h-screen">
      <MathHero />
      <TopicsSection />
      <PracticeSection />
      <ProgressSection />
    </main>
  );
}
