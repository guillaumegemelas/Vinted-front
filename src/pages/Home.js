import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = ({ search, searchMin }) => {
  const [offer, setOffer] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // console.log(search);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}&priceMin=${searchMin}`
        );
        setOffer(response.data);
        setIsLoading(false);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [search, searchMin]);
  return (
    <div className="home">
      {isLoading ? (
        <p>En cours de chargement...</p>
      ) : (
        <div className="container">
          <div className="homeBox">
            <div className="homeP">
              <p>Prêts à faire du tri dans vos placards?</p>
            </div>
            <div>
              <button className="homeBut">Commencez à vendre</button>
            </div>
          </div>

          {/* image déchitée pas top, à virer si pose problème */}
          <div className="heroImg">
            <img
              src="https://lereacteur-vinted.netlify.app/static/media/tear.884480420945b3afd77b44a6c5f98567.svg"
              alt=""
            />
          </div>

          <div className="listOfOffers">
            {/* Mettre filteredOffers à la place si requete depuis vinted back Northflank */}
            {offer.offers.map((elem, index) => {
              return (
                //lien vers la page Offer avec l'offre dont l'id est indiquée

                <Link to={`/offer/${elem._id}`} key={index}>
                  {/* {console.log(elem._id)} */}
                  <article key={elem._id} className="product">
                    <div className="avatar">
                      {elem.owner.account.avatar && (
                        <img
                          src={elem.owner.account.avatar.secure_url}
                          alt=""
                        />
                      )}
                      <p>{elem.owner.account.username}</p>
                    </div>
                    <div>
                      <img src={elem.product_image.secure_url} alt="" />
                    </div>
                    <div className="above">
                      <p>{elem.product_price}€</p>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
