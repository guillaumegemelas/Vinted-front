// import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const Offer = ({ token }) => {
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
          // `https://site--backend-vinted--zqfvjrr4byql.code.run/offer/${id}`
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
              <div className="price">
                <p>{offer.product_price}€</p>
              </div>

              {offer.product_details.map((detail, index) => {
                const key = Object.keys(detail)[0];
                // console.log(detail[key]);
                return (
                  <div className="text" key={index}>
                    <div className="key">
                      <p>{key}:</p>
                    </div>
                    <div className="key1">
                      <p>{detail[key]}</p>
                    </div>
                  </div>
                );
              })}
              <div className="straigth"></div>
              <div className="nameAndBuy">
                <div>
                  <p>{offer.product_name}</p>
                </div>
                <div>
                  {/* lien vers la page Payment */}
                  {token ? (
                    <Link
                      to="/payment"
                      state={{
                        title: offer.product_name,
                        price: offer.product_price,
                      }}
                    >
                      <button className="buy">Acheter</button>
                    </Link>
                  ) : (
                    // retour à la page login si pas connecté
                    <Link to="/login">
                      <button
                        className="buy"
                        style={{ backgroundColor: "lightgray", border: "none" }}
                      >
                        Acheter
                      </button>
                    </Link>
                  )}
                </div>
              </div>
              <div className="icon">
                <Link to="/">
                  <p style={{ fontSize: "25px", color: "lightgray" }}>↩</p>{" "}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Offer;
