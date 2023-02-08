import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
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
    </div>
  );
};

export default Home;
