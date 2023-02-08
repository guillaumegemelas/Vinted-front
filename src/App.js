import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";

//import des pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";

//import des composants
import Header from "./Components/Header";

function App() {
  const [offer, setOffer] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // const handleSubmit =

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setOffer(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home offer={offer} isLoading={isLoading} />}
          ></Route>
          <Route path="/offer/:id" element={<Offer />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
