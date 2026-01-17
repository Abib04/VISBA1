import Navigation from './components/Navigation';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import CTASection from './components/CTASection';
import EventDetails from './components/EventDetails';
import FourPillars from './components/FourPillars';
import Facilitator from './components/Facilitator';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Benefits from './components/Benefits';
import EventDetails from './components/EventDetails';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <PainPoints />
      <CTASection />
      <Introduction />
      <EventDetails />
      <FourPillars />
      <Benefits />
      <EventDetails />
      <Facilitator />
      <Pricing />
      <Gallery />
      <Footer />
    </main>
  );
}
