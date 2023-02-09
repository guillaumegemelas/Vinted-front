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
        // console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <div className="response">
        {isLoading ? (
          <p>En cours de chargement...</p>
        ) : (
          <div className="offerGlobal">
            <div className="offerPicture">
              <img src={offer.product_image.secure_url} alt="" />
            </div>
            <div className="offerDescription">
              {offer.product_details.map((detail, index) => {
                const key = Object.keys(detail)[0];
                console.log(detail[key]);
                return (
                  <div className="text" key={index}>
                    <span>{key}:</span>
                    <span>{detail[key]}</span>
                  </div>
                );
              })}
              <p>{offer.product_price}€</p>
              <p>{offer.product_name}</p>
            </div>
          </div>
        )}
      </div>
      <Link to="/">retour vers la page Home</Link>
    </div>
  );
};

export default Offer;
