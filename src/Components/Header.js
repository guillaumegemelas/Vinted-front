import { useNavigate } from "react-router-dom";
import logo from "../img/logo.svg";
import Cookies from "js-cookie";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="buttons">
        {/* il faut que ce bouton soit visible que sur la page home */}

        <button
          className="but0"
          onClick={() => {
            Cookies.remove("tokenLog");
            navigate("/");
          }}
        >
          Se déconnecter
        </button>

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
    </header>
  );
};

export default Header;
