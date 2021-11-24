import React, { useEffect } from "react";

export default function Player() {
  const initPlayer = () => {
    return {
      life: 10,
      speed: 1,
      attack: 1,
      defense: 0,
      spell: null,
    };
  };

  useEffect(() => {
    initPlayer();
  }, []);
}
