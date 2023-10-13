import React, { useEffect, useState } from "react";
import totoro from "../assets/img/totoro.svg";
import { Film } from "../components/Film";
export const Home = () => {
  let [films, setFilms] = useState([]);
  const fetchData = async () => {
    try {
      const data = await fetch("https://ghibliapi.vercel.app/films");
      const payload = await data.json();
      setFilms(payload);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="home">
      {/* <h1>ghibli</h1> */}
      <img src={totoro} className="bkg-img"/>
      {films && (
        <div className='films-wrapper'>
          {films.map((entry) => {
            return <Film props={entry} key={entry.id} />;
          })}
        </div>
      )}
    </section>
  );
};
