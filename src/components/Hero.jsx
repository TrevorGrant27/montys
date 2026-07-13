import crew from '../assets/montys-crew.png';

// One lockup: hand-drawn "Monty's" wordmark with the crew illustration below it.
export default function Hero() {
  return (
    <section className="hero">
      <img
        className="crew"
        src={crew}
        alt="Monty&rsquo;s wordmark above four illustrated crew members, one holding a donut"
      />
      <p className="loc">Austin, Texas</p>
    </section>
  );
}
