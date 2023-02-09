import { Link } from "react-router-dom";
import logo from "../img/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="buttons">
        <Link to="/signup">
          <button className="but1">S'inscrire</button>
        </Link>
        <Link to="/login">
          <button className="but2">Se connecter</button>
        </Link>
        <Link to="/">
          <button className="but3">Vends tes articles</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
