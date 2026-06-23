import GrainOverlay from './components/GrainOverlay.jsx';
import Hero from './components/Hero.jsx';
import MarketCard from './components/MarketCard.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <GrainOverlay />

      <main className="page">
        <Hero />
        <MarketCard />
      </main>

      <Footer />
    </>
  );
}
