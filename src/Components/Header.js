import { useNavigate } from "react-router-dom";
import logo from "../img/logo.svg";
import { useState, useEffect } from "react";
import axios from "axios";

const Header = ({ handleToken, token }) => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );

        // setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  });

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="search">
        <input
          type="text"
          value={search}
          placeholder="🔍   Recherche des articles"
          onChange={(event) => setSearch(event.target.value)}
        />
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
