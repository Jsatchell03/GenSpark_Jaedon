import React from "react";
import Card from "./Card";
export default function MainContent() {
  const cards = [
    {
      title: "The Best Component",
      content: "Im the best component because I said so.",
    },
    {
      title: "The Most Reliable Component",
      content: "I always render on time and never break under pressure.",
    },
    {
      title: "The Reusable Component",
      content: "Drop me anywhere in your app and I just work.",
    },
    {
      title: "The Clean Code Component",
      content:
        "Readable, maintainable, and simple — just how components should be.",
    },
  ];
  return (
    <>
      {cards.map((card, index) => {
        return (
          <Card
            title={card.title}
            content={card.content}
            number={index + 1}
            key={index}
          />
        );
      })}
    </>
  );
}
