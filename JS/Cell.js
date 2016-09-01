class Cell {
  constructor() {
    // this.cellState = cellState;  // 0 or 1 - idk what this is...
    this.hidden = true;
    this.isShip = null;
  }

  hit() {
    this.hidden = false;
    this.isShip = true;
  }
}


/*

I need to add three states to the cells in the game:

hidden
miss
hit

all cells will start off hidden.
once the user clicks a cell, it will change depending on its class name
  class of hit will display an explosion
  class of miss will display a splash

*/
