// Single job: get people to the Hotplate storefront for the next drop.
// TODO: confirm the real Hotplate storefront URL.
const HOTPLATE_URL = 'https://www.hotplate.com/montysatx';

export default function OrderCta() {
  return (
    <section className="order">
      <p className="order-note">
        pre-order through the week &mdash; orders close Friday
      </p>
      <a className="order-btn" href={HOTPLATE_URL} target="_blank" rel="noopener">
        Order on Hotplate
      </a>
    </section>
  );
}
