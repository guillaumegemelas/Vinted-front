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
    "pk_test_51MbMv9KWnFPSCRftX2iOsV3iYagReSPaf7v6CYoQeioi7Qeo2uCsaKa4AvsK35lloAaJcVxpGrYHhJZWhTIpgBaR00gw7Kn7Zb"
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
            il ne vous reste plus qu'une seule étape pour vous offrir{" "}
            <span>{title}</span>. Vous allez payer <span>{totalPrice}€ </span>
            (frais de protection et frais de port inclus)
          </p>
        </div>
        <div className="payBut">
          {/* Elements va devoir englober toute la logique de paiement */}
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
