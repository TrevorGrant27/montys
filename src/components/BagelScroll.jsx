// Horizontal snap-scroll shelf of bagel shots.
// Until real photos land, each card shows a hand-drawn-style bagel doodle;
// swap the <BagelDoodle /> for an <img> per flavor when photos are ready.
const FLAVORS = ['everything', 'sesame', 'plain', 'poppy', 'onion', 'salt'];

function BagelDoodle({ tilt = 0 }) {
  return (
    <svg
      className="doodle"
      viewBox="0 0 100 100"
      role="img"
      aria-hidden="true"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <ellipse cx="50" cy="52" rx="35" ry="31" strokeWidth="5" transform="rotate(-5 50 52)" />
        <ellipse cx="50" cy="54" rx="12" ry="10" strokeWidth="4" transform="rotate(4 50 54)" />
        {/* seeds */}
        <path strokeWidth="3" d="M32 33l5 -3" />
        <path strokeWidth="3" d="M48 27l5 -1" />
        <path strokeWidth="3" d="M65 32l4 3" />
        <path strokeWidth="3" d="M75 47l4 4" />
        <path strokeWidth="3" d="M70 68l-3 4" />
        <path strokeWidth="3" d="M27 62l-4 3" />
        <path strokeWidth="3" d="M38 76l-2 4" />
        <path strokeWidth="3" d="M55 79l1 4" />
      </g>
    </svg>
  );
}

export default function BagelScroll() {
  return (
    <section className="shelf" aria-label="The bagels">
      <div className="shelf-track">
        {FLAVORS.map((flavor, i) => (
          <figure className="card" key={flavor}>
            <div className="card-ph">
              <BagelDoodle tilt={(i % 3) * 14 - 10} />
            </div>
            <figcaption>{flavor}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
