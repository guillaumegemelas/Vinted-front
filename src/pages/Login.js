import { useState } from "react";
import axios from "axios";
// import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ handleToken }) => {
  //mes states dédiées au contenu de mes inputs

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
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
        navigate("/");
      }
      //   Cookies.set("tokenLog", response.data.account.username, { expires: 10 });
    } catch (error) {
      console.log(error.response.data, "erreur login 🤕");
    }
  };

  return (
    <div className="globLogin">
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
          <Link to="/signup">
            <p className="z">Pas encore de compte? inscris-toi</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
