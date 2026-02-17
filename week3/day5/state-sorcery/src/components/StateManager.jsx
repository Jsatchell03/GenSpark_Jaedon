import React, { useState } from "react";
import Counter from "./Counter";
import Toggle from "./Toggle";
import SpellList from "./SpellList";
import Summary from "./Summary";

export default function StateManager() {
  const [lastAction, setLastAction] = useState("No action taken");
  const [spellShield, setSpellShield] = useState(false);
  const [spellCount, setSpellCount] = useState(0);
  return (
    <div
      style={
        spellShield
          ? {
              borderStyle: "solid",
              borderWidth: "4px",
              borderColor: "black",
            }
          : {}
      }
    >
      <Counter setLastAction={setLastAction} />
      <Toggle
        setLastAction={setLastAction}
        setSpellShield={setSpellShield}
        spellShield={spellShield}
      />
      <SpellList setLastAction={setLastAction} setSpellCount={setSpellCount} />
      <Summary spellCount={spellCount} lastAction={lastAction} />
    </div>
  );
}
