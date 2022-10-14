import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  const displayCards = plants.map((item)=>(
    <PlantCard plants={item} key={item.id} />
  ))
  return (
    <ul className="cards">{/* render PlantCards components in here */}{displayCards}</ul>
  );
}

export default PlantList;
