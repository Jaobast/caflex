import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBodyClass } from "../../hooks/useBodyClass";
import cafesList from "../CafesList.json";
import './CafePage.css'

function CafePage() {
  const { id } = useParams();


  const cityEntry = Object.entries(cafesList).find(([, cafes]) =>
    cafes.some(object => object.id === id)
  );

  const city = cityEntry?.[0];
  const cafe = cityEntry?.[1].find(object => object.id === id);

  const [gallery, setGallery] = useState(false);

  useBodyClass("no-scroll");

  const navigate = useNavigate();

  function back() {
    setTimeout(() => {
      navigate(`/`);
    }, 500);
  }

  const mapaImagens: Record<string, string> = {
  "Stadtmitte": "/caflex/img/map/ddorf/Stadtmitte.jpg",
  "Little Tokyo": "/caflex/img/map/ddorf/LittleTokyo.jpg",
  "Altstadt": "/caflex/img/map/ddorf/Altstadt.jpg",
  "Bilk": "/caflex/img/map/ddorf/Bilk.jpg",
  "Oberbilk": "/caflex/img/map/ddorf/Oberbilk.jpg",
  "Unterbilk": "/caflex/img/map/ddorf/Unterbilk.jpg",
  "Friedrichstadt": "/caflex/img/map/ddorf/Friedrichstadt.jpg",
  "Pempelfort": "/caflex/img/map/ddorf/Pempelfort.jpg",
  "Derendorf": "/caflex/img/map/ddorf/Derendorf.jpg",
  "Golzheim": "/caflex/img/map/ddorf/Golzheim.jpg",
  "Oberkassel": "/caflex/img/map/ddorf/Oberkassel.jpg",
  "Medienhafen": "/caflex/img/map/ddorf/Medienhafen.jpg",
  "Flingern": "/caflex/img/map/ddorf/Flingern.jpg",
  "Carlstadt": "/caflex/img/map/ddorf/Carlstadt.jpg",

  "Deutz": "/caflex/img/map/koln/Deutz.jpg",
  "Neustadt Süd": "/caflex/img/map/koln/NeustadtSüd.jpg",
  "Nippes": "/caflex/img/map/koln/Nippes.jpg",
  "Ehrenfeld": "/caflex/img/map/koln/Ehrenfeld.jpg",
  "Ringe": "/caflex/img/map/koln/Ringe.jpg",
  };

  return (
    <div className="CafePage">
        <button className="back" onClick={back}>
          <img src="/caflex/svg/back.svg" alt="icon back" />
        </button>
        <img className="cafepic" src={cafe?.foto} alt={"pic of " + cafe?.name}/>
        <div className="container">
          <div className="cafeinfo">
            <div className="name">
              <h1>{cafe?.name}</h1>
              <p>{cafe?.spruch}</p>
            </div>
            <div className="horizontal">
              <div className="right">
                <div className="star-container">
                  <img src="/caflex/svg/star.svg" alt="star icon" />
                  <p>{cafe?.bewertung}</p>
                  <p className="opacity">{"(" + cafe?.bewertunganzahl + ")"}</p>
                </div>
                <p>{city}</p>
                <p className="opacity">{cafe?.stadtteil}</p>
              </div>
              <div className="left">
                {cafe?.instagram ? (
                  <a href={cafe.instagram} target="_blank">
                    <img src="/caflex/svg/instagram.svg" alt="instagram icon" />
                  </a> ) : ( <img className="null" src="/caflex/svg/instagram.svg" alt="instagram icon" />)
                }

                {cafe?.website ? (
                  <a href={cafe.website} target="_blank">
                    <img src="/caflex/svg/internet.svg" alt="internet icon" />
                  </a>) : ( <img className="null" src="/caflex/svg/internet.svg" alt="internet icon" />)
                }
              </div>
            </div>
          </div>

          <div className={`map ${gallery ? "gallery-open" : ""}`}>
            <button className="bttn">
              <a href={`https://maps.apple.com/?q=${encodeURIComponent(cafe?.adresse ?? "")}`}>
                Karte schauen
              </a>
            </button>
            <img src={mapaImagens[cafe?.stadtteil ?? ""]} alt=""/>
          </div>

          <div className={`gallery ${gallery ? "gallery-open" : ""}`}>
            <button onClick={() => setGallery(!gallery)}>
              <img src={cafe?.foto2} alt={"pic of " + cafe?.name} />
            </button>
            <button onClick={() => setGallery(!gallery)}>
              <img src={cafe?.foto3} alt={"pic of " + cafe?.name} />
            </button>
            <button onClick={() => setGallery(!gallery)}>
              <img src={cafe?.foto4} alt={"pic of " + cafe?.name} />
            </button>
          </div>
        </div>
    </div>
  );
}

export default CafePage;