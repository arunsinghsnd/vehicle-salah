import React from "react";
import Card from "./Card";
import "./styles.css";

const CardList = ({ vehicels, showMoreItem, onLoadMore }) => {
  console.log(vehicels);
  return (
    <>
      {vehicels.slice(0, showMoreItem).map((vehicle, i) => {
        return (
          <Card
            key={i}
            id={vehicels[i].id}
            brand={vehicels[i].brand}
            color={vehicels[i].vehicle.color}
            engine={vehicels[i].vehicle.engine}
            fuel_type={vehicels[i].vehicle.fuel_type}
            image={vehicels[i].vehicle.image}
            image1={vehicels[i].vehicle.image1}
            image2={vehicels[i].vehicle.image2}
            image3={vehicels[i].vehicle.image3}
            mileage={vehicels[i].vehicle.mileage}
            name={vehicels[i].vehicle.name}
            power={vehicels[i].vehicle.power}
            price={vehicels[i].vehicle.price}
            rating={vehicels[i].vehicle.rating}
            seating_capacity={vehicels[i].vehicle.seating_capacity}
            type={vehicels[i].vehicle.type}
            wheeler_type={vehicels[i].vehicle.wheeler_type}
          />
        );
      })}
      <button className="loadbutton" onClick={onLoadMore}>
        Load More
      </button>
    </>
  );
};

export default CardList;
