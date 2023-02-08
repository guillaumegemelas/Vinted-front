import { Link } from "react-router-dom";

const Home = ({ offer, isLoading }) => {
  return (
    <div className="home">
      {isLoading ? (
        <p>En cours de chargement...</p>
      ) : (
        <div>
          <h1>je suis sur la page Home</h1>
          <Link to="/offer/">Vers la page Offer</Link>

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
                <div key={index}>
                  <div>
                    {elem.map((item, num) => {
                      return <div key={num}>{item.offers}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      ;
    </div>
  );
};

export default Home;
