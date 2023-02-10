import { useState } from "react";
// import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const Signup = ({ handleToken }) => {
  //mes states dédiées au contenu de mes inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    setErrorMessage("");
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: name,
          password: password,
          newsletter: newsletter,
        }
      );
      console.log(response.data);
      //   création du cookie qui stockera le token
      if (response.data.token) {
        handleToken(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error.response.data, "erreur signup 🤕");
      if (error.response.data.message === "This email already has an account") {
        setErrorMessage(
          "Cet email est déjà utilisé, veuillez créer un compte avec un email valide"
        );
      }
      if (error.response.data.message === "Missing parameters") {
        setErrorMessage("Veuillez remplir tous les champs s'il vous plaît");
      }
    }
  };

  return (
    <div className="globLogin">
      <div className="souLogin">
        <form
          className="form"
          onSubmit={(event) => {
            event.preventDefault();
            handleSignup();
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
              <input
                checked={newsletter}
                type="checkbox"
                onChange={() => {
                  setNewsletter(!newsletter);
                }}
              />
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

          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

          <Link to="/login">
            <p className="z">Tu as déjà un compte, connecte toi</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
