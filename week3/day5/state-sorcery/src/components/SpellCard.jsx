import React from "react";

export default function SpellCard({
  spell,
  setLastAction,
  setSpellList,
  setSpellCount,
}) {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <p style={{ margin: "0px" }}>{spell}</p>
      <button
        onClick={() => {
          setSpellList((prev) => [...prev].filter((val) => val !== spell));
          setLastAction(`Deleted "${spell}" spell`);
          setSpellCount((prev) => prev - 1);
        }}
      >
        -
      </button>
    </div>
  );
}
