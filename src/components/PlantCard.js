import React from "react";

function PlantCard({plants}) {
  return (
    <li className="card">
      <img src={plants.image} alt={"plant name"} />
      <h4>{plants.name}</h4>
      <p>Price: {plants.price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
