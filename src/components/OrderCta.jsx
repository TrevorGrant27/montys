// Single job: get people to the Hotplate storefront for the next drop.
// TODO: confirm the real Hotplate storefront URL.
const HOTPLATE_URL = 'https://www.hotplate.com/montysatx';

export default function OrderCta() {
  return (
    <section className="order">
      <p className="order-note">pre-order drops &mdash; first come, first served</p>
      <a className="order-btn" href={HOTPLATE_URL} target="_blank" rel="noopener">
        Order on Hotplate
      </a>
      <p className="order-sub">
        Follow{' '}
        <a href="https://instagram.com/montysatx" target="_blank" rel="noopener">
          @montysatx
        </a>{' '}
        to catch the next drop
      </p>
    </section>
  );
}
