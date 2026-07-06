import logo from '../assets/montys-logo.png';
import crew from '../assets/montys-crew.png';

// Hand-lettered "Monty's" wordmark logo with the "bagels and appetizing" tagline.
export default function Hero() {
  return (
    <section className="hero">
      <img className="wm-logo" src={logo} alt="Monty&rsquo;s" />
      <span className="tagline">bagels and appetizing</span>
      <img
        className="crew"
        src={crew}
        alt="Four illustrated deli counter guys, one holding a bagel"
      />
    </section>
  );
}
