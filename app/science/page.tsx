
import ScienceHero from './ScienceHero';
import ExperimentsSection from './ExperimentsSection';
import ConceptsSection from './ConceptsSection';
import LabSection from './LabSection';

export default function SciencePage() {
  return (
    <main className="min-h-screen">
      <ScienceHero />
      <ConceptsSection />
      <ExperimentsSection />
      <LabSection />
    </main>
  );
}
