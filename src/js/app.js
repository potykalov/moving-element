import GameController from "./GameController.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const gameController = new GameController(document.querySelector(".app"));

  gameController.init();
});
