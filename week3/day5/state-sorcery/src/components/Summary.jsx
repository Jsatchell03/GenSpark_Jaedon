import React from "react";

export default function Summary({ spellCount, lastAction }) {
  return (
    <div>
      <p>{`Total Items: ${spellCount}`}</p>
      <p>{`Last Action: ${lastAction}`}</p>
    </div>
  );
}
