// Cell
  // Params:
    // boatOrNot -> true or false
  // Interfaces:
    // play() -> marks cell as played
    // isExplosion() -> return true or false... based on IF the cell has an explosion
    // isSplash() -> return ture or false... based on IF the cell has splashed

class Cell {
  constructor(boatOrNot) {
    this.hasBoat = boatOrNot;  // is that spot a boat
    this.beenPlayed = false;  // has a player tried that spot yet
  }
  play() {
    this.beenPlayed = true;
  }
  isExplosion() {
    return this.beenPlayed && this.hasBoat;
  }
  isSplash() {
    return this.beenPlayed && !this.hasBoat;
  }
}


















//
//
//
//
//
//
//
//
//
//
//
//
// class Cell {
//   constructor(shipOrNot) {
//     this.shipOrNot = shipOrNot;  // 0 if no or 1 if so
//     this.hidden = true; // all are hidden in the start of the game
//     this.isHit = null; // a cell has to be 1 and true to show an explosion. 0 and true shows a splash
//   }
//
//   hit() {
//     this.hidden = false;
//     this.isShip = true;
//   }
// }
//
//
// /*
//
// I need to add three states to the cells in the game:
//
// hidden
// miss
// hit
//
// all cells will start off hidden.
// once the user clicks a cell, it will change depending on its class name
//   class of hit will display an explosion
//   class of miss will display a splash
//
// */
