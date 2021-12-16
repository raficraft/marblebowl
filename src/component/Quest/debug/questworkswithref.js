import React, { useEffect, useState, useRef } from "react";
import { character } from "./assets/character/character";

export default function Quest({ quest }) {
  //const [player, setPlayer] = useState(character.player);

  const playerRef = useRef(character.player);

  const startQuest = (quest) => {
    const nbAction = quest.action.length;

    let i = 1;
    const timer = setInterval(() => {
      let action = quest.action[i];

      console.log("Life point", playerRef.current.life);

      if (playerRef.current.life > 0) {
        if (i === nbAction) {
          clearInterval(timer);
          endQuest();
        } else {
          if (action === "move") {
            console.log("player movement");
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
    console.log(`Interaction with the element: ${action}`);

    const eventType = character[action].type;

    if (eventType === "statiqueMonster" || eventType === "monster") {
      const eventResolution = fightHandle(playerRef, action);

      if (eventResolution === false) {
        console.log("GAME OVER");
      }
    }
  };

  const fightHandle = (player, action) => {
    console.log("!!!!!!!---FIGHT---!!!!!!!");
    //setPlayer((s) => ({ ...s, life: 0 }));
    playerRef.current = { ...playerRef.current, life: 0 };
    if (player.life === 0) {
      return false;
    }
  };

  const endQuest = () => {
    console.log(playerRef);
    console.log("fin de la quête", quest.name);
  };

  useEffect(() => {
    startQuest(quest);
  }, []);

  useEffect(() => {
    console.log(playerRef);
  });

  return (
    <div>
      <h1>Quest</h1>
    </div>
  );
}
