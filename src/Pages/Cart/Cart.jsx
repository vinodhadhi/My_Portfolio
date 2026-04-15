import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  return (
    <section className="cart page-section">
      <div className="cart__card section-shell">
        <div className="eyebrow">Saved items</div>
        <h1 className="section-title">Cart UI placeholder, ready for the next feature.</h1>
        <p className="section-copy">
          This route is now styled to match the portfolio and can be extended later
          with real state management or checkout behavior.
        </p>
        <Link className="secondary-button" to="/products">
          Return to products
        </Link>
      </div>
    </section>
  );
};

export default Cart;
