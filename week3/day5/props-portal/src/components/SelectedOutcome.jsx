import React from "react";

export default function SelectedOutcome({ outcome }) {
  return (
    <div>
      <h1>Selected Item</h1>
      <h3>{outcome.title}</h3>
      <p>{outcome.description}</p>
      <p>{outcome.rating}</p>
    </div>
  );
}
