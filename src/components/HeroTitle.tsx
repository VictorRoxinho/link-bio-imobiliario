import React from "react";

const HeroTitle: React.FC = () => (
  <div className="hero-title">
    <h1
      style={{
        fontSize: "2rem",
        fontFamily: "Belleza, serif",
        fontWeight: 100,
      }}
    >
      ANE FRANÇA
    </h1>
    <div className="title-divider"></div>
    <p
      style={{
        fontFamily: "Poppins, sans-serif",
        fontWeight: 400,
        letterSpacing: "0.2em",
        fontSize: "0.9rem",
      }}
    >
      CORRETORA DE IMÓVEIS
    </p>
  </div>
);

export default HeroTitle;
