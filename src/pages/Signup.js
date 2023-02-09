import { useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

import axios from "axios";

const Signup = () => {
  //mes states dédiées au contenu de mes inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: name,
          password: password,
          newsletter: true,
        }
      );
      console.log(response.data);
      //   création du cookie qui stockera le token
      Cookies.set("tokenSign", response.data.token);
    } catch (error) {
      console.log(error.response, "erreur signup 🤕");
    }
  };

  return (
    <div className="globLogin">
      <div className="souLogin">
        <form
          className="form"
          onSubmit={(event) => {
            event.preventDefault();
            fetchData();
          }}
        >
          <h1>S'inscrire</h1>
          <input
            id="name"
            value={name}
            type="text"
            placeholder="Nom d'utilisateur"
            onChange={(event) => setName(event.target.value)}
          />
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
          <div className="checkbox">
            <div className="check1">
              <input type="checkbox" />
            </div>
            <div>
              <p>S'inscrire à notre Newsletter</p>
            </div>
          </div>
          <p className="policy">
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
          <button className="inscripButton" type="submit">
            S'inscrire
          </button>
          <Link to="/login">
            <p className="z">Tu as déjà un compte, connecte toi</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
