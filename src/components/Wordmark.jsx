// The stacked "Monty's" wordmark: a brick-colored drop shadow behind the
// navy top layer, with the "Bagels ♥ Shmear" tagline beneath. The extra
// kerning spans fine-tune spacing around the "ty" and the apostrophe.
function MontysText({ shadow = false }) {
  return (
    <span
      className={`wm ${shadow ? 'wm-shadow' : 'wm-top'}`}
      aria-hidden={shadow ? 'true' : undefined}
    >
      Mont
      <span className="kern-ty">y</span>
      <span className="kern-yap">
        <span className="ap">{'’'}</span>
      </span>
      s
    </span>
  );
}

export default function Wordmark({ className = '' }) {
  return (
    <span className={`wm-stack ${className}`.trim()} aria-label="Monty's">
      <MontysText shadow />
      <MontysText />

      <span className="tagline">
        Bagels{' '}
        <svg className="tagline-heart" viewBox="0 0 24 22" aria-hidden="true">
          <path
            d="M12 21s-7.5-4.6-10-9.1C.5 8.6 1.7 4.5 5.4 3.3c2.4-.8 4.9.3 6.6 2.4 1.7-2.1 4.2-3.2 6.6-2.4 3.7 1.2 4.9 5.3 3.4 8.6C19.5 16.4 12 21 12 21z"
            fill="currentColor"
          />
        </svg>{' '}
        Shmear
      </span>
    </span>
  );
}
