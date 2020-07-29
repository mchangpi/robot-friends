import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  if (0) {
    throw new Error("NOOOOOO!");
  }
  const cardList = robots.map((robot, idx) => {
    return <Card key={idx} robot={robot} />;
  });
  return <div>{cardList}</div>;
};

export default CardList;
