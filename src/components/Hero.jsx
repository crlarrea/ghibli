import React from "react";
import totoro from "../assets/img/totoro.svg";
export const Hero = ({
  props: {
    title,
    original_title,
    rt_score,
    running_time,
    description,
    release_date,
    movie_banner,
  },
}) => {
  return (
    <section className="hero">
      <div>
        <img src={totoro} />
        <h1>
          Ghibli<span>Films</span>
        </h1>
      </div>
      <article style={{ backgroundImage: `url(${movie_banner})` }}></article>
      <article>
        <h2>
          {title}
          <span>{original_title}</span>
        </h2>
        <p>{description}</p>
        <p>
          {release_date} {running_time} min
        </p>
        <p>Score: {rt_score}/100</p>
      </article>
    </section>
  );
};
