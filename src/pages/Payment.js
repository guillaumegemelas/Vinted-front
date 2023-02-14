import { useLocation } from "react-router-dom";

//import Stripe
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../Components/CheckoutForm";

const Payment = () => {
  const location = useLocation();
  const { title, price } = location.state;

  //
  const stripePromise = loadStripe(
    "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
  );
  //

  let sendPrice = ((20 / 100) * price).toFixed(2);
  let protectPrice = ((10 / 100) * price).toFixed(2);
  let totalPrice = (
    Number(price) +
    Number(sendPrice) +
    Number(protectPrice)
  ).toFixed(2);

  return (
    <div className="container12">
      <div className="paymentBox">
        <h1>Résumé de la commande</h1>

        <div className="items">
          <span>Commande</span>
          <span>{price}€</span>
        </div>
        <div className="items">
          <span>Frais de protection acheteurs</span>
          <span>{protectPrice}€</span>
        </div>
        <div className="items">
          <span>Frais de port</span>
          <span>{sendPrice}€</span>
        </div>
        <div className="line"> </div>
        <div className="items">
          <span style={{ color: "black", fontWeight: "bold" }}>TOTAL</span>
          <span style={{ color: "black", fontWeight: "bold" }}>
            {totalPrice}€
          </span>
        </div>
        <div className="descrPaym">
          <p>
            Il ne vous reste plus qu'une seule étape pour vous offrir{" "}
            <span>{title}</span>. Vous allez payer <span>{totalPrice}€ </span>
            (frais de protection et frais de port inclus)
          </p>
        </div>
        <div className="payBut">
          {/* Elements va devoir englober toute la logique de paiement */}
          <Elements className="checkForm" stripe={stripePromise}>
            <CheckoutForm amount={totalPrice} title={title} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
