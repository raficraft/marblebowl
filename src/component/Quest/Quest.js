import React, { useEffect, useState } from "react";

export default function Quest({ quest }) {
  const startQuest = (quest) => {
    const nbAction = quest.action.length;
    const timer = setInterval(() => {
      for (let i = 1; i <= nbAction; i++) {
        console.log(i, nbAction);

        //read action

        console.log(quest.action[1]);

        if (i === nbAction) {
          clearInterval(timer);
          endQuest();
        }
      }
    }, 500);
  };

  const endQuest = () => {
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
