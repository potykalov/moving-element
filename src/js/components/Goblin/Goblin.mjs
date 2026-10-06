import goblinImg from "../../../img/goblin.png";
import "./Goblin.css";

class Goblin {
  createGoblin() {
    const goblinEl = document.createElement("img");
    goblinEl.className = "goblin";
    goblinEl.src = goblinImg;
    goblinEl.alt = "Гоблин";

    return goblinEl;
  }
}

export default Goblin;
