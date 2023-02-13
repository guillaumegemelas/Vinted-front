import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

//import des pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";

//import des composants
import Header from "./Components/Header";
//import du component Modal-----------------------------
// import Modal from "./Components/Modal";
//--------------------------------------------------------

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [search, setSearch] = useState("");
  const [searchMin, setSearchMin] = useState(0);
  const [searchMax, setSearchMax] = useState(1000);
  const [price, setPrice] = useState("");

  //--------------------------------------------------------
  // const [visible, setVisible] = useState(false);
  //------------------------------------------------------------------------------------
  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token, { expires: 10 });
    } else {
      setToken(null);
      Cookies.remove("token");
    }
  };

  return (
    <div className="App">
      <Router>
        <Header
          handleToken={handleToken}
          token={token}
          search={search}
          setSearch={setSearch}
          searchMin={searchMin}
          setSearchMin={setSearchMin}
          searchMax={searchMax}
          setSearchMax={setSearchMax}
          setPrice={setPrice}
          price={price}
        />
        <Routes>
          <Route
            path="/signup"
            element={<Signup handleToken={handleToken} />}
          />
          <Route path="/login" element={<Login handleToken={handleToken} />} />
          <Route
            path="/publish"
            element={
              <Publish
                token={token}
                // ajout des props pour la Modal------------------------------------
                // visible={visible}
                // setVisible={setVisible}
                //---------------------------------------------------------------------
              />
            }
          />
          <Route
            path="/"
            element={
              <Home
                search={search}
                searchMin={searchMin}
                searchMax={searchMax}
                price={price}
                token={token}
              />
            }
          />
          <Route path="/offer/:id" element={<Offer />} />
        </Routes>
        {/* ajout du composant Modal -------------------------------------*/}
        {/* {visible && <Modal setVisible={setVisible} />} */}
        {/* --------------------------------------------------------------- */}
      </Router>
    </div>
  );
}

export default App;
