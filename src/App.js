import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import des pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";

//import des composants
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/offer" element={<Offer />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
