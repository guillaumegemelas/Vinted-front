import { useNavigate } from "react-router-dom";
import logo from "../img/logo.svg";
// import Cookies from "js-cookie";

const Header = ({ handleToken, token }) => {
  const navigate = useNavigate();

  // const token = Cookies.get("token");

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="search">
        <input type="text" placeholder="🔍   Recherche des articles" />
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
