import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardList = robots.map((robot, idx) => {
    return <Card key={idx} robot={robot} />;
  });
  return <div>{cardList}</div>;
};

export default CardList;
