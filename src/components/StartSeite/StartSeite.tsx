import { useMemo, useState } from "react";
import cafesList from "../CafesList.json";
import {CafeCard, CafeCardLarge, CafeCardSmall} from "../CafeCard/CafeCard";

import './StartSeite.css'

type CafesData = {
  [key: string]: {
    id: string;
    name: string;
    adresse: string;
    stadtteil: string;
    foto: string;
    foto2: string;
    foto3: string;
    foto4: string;
    instagram: string;
    website: string;
    bewertung: number;
    bewertunganzahl: number;
    spruch: string;
  }[];
};

const cafesTyped = cafesList as CafesData;

const Startseite = () => {
    const [city, setCity] = useState(() => {
        return localStorage.getItem("city") ?? "Düsseldorf";
    });

    const [cityOption, setCityOption] = useState(false)

    const otherCity = city === "Düsseldorf" ? "Köln" : "Düsseldorf";

    function changeCity(newCity: string) {
        setCity(newCity);
        localStorage.setItem("city", newCity);

        setCityOption(false)
    }

    const cafes = cafesTyped[city];
    const cafesOtherCity = cafesTyped[otherCity];

    const randomCafes = useMemo(() => {
        return [...cafes]
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
    }, [city]);

    return (
        <div className="StartSeite">
            <img className="logo" src="/caflex/svg/logo.svg" alt="logo" />

            <div className={`city-container ${cityOption ? "cityOption" : ""}`}>
                <div className="cityname">
                    <p onClick={() => setCityOption(!cityOption)}>{cityOption? "Stadt auswählen" : city}</p>
                    <img src="/caflex/svg/arrow.svg" alt="icon pfeil" />
                </div>
                <button
                    onClick={() => changeCity("Düsseldorf")}
                    >Düsseldorf
                </button>
                <button
                    onClick={() => changeCity("Köln")}>Köln
                </button>
            </div>

            <section className="scroll CardLarge-container">
                {randomCafes.map((cafe) => (
                    <CafeCardLarge
                        key={cafe.id}
                        spruch={cafe.spruch}
                        id={cafe.id}
                        img={cafe.foto}
                        name={cafe.name}
                        stadtteil={cafe.stadtteil}
                    />
                ))}
            </section>

            <section>
                <h2 className="padding-left" >Entdeck {city}</h2>
                <div className="scroll CafesList">
                    {cafes.map((cafe) => (
                        <CafeCard
                            id={cafe.id}
                            img={cafe.foto}
                            name={cafe.name}
                            stadtteil={cafe.stadtteil}
                        />
                    ))}
                </div>
            </section>

            <section>
                <h2 className="padding-left">Little Tokyo</h2>
                <div className="scroll CafesList">
                    {cafes
                    .filter((cafe) => cafe.stadtteil === "Little Tokyo")
                    .map((cafe) => (
                        <CafeCard
                        key={cafe.id}
                        id={cafe.id}
                        img={cafe.foto}
                        name={cafe.name}
                        stadtteil={cafe.stadtteil}
                        />
                    ))}
                </div>
            </section>

            <section className="othercity-section">
                <div className="othercity-titel">
                    <h2 className="padding-left">Was es in anderer Stadt gibt</h2>
                    <p className="padding-left othercity-name">{otherCity}</p>
                </div>
                <div className="scroll OtherCity-container">
                    {cafesOtherCity
                    .map((cafe) => (
                        <CafeCardSmall
                        key={cafe.id}
                        id={cafe.id}
                        img={cafe.foto}
                        name={cafe.name}
                        stadtteil={cafe.stadtteil}
                        spruch={cafe.spruch}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Startseite;