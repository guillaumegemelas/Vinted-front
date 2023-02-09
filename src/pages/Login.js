import { useState } from "react";

const Login = () => {
  //mes states dédiées au contenu de mes inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="p">
      {/* <div className="souLogin">
        <h1>S'inscrire</h1>
        <form action="">
          <input type="text" />
          <input type="text" />
        </form>
      </div> */}
    </div>
  );
};

export default Login;
