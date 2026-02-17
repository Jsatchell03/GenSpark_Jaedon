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

function printAllSpells(arr) {
  arr.forEach((spell) => {
    console.log(
      `Name: ${spell.name}\nElement: ${spell.element}\nPower: ${spell.power}\nMana Cost: ${spell.manaCost}`,
    );
  });
}

const powerfulSpells = spellbook.filter((spell) => spell.power >= 20);
const fireSpells = spellbook.filter((spell) => spell.element == "fire");

const spellNames = spellbook.map((spell) => spell.name);
const manaEfficiency = spellbook.map((spell) => spell.power / spell.manaCost);

const report = {
  count: spellbook.length,
  fireSpellCount: fireSpells.length,
  powerfulSpellCount: powerfulSpells.length,
  averagePower:
    spellbook.reduce((acc, curr) => (acc += curr.power), 0) / spellbook.length,
  mostPowerfullSpell: spellbook.reduce((max, curr) => {
    if (curr.power > max.power) {
      max = curr;
    }
    return max;
  }, spellbook[0]).name,
};
console.log(report);
