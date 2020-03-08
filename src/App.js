import React from "react";
import "reset-css";
import Card from "./Card";
import "./App.css";

const savitri = {
  name: "Savitri Avtar",
  title: "Kundalini Yoga Teacher",
  website: "savitriavtar.com"
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
  <div className="app">
    {cards.map(card => (
      <Card name={card.name} title={card.title} website={card.website} />
    ))}
  </div>
);

export default App;
