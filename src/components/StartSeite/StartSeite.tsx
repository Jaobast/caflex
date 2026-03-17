import { useMemo } from "react";
import cafesData from "../CafeDB.json";
import {CafeCard, CafeCardLarge} from "../CafeCard/CafeCard";

import './StartSeite.css'

const Startseite = () => {
    const cafes = cafesData.cafes;

    const randomCafes = useMemo(() => {
        return [...cafes]
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
    }, []);

    return (
        <div className="StartSeite">
            <img className="logo" src="/caflex/svg/logo.svg" alt="logo" />
            <section className="OneCard-container">
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
                <h2 className="padding-left" >Neu in Düsseldorf</h2>
                <div className="AllCafes">
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
                <h2 className="padding-left">Stadtmitte</h2>
                <div className="AllCafes">
                    {cafes
                    .filter((cafe) => cafe.stadtteil === "Stadtmitte")
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

            <section>
                <h2 className="padding-left">Little Tokyo</h2>
                <div className="AllCafes">
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
        </div>
    );
};

export default Startseite;