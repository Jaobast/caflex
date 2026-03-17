import { useParams } from "react-router-dom";
import { useBodyClass } from "../../hooks/useBodyClass";
import cafesData from "../CafeDB.json";
import './CafePage.css'

function CafePage() {
  const { id } = useParams();

  const cafe = cafesData.cafes.find(object => object.id === id);

  useBodyClass("no-scroll");

  const mapaImagens: Record<string, string> = {
  "Stadtmitte": "/img/map/Stadtmitte.jpg",
  "Little Tokyo": "/img/map/LittleTokyo.jpg",
  "Altstadt": "/img/map/Altstadt.jpg",
  "Bilk": "/img/map/Bilk.jpg",
  "Oberbilk": "/img/map/Oberbilk.jpg",
  "Unterbilk": "/img/map/Unterbilk.jpg",
  "Friedrichstadt": "/img/map/Friedrichstadt.jpg",
  "Pempelfort": "/img/map/Pempelfort.jpg",
  "Derendorf": "/img/map/Derendorf.jpg",
  "Golzheim": "/img/map/Golzheim.jpg",
  "Oberkassel": "/img/map/Oberkassel.jpg",
  "Medienhafen": "/img/map/Medienhafen.jpg",
  "Flingern": "/img/map/Flingern.jpg",
  "Carlstadt": "/img/map/Carlstadt.jpg"
  };

  return (
    <div className="CafePage">
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
                  <img src="/svg/star.svg" alt="star icon" />
                  <p>{cafe?.bewertung}</p>
                  <p className="opacity">{"(" + cafe?.bewertunganzahl + ")"}</p>
                </div>
                <p>Düsseldorf</p>
                <p className="opacity">{cafe?.stadtteil}</p>
              </div>
              <div className="left">
                {cafe?.instagram ? (
                  <a href={cafe.instagram} target="_blank">
                    <img src="/svg/instagram.svg" alt="instagram icon" />
                  </a> ) : ( <img className="null" src="/svg/instagram.svg" alt="instagram icon" />)
                }

                {cafe?.website ? (
                  <a href={cafe.website} target="_blank">
                    <img src="/svg/internet.svg" alt="internet icon" />
                  </a>) : ( <img className="null" src="/svg/internet.svg" alt="internet icon" />)
                }
              </div>
            </div>
          </div>

          <div className="map">
            <button className="bttn">
              <a href={`https://maps.apple.com/?q=${encodeURIComponent(cafe?.adresse ?? "")}`}>
                Karte schauen
              </a>
            </button>
            <img src={mapaImagens[cafe?.stadtteil ?? ""]} alt="" />
          </div>

          <div className="gallery">
            <img src={cafe?.foto2} alt={"pic of " + cafe?.name} />
            <img src={cafe?.foto3} alt={"pic of " + cafe?.name} />
            <img src={cafe?.foto4} alt={"pic of " + cafe?.name} />
          </div>
        </div>
    </div>
  );
}

export default CafePage;