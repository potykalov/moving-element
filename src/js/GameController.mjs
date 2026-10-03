import goblinImg from "../img/goblin.png";

class GameController {
  constructor(app) {
    this.app = app;
    this.randomId = null;
  }

  init() {
    for (let i = 0; i < 16; i++) {
      const cellEl = document.createElement("div");

      cellEl.className = "cell";
      cellEl.dataset.id = i;

      this.app.append(cellEl);
    }

    this.randomId = Math.floor(Math.random() * 16);
    this.imageEl = document.createElement("img");

    this.imageEl.className = "cell_img";
    this.imageEl.src = goblinImg;
    this.imageEl.alt = "Гоблин";

    this.app
      .querySelector(`.cell[data-id="${this.randomId}"]`)
      .append(this.imageEl);

    this.setRandomPosition();
  }

  setRandomPosition() {
    setInterval(() => {
      let randomId;

      do {
        randomId = Math.floor(Math.random() * 16);
      } while (randomId === this.randomId);

      this.randomId = randomId;

      this.app
        .querySelector(`.cell[data-id="${randomId}"]`)
        .append(this.imageEl);
    }, 1500);
  }
}

export default GameController;
