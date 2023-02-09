import { useEffect, useState } from "react";

import axios from "axios";

const Signup = () => {
  //mes states dédiées au contenu de mes inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submit, setSubmit] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          name: name,
          email: email,
          password: password,
        }
      );
      setSubmit(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.message, "erreur 🤕");
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
        </form>
      </div>
    </div>
  );
};

export default Signup;
