import logo from '../assets/montys-logo.png';
import crew from '../assets/montys-crew.png';

// Hand-drawn "Monty's" wordmark logo + the crew illustration.
export default function Hero() {
  return (
    <section className="hero">
      <img className="wm-logo" src={logo} alt="Monty&rsquo;s" />
      <p className="loc">Austin, Texas</p>
      <img
        className="crew"
        src={crew}
        alt="Four illustrated deli counter guys, one holding a bagel"
      />
    </section>
  );
}
