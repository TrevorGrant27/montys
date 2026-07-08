// Single job: tell people what Monty's is, then get them to Hotplate.
// TODO: confirm the real Hotplate storefront URL.
const HOTPLATE_URL = 'https://www.hotplate.com/montys';

export default function OrderCta() {
  return (
    <section className="order">
      <p className="pitch">
        Perfectly crunchy and chewy bagels with ridiculously good schmear.
      </p>
      <p className="details">
        Everything is house-made using fresh, high quality, locally sourced
        ingredients. Expect rotating specials with unique, seasonal flavors.
        Pre-orders close Friday for Sunday pick up. We boil and bake the bagels
        right before you get them.
      </p>
      <a className="order-btn" href={HOTPLATE_URL} target="_blank" rel="noopener">
        Order on Hotplate
      </a>
    </section>
  );
}
