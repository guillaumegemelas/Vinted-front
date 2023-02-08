import { Link } from "react-router-dom";
// import Offers from "../Components/Offers";

const Home = ({ offer, isLoading }) => {
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

          <div className="listOfOffers">
            {offer.offers.map((elem, index) => {
              return (
                //lien vers la page Offer avec l'offre dont l'id est indiquée
                <Link to={`/offer/${elem._id}`} key={index}>
                  {/* {console.log(elem._id)} */}
                  <div key={elem._id} className="product">
                    <div>
                      <p>{elem.owner.account.username}</p>
                      <img src={elem.product_image.url} alt="" />
                    </div>
                  </div>
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
