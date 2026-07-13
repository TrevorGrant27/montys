import logo from '../assets/montys-logo.png';
import crew from '../assets/montys-crew.png';

// Hand-drawn "Monty's" wordmark, the location line, then the crew illustration.
export default function Hero() {
  return (
    <section className="hero">
      <img className="wm-logo" src={logo} alt="Monty&rsquo;s" />
      <p className="loc">Austin, Texas</p>
      <img
        className="crew"
        src={crew}
        alt="Four illustrated Monty&rsquo;s crew members, one holding a donut"
      />
    </section>
  );
}
