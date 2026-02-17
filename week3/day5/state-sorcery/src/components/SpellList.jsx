import React, { useState } from "react";
import SpellCard from "./SpellCard";

export default function SpellList({ setLastAction, setSpellCount }) {
  const [spellList, setSpellList] = useState([]);
  const [spellInput, setSpellInput] = useState("");
  return (
    <div>
      <label htmlFor="newSpell">Add New Spell</label>
      <input
        type="text"
        name="newSpell"
        id="newSpell"
        value={spellInput}
        onChange={(e) => setSpellInput(e.target.value)}
      />
      <button
        onClick={() => {
          if (spellInput.trim() == "") {
            alert("New spell field cannot be empty");
          } else if (spellList.includes(spellInput.trim())) {
            alert("Spell already added");
          } else {
            setSpellList((prev) => [...prev, spellInput]);
            setLastAction(`Added "${spellInput}" spell`);
            setSpellInput("");
            setSpellCount((prev) => prev + 1);
          }
        }}
      >
        +
      </button>

      {spellList.map((curr, index) => (
        <SpellCard
          setLastAction={setLastAction}
          spell={curr}
          setSpellList={setSpellList}
          setSpellCount={setSpellCount}
          key={index}
        />
      ))}
    </div>
  );
}
