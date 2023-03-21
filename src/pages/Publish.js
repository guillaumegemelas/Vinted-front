import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";

// import toast, { Toaster } from "react-hot-toast";

const Publish = ({
  token,
  // visible,
  // setVisible
}) => {
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState();
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  //useEffect pour se positionner en haut de la page en venant de charachter page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("picture", picture);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("price", price);

      const response = await axios.post(
        // "https://site--backend-vinted--zqfvjrr4byql.code.run/offer/publish",
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      // on inverse la valeur de visible à chaque submit------------------------------
      // setVisible(!visible);
      //--------------------------------------------------------------------------------------------
      alert("Votre annonce a été publiée");
      navigate("/");
    } catch (error) {
      console.log(error.message, "erreur 🖤 ");
    }
  };

  return token ? (
    <div className="container1">
      {/* <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div> */}
      <form onSubmit={handleSubmit}>
        <div className="title">
          <h1>Vends ton article</h1>
        </div>

        <div className="pictureAdd">
          <input
            type="file"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setPicture(event.target.files[0]);
            }}
          />
          {/* {picture && <img src={URL.createObjectURL(picture)} alt="picture" />} */}
        </div>

        <div className="secondBox">
          <div className="layout1">
            <div className="title1">
              <p>Titre</p>
            </div>

            <div className="formInput">
              <input
                value={title}
                type="text"
                placeholder="ex:  Jean délavé à la mode chez les jeun's"
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
          </div>

          <div className="layout2">
            <div className="title1">
              <p>Décris ton article</p>
            </div>

            <div className="formInput">
              {/* //àmettre en forme à la plce du input */}
              <textarea
                value={description}
                type="textarea"
                placeholder="ex:  c'est moche mais j'aime bien"
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="thirdBox">
          <div className="layout3">
            <div className="title1">
              <p>Marque</p>
            </div>

            <div className="formInput">
              <input
                value={brand}
                type="text"
                placeholder="ex:  Marc de café"
                onChange={(event) => setBrand(event.target.value)}
              />
            </div>
          </div>

          <div className="layout3">
            <div className="title1">
              <p>Taille</p>
            </div>

            <div className="formInput">
              <input
                value={size}
                type="text"
                placeholder="ex:  L / 42 /44"
                onChange={(event) => setSize(event.target.value)}
              />
            </div>
          </div>

          <div className="layout3">
            <div className="title1">
              <p>Couleur</p>
            </div>

            <div className="formInput">
              <input
                value={color}
                type="text"
                placeholder="ex:  pourpre, café au lait, bleu canard"
                onChange={(event) => setColor(event.target.value)}
              />
            </div>
          </div>

          <div className="layout3">
            <div className="title1">
              <p>Etat</p>
            </div>

            <div className="formInput">
              <input
                value={condition}
                type="text"
                placeholder="ex:  quelques trous pour l'aération"
                onChange={(event) => setCondition(event.target.value)}
              />
            </div>
          </div>

          <div className="layout3" style={{ borderBottom: "none" }}>
            <div className="title1">
              <p>Lieu</p>
            </div>

            <div className="formInput">
              <input
                value={city}
                type="text"
                placeholder="ex:  Lyon / Tygre"
                onChange={(event) => setCity(event.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="forthBox">
          <div className="layout3" style={{ borderBottom: "none" }}>
            <div className="title1">
              <p>Prix</p>
            </div>

            <div className="formInput">
              <input
                value={price}
                type="text"
                placeholder="0,00€"
                onChange={(event) => setPrice(event.target.value)}
              />
            </div>
          </div>

          <div className="layout3" style={{ borderBottom: "none" }}>
            <div className="title1"></div>

            <div className="formInput2">
              <input type="checkbox" />
              <span>Je suis interessé par les échanges</span>
            </div>
          </div>
        </div>

        <div className="addButton1Section">
          <div>
            <button className="addButton" type="submit">
              Ajouter
            </button>
          </div>
        </div>
      </form>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
