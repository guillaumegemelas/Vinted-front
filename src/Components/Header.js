import { useNavigate } from "react-router-dom";
// import Switch from "react-switch";

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
        <img
          src="https://lereacteur-vinted.netlify.app/static/media/logo.10b0caad793dd0a8ea72.png"
          alt=""
        />
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
        <div className="buttonsFourth">
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
          {/* modifs ajout switch */}
          <div className="sortOf">
            <span style={{ fontSize: "14px" }}>Trier par prix:</span>
            <div
              onClick={() => {
                setSwitch1(true);
                if ({ switch1 } === true) {
                  setPrice("price-desc");
                } else setPrice("price-asc");
              }}
            >
              <Switch />
            </div>
          </div>
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
