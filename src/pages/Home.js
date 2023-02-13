import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = ({ search, searchMin, searchMax, price, token }) => {
  const [offer, setOffer] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // console.log(search);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}&priceMin=${searchMin}&priceMax=${searchMax}&sort=${price}`
        );
        setOffer(response.data);
        setIsLoading(false);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
        console.log(error.response);
        console.log(searchMin);
      }
    };
    fetchData();
  }, [search, searchMin, searchMax, price]);
  return (
    // le découpage n'est pas optimal: home regroupe la page alors qu'il faudrait
    // une div pour la partie haute et une autre pour l'afficahge des annonces
    // il faut faire un plan écrit avant de se lancer dans le css
    <div className="home">
      {isLoading ? (
        <p>En cours de chargement...</p>
      ) : (
        <div className="container">
          <div className="hero">
            <div className="homeBox">
              <div className="homeP">
                <p>Prêts à faire du tri dans vos placards?</p>
              </div>
              <div>
                <button
                  className="homeBut"
                  onClick={() => {
                    //si token existe => page publish, sinon il faut passer par létape connection
                    token ? navigate("/publish") : navigate("/login");
                  }}
                >
                  Commencez à vendre
                </button>
              </div>
            </div>
            <div className="heroImg">
              <img
                src="https://lereacteur-vinted.netlify.app/static/media/tear.884480420945b3afd77b44a6c5f98567.svg"
                alt=""
              />
            </div>
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
