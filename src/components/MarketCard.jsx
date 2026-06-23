import SignupForm from './SignupForm.jsx';

// The navy "stall ticket" card: where + when we're at the market, plus the
// SMS signup.
export default function MarketCard() {
  return (
    <section className="stall">
      <span className="eyebrow">
        <span className="dot" aria-hidden="true" />
        Catch us at the market
      </span>

      <p className="when">
        Sundays
        <br />
        <span className="accent">11–3</span>
      </p>
      <p className="where">
        <b>Bee Cave Farmers Market</b>
        <br />
        Hill Country Galleria
      </p>

      <div className="rule" />

      <p className="signup-label">Get a text for new flavors &amp; popups</p>
      <SignupForm />
      <p className="signup-fine">Reply STOP to unsubscribe.</p>
    </section>
  );
}
