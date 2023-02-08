// import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const Offer = () => {
  return (
    <div>
      <h1>Je suis sur la page Offre</h1>

      <Link to="/">retour vers la page Home</Link>
    </div>
  );
};

export default Offer;
