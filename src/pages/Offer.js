// import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const Offer = () => {
  //je récupère le params de l'url avec useParams:
  const { id } = useParams();
  //   console.log(id);
  //le console.log affiche l'id de l'url

  //
  const [offer, setOffer] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setOffer(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);
  //

  return (
    <div>
      {/* faire un map? */}
      {/* <p>{offer.product_details}</p> */}

      <Link to="/">retour vers la page Home</Link>
    </div>
  );
};

export default Offer;
