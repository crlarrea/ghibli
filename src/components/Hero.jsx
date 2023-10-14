import React from "react";

export const Hero = ({ props: { title, description, movie_banner } }) => {
    
  return (
    <section className="hero" style={{ backgroundImage: `url(${movie_banner})` }}>
      <article >
        <h2>{title}</h2>
        <p>{description}</p>
      </article>
    </section>
  );
};
