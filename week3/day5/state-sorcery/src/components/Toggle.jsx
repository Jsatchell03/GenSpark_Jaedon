import React from "react";

export default function Toggle({ setSpellShield, setLastAction, spellShield }) {
  return (
    <div>
      <button
        onClick={() => {
          setLastAction("Toggle spell shield");
          setSpellShield((prev) => !prev);
        }}
      >
        {spellShield ? "Spell Shield: OFF" : "Spell Sheild: ON"}
      </button>
    </div>
  );
}
