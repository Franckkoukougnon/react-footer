import React from "react";

const plantList = [
  "monstera",
  "ficus lyrata",
  "pothos argenté",
  "yucca",
  "palmier",
  "hysope",
  "hibiscus",
];

const ShoppingList = () => {
  return (
    <ul>
      {plantList.map((plant, index) => (
        <li key={`${plant}-${index}`}>{plant}</li>
      ))}
    </ul>
  );
};

export default ShoppingList;
