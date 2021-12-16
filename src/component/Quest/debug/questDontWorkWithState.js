import React, { useEffect, useState } from "react";
import { character } from "./assets/character/character";

export default function Quest({ quest }) {
  const [player, setPlayer] = useState(character.player);
  const [monster, setMonster] = useState({});
  const [questTimer, setQuestTimer] = useState(null);

  const startQuest = (quest) => {
    const nbAction = quest.action.length;

    let i = 1;
    const timer = setInterval(() => {
      let action = quest.action[i];

      console.log("point de vie", player.life);

      if (player.life > 0) {
        if (i === nbAction) {
          clearInterval(timer);
          endQuest();
        } else {
          if (action === "move") {
            console.log("deplacement du joueur");
          } else {
            eventHandler(action);
          }
        }
      } else {
        console.log("GAME OVER");
        clearInterval(timer);
      }
      i++;
    }, 500);
  };

  const eventHandler = (action) => {
    console.log(`interaction avec l'element : ${action}`);

    const eventType = character[action].type;

    if (eventType === "statiqueMonster" || eventType === "monster") {
      const eventResolution = fightHandle(player, action);

      if (eventResolution === false) {
        console.log("GAME OVER");
      }
    }
  };

  const fightHandle = (player, action) => {
    setPlayer((s) => ({ ...s, life: 0 }));
    console.log("!!!!!!!---FIGHT---!!!!!!!");
  };

  const endQuest = () => {
    console.log(player);
    console.log("fin de la quête", quest.name);
  };

  useEffect(() => {
    startQuest(quest);
  }, []);

  return (
    <div>
      <h1>Quest</h1>
    </div>
  );
}
