import logo from "../img/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="buttons">
        <button className="but1">S'inscrire</button>
        <button className="but2">Se connecter</button>
        <button className="but3">Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
