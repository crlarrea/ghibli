import React, { useState } from "react";

export const Film = ({
  props: {
    image,
    title,
    original_title,
    description,
    director,
    producer,
    release_date,
    running_time,
    rt_score,
  },
}) => {
  const showDescription = (
    title,
    original_title,
    description,
    director,
    producer,
    release_date,
    running_time,
    rt_score
  ) => {
    setCurrentFilm({
      title,
      original_title,
      description,
      director,
      producer,
      release_date,
      running_time,
      rt_score,
    });
  };

  const [currentFilm, setCurrentFilm] = useState({});

  return (
    <>
      <article
        className="film"
        onClick={() => {
          showDescription(
            title,
            original_title,
            description,
            director,
            producer,
            release_date,
            running_time,
            rt_score
          );
        }}
      >
        <img src={image} />
      </article>
      <article>
        <h2>{currentFilm.title}</h2>
      </article>
    </>
  );
};
