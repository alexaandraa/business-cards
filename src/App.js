import React from "react";
import "reset-css";
import Card from "./Card";

const savitri = {
  name: "Savitri Avtar",
  title: "Kundalini Yoga Teacher"
};

const alexandra = {
  name: "Alexandra Shikhverdieva",
  title: "Software Engineer"
};

const zarina = {
  name: "Alexandra Shikhverdieva",
  title: "Community Operations Manager"
};

const cards = [savitri, alexandra, zarina];

export const App = () => (
  <div
    style={{
      padding: "2rem",
      backgroundColor: "#319795",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}
  >
    {cards.map(card => (
      <Card name={card.name} title={card.title} />
    ))}
  </div>
);

export default App;
