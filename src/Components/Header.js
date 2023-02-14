import { useNavigate, useLocation } from "react-router-dom";

const Header = ({
  handleToken,
  token,
  search,
  setSearch,
  searchMin,
  setSearchMin,
  searchMax,
  setSearchMax,
  setPrice,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

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

        {/* les boutons de recherche par prix se cachent si pas sur Home*/}
        {location.pathname === "/" && (
          <div className="fourthButtons">
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

            <div className="sortOf">
              <span style={{ fontSize: "14px", color: "lightgray" }}>
                Trier par prix:
              </span>
              <div
                className="asc"
                onClick={() => {
                  setPrice("price-desc");
                }}
              >
                <button style={{ fontSize: "15px" }}>-</button>
              </div>
              <div
                className="asc"
                onClick={() => {
                  setPrice("price-asc");
                }}
              >
                <button style={{ fontSize: "15px" }}>+</button>
              </div>
            </div>
          </div>
        )}
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
          </div>
        )}
        <div>
          <button
            className="but3"
            onClick={() => {
              //si token existe => page publish, sinon il faut passer par létape connection
              //et voi si on clic sur vendre, soir logué et on va à publish soit non loggué et on va à login
              token
                ? navigate("/publish")
                : navigate("/login", {
                    state: { logged: true },
                  });
            }}
          >
            Vends tes articles
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
