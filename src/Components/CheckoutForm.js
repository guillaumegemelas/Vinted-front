import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import axios from "axios";

const CheckoutForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  //state qui sert à savoir si le paiement a bien été effectué
  const [completed, setCompleted] = useState(false);

  //permettra de créer une requête vers stripe pour obtenir un token
  const stripe = useStripe();

  //permettra de récupérer les donnéesbancaires de l'utilisateur
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //je fais passer isLoading à true
      setIsLoading(true);
      //je récupère le contenu de l'input de CardElement
      const cardElement = elements.getElement(CardElement);

      const stripeResponse = await stripe.createToken(cardElement, {
        name: "id de l'acheteur",
      });

      const stripeToken = stripeResponse.token.id;
      console.log(stripeToken);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          stripeToken: stripeToken,
          title: "title",
          amount: "amount",
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
      console.log(error.message, "erreur 🤒");
    }
  };

  return (
    <form className="cardElement" onSubmit={handleSubmit}>
      <CardElement />
      {completed ? (
        <p>Paiement effectué</p>
      ) : (
        <button disabled={isLoading} type="submit">
          Payer
        </button>
      )}
    </form>
  );
};

export default CheckoutForm;
