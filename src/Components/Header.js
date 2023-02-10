import { useNavigate } from "react-router-dom";
import logo from "../img/logo.svg";

const Header = ({
  handleToken,
  token,
  search,
  setSearch,
  searchMin,
  setSearchMin,
  searchMax,
  setSearchMax,
}) => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="trioButtons">
        <div className="search">
          <input
            type="text"
            value={search}
            placeholder="🔍   Recherche des articles"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="priceSelect">
          <input
            type="number"
            value={searchMin}
            placeholder="Min"
            onChange={(event) => setSearchMin(event.target.value)}
          />
          <input
            type="number"
            value={searchMax}
            placeholder="Max"
            onChange={(event) => setSearchMax(event.target.value)}
          />
        </div>
      </div>

      <div className="buttons">
        {/* il faut que ce bouton soit visible que sur la page home */}
        {token ? (
          <button
            className="but0"
            onClick={() => {
              handleToken(null);
              navigate("/login");
            }}
          >
            Se déconnecter
          </button>
        ) : (
          <div>
            <button className="but1" onClick={() => navigate("/signup")}>
              S'inscrire
            </button>

            <button className="but2" onClick={() => navigate("/login")}>
              Se connecter
            </button>

            <button className="but3" onClick={() => navigate("/")}>
              Vends tes articles
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
