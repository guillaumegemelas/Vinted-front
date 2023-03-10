import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CheckoutForm = ({ title, amount }) => {
  const [isLoading, setIsLoading] = useState(false);
  //state qui sert à savoir si le paiement a bien été effectué
  const [completed, setCompleted] = useState(false);

  //permettra de créer une requête vers stripe pour obtenir un token
  const stripe = useStripe();

  //permettra de récupérer les donnéesbancaires de l'utilisateur
  const elements = useElements();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //je fais passer isLoading à true
      setIsLoading(true);
      //je récupère le contenu de l'input de CardElement
      const cardElement = elements.getElement(CardElement);

      const stripeResponse = await stripe.createToken(cardElement, {
        name: "user_id",
      });

      const stripeToken = stripeResponse.token.id;
      console.log("token de stripe:" + stripeToken);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: title,
          amount: amount,
        }
      );
      console.log(response.data);

      // si réponse du backend, succeeded
      if (response.data.status === "succeeded") {
        //on modifie les states isLoading et Completed
        setIsLoading(false);
        setCompleted(true);
      }

      //on envoie les inforamtions à stripe
    } catch (error) {
      console.log(error.response, "erreur 🤒");
    }
  };

  return (
    <form className="cardElement" onSubmit={handleSubmit}>
      <CardElement />
      {completed ? (
        <div
          className="confirmation"
          onClick={() => {
            navigate("/");
          }}
        >
          <p>Paiement effectué</p>
        </div>
      ) : (
        <button disabled={isLoading} type="submit">
          Payer
        </button>
      )}
    </form>
  );
};

export default CheckoutForm;
