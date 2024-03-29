import { useState, useEffect } from "react";
import axios from "axios";
// import Cookies from "js-cookie";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = ({ handleToken }) => {
  //mes states dédiées au contenu de mes inputs

  //tests de redirection vers page publish après connection au lieu de la page home
  const { state } = useLocation();

  let logged;
  if (state) {
    logged = state.logged;
  }

  //----------------------------------------

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  //useEffect pour se positionner en haut de la page en venant de charachter page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        // "https://site--backend-vinted--zqfvjrr4byql.code.run/user/login",
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );

      console.log(response.data);
      //   création du cookie qui stockera le token
      if (response.data.token) {
        handleToken(response.data.token);

        //tests nouvelle nav suite login venant de publish----------------------

        logged ? navigate("/publish") : navigate("/");
      }
      //   Cookies.set("tokenLog", response.data.account.username, { expires: 10 });
    } catch (error) {
      console.log(error.response.data, "erreur login 🤕");
      if (error.response.data.message === "User not found") {
        setErrorMessage("Aucun email ne correspond à un compte valide");
      }
      if (error.response.data.error === "Unauthorized") {
        setErrorMessage("Mot de passe incorrect");
      }
    }
  };

  return (
    <div className="globLogin1">
      <div className="souLogin1">
        <form
          className="form"
          onSubmit={(event) => {
            event.preventDefault();
            handleLogin();
          }}
        >
          <h1>Se connecter</h1>

          <input
            id="email"
            value={email}
            type="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            id="password"
            value={password}
            type="password"
            placeholder="Mot de passe"
            onChange={(event) => setPassword(event.target.value)}
          />

          <button className="inscripButton" type="submit">
            Se connecter
          </button>

          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <Link to="/signup">
            <p className="z">Pas encore de compte? inscris-toi</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
