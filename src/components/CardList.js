import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  if (true) {
    throw new Error("NOOOOOO!");
  }
  const cardList = robots.map((robot, idx) => {
    return <Card key={idx} robot={robot} />;
  });
  return <div>{cardList}</div>;
};

export default CardList;
