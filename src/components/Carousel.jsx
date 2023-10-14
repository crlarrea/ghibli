import React, { useState, useEffect } from "react";

export const Carousel = ({ props: { dispatch } }) => {
  const updateHero = (entry) => {
    dispatch({ type: "updateHero", payload: entry });
  };
  const [films, setFilms] = useState([]);
  const fetchData = async () => {
    try {
      const data = await fetch("https://ghibliapi.vercel.app/films");
      const payload = await data.json();
      setFilms(payload);
      updateHero(
        payload.find((el) => {
          return el.id === "58611129-2dbc-4a81-a72f-77ddfc1b1b49";
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="carousel">
      {films &&
        films.map((entry) => {
          return (
            <article
              key={entry.id}
              onClick={() => {
                updateHero(entry);
              }}
            >
              <img src={entry.image} />
            </article>
          );
        })}
    </section>
  );
};
