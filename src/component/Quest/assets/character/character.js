export const character = {
  player: {
    type: "human",
    life: 10,
    speed: 1,
    attack: 1,
    defense: 0,
    inventory: null,
    spell: null,
  },

  tree: {
    type: "statiqueMonster",
    life: 10,
    speed: 0,
    attack: 0,
    defense: 0,
    spell: null,
    event: "fight",
  },

  demonicTree: {
    type: "monster",
    life: 10,
    speed: 0,
    attack: 1,
    defense: 0,
    spell: null,
    event: "fight",
  },
};
