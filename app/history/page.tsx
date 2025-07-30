
import HistoryHero from './HistoryHero';
import TimelineSection from './TimelineSection';
import CivilizationsSection from './CivilizationsSection';
import EventsSection from './EventsSection';

export default function HistoryPage() {
  return (
    <main className="min-h-screen">
      <HistoryHero />
      <TimelineSection />
      <CivilizationsSection />
      <EventsSection />
    </main>
  );
}
