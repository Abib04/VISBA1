import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import PainPoints from './components/PainPoints';
import Introduction from './components/Introduction';
import FourPillars from './components/FourPillars';
import TargetAudience from './components/TargetAudience';
import Benefits from './components/Benefits';
import Facilitator from './components/Facilitator';
import EventDetails from './components/EventDetails';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Gallery />
      <PainPoints />
      <Introduction />
      <FourPillars />
      <TargetAudience />
      <Benefits />
      <Facilitator />
      <EventDetails />
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
