import Hero from './components/Hero.jsx';
import OrderCta from './components/OrderCta.jsx';
import BagelScroll from './components/BagelScroll.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <main className="page">
      <Hero />
      <OrderCta />
      <BagelScroll />
      <Footer />
    </main>
  );
}
