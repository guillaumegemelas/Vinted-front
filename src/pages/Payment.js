import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const { title, price } = location.state;

  let sendPrice = "3,8";
  let protectPrice = "0,4";
  let totalPrice = (Number(price) + Number(3.8) + Number(0.4)).toFixed(2);

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
      </div>
    </div>
  );
};

export default Payment;
