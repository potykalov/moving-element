import Cell from "./components/Cell/Cell.mjs";
import Goblin from "./components/Goblin/Goblin.mjs";

class GameController {
  constructor(app) {
    this.app = app;
    this.randomId = null;
    this.imageEl = null;
    this.cell = new Cell();
    this.goblin = new Goblin();
    this.scores = 0;
    this.intervalId = null;
    this.missedAppearances = 0;
  }

  init() {
    this.app.innerHTML = "";

    this.randomId = Math.floor(Math.random() * 16);
    this.imageEl = this.goblin.createGoblin();

    for (let i = 0; i < 16; i++) {
      const cellEl = this.cell.createCell(i);

      this.app.append(cellEl);
    }

    this.app.addEventListener("click", this.onClick);

    this.app
      .querySelector(`.cell[data-id="${this.randomId}"]`)
      .append(this.imageEl);

    this.startInterval();
  }

  onClick = (e) => {
    const cellEl = e.target.closest(".cell");

    if (!cellEl) {
      return;
    }

    const goblinEl = cellEl.querySelector(".goblin");

    if (goblinEl) {
      this.scores += 1;
      clearInterval(this.intervalId);
      this.moveGoblin();
      this.startInterval();
    }
  };

  moveGoblin() {
    let randomId;

    do {
      randomId = Math.floor(Math.random() * 16);
    } while (randomId === this.randomId);

    this.randomId = randomId;
    this.app.querySelector(`.cell[data-id="${randomId}"]`).append(this.imageEl);
  }

  startInterval() {
    this.intervalId = setInterval(() => {
      this.missedAppearances += 1;

      if (this.missedAppearances >= 100) {
        clearInterval(this.intervalId);

        alert(`Вы проиграли! Ваш счет: ${(this.scores += 1)}`);

        this.missedAppearances = 0;
        this.scores = 0;

        this.init();

        return;
      }

      this.moveGoblin();
    }, 1000);
  }
}

export default GameController;
