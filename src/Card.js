import React from "react";

export const Card = ({ name, title }) => (
  <div
    style={{
      marginBottom: "1rem",
      padding: "3rem 4rem",
      boxShadow:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      backgroundColor: "#FFFFFF",
      borderRadius: "4px",
      fontFamily: "Playfair Display",
      display: "flex",
      flexDirection: "column",
      color: "#BEA67D",
      maxWidth: "15rem"
    }}
  >
    <div
      style={{
        textTransform: "uppercase",
        marginBottom: "1rem",
        fontSize: "1.5rem",
        letterSpacing: "0.25rem"
      }}
    >
      {name}
    </div>
    <div
      style={{
        marginBottom: "0.5rem",
        fontFamily: "Open Sans",
        letterSpacing: "3px",
        textTransform: "uppercase",
        fontSize: "13px"
      }}
    >
      {title}
    </div>
    <a
      href="https://savitri-avtar.jmagrippis.now.sh/"
      style={{
        marginBottom: "0.25rem",
        color: "#234E52",
        textDecoration: "none"
      }}
    >
      savitriavtar.com
    </a>
    <a
      href="https://www.instagram.com/savitriavtar/"
      style={{ color: "#234E52", textDecoration: "none" }}
    >
      @savitriavtar
    </a>
  </div>
);

export default Card;
