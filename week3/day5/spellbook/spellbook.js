let spellbook = [
  { name: "fireball", element: "fire", power: 15, manaCost: 5 },
  { name: "iceShard", element: "ice", power: 12, manaCost: 4 },
  { name: "thunderStrike", element: "lightning", power: 18, manaCost: 6 },
  { name: "stoneFist", element: "earth", power: 14, manaCost: 5 },
  { name: "windSlash", element: "air", power: 10, manaCost: 3 },
  { name: "shadowBolt", element: "dark", power: 16, manaCost: 6 },
  { name: "holyLight", element: "light", power: 13, manaCost: 4 },
  { name: "poisonMist", element: "poison", power: 11, manaCost: 4 },
  { name: "arcaneBlast", element: "arcane", power: 20, manaCost: 8 },
  { name: "waterWhip", element: "water", power: 12, manaCost: 4 },
  { name: "lavaBurst", element: "fire", power: 22, manaCost: 9 },
  { name: "frostNova", element: "ice", power: 17, manaCost: 6 },
  { name: "chainLightning", element: "lightning", power: 21, manaCost: 7 },
  { name: "quakeStrike", element: "earth", power: 19, manaCost: 7 },
  { name: "galeForce", element: "air", power: 14, manaCost: 5 },
  { name: "voidRift", element: "dark", power: 24, manaCost: 10 },
  { name: "radiantBeam", element: "light", power: 18, manaCost: 6 },
  { name: "toxicSpikes", element: "poison", power: 15, manaCost: 5 },
  { name: "mysticPulse", element: "arcane", power: 23, manaCost: 9 },
  { name: "tidalCrash", element: "water", power: 20, manaCost: 7 },
];

const addSpell = (name, element, power, manaCost) => {
  const newSpell = {
    name: name,
    element: element,
    power: power,
    manaCost: manaCost,
  };
  spellbook.push(newSpell);
};

const printSpell = ({ name, element, power, manaCost }) => {
  console.log(
    `${name}\nElement: ${element}\nPower: ${power}\nMana Cost: ${manaCost}`,
  );
};

const spellSummary = () => {
  const totalSpells = spellbook.length;
  const highestPowerSpell = spellbook.reduce((spell, currSpell) => {
    if (currSpell.power > spell.power) {
      spell = currSpell;
    }
    return spell;
  }, spellbook[0]).name;
  const averagePower =
    spellbook.reduce((acc, curr) => (acc += curr.power), 0) / totalSpells;
  return `Total Spells: ${totalSpells}\nAverage Power: ${averagePower}\nHighest power spell name: ${highestPowerSpell}`;
};

const compareSpells = (spellA, spellB) => {
  const { name: nameA, power: powerA, manaCost: manaA } = spellA;
  const { name: nameB, power: powerB, manaCost: manaB } = spellB;

  const strongerSpell = powerA > powerB ? nameA : nameB;
  const moreEfficientSpell = powerA / manaA > powerB / manaB ? nameA : nameB;

  console.log(`Stronger Spell: ${strongerSpell}`);
  console.log(`More Mana Efficient: ${moreEfficientSpell}`);
};
