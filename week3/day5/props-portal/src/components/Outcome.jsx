import React, { useState } from "react";

export default function Outcome({ outcome, onClick }) {
  return (
    <div
      onClick={onClick}
      style={
        outcome.goodDay
          ? { backgroundColor: "green" }
          : { backgroundColor: "red" }
      }
    >
      <h3>{outcome.title}</h3>
      <p>{outcome.description}</p>
      {outcome.rating < 3 && <p>AWFUL DAY!</p>}
    </div>
  );
}
