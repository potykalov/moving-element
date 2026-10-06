import "./Cell.css";

class Cell {
  createCell(id) {
    const cellEl = document.createElement("div");

    cellEl.className = "cell";
    cellEl.dataset.id = id;

    return cellEl;
  }
}

export default Cell;
