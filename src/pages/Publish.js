import { useState } from "react";
import axios from "axios";

const Publish = ({ token }) => {
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState();
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div className="container1">
      <form
        onSubmit={async (event) => {
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
          } catch (error) {
            console.log(error.message, "erreur 🖤 ");
          }
        }}
      >
        <div className="title" style={{ fontSize: "23px" }}>
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
              <input
                value={description}
                type="text"
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
                placeholder="ex:  Adidas"
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
                placeholder="ex:  Lyon"
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
  );
};

export default Publish;
