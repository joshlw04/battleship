User story:
  "I want to pass the time playing a fun game online, Battleship. I will have a gameboard provided for me, in which 4 ships are hidden.

  My task will be to, using a specific amount of torpedos, find and sink all of the battleships.

  I will be able to see a countdown of my available torpedos, as well as a visual representation of where my torpedos have landed, and if those torpedos have hit a ship or missed it."

Initial Thoughts:
  Three class constructors:

    Cell
      three states: empty, hit, and missed
      each cell state will have its own icon (empty = ocean, hit = red explosion, missed = splash)

    Board
      needs to know where the cells with the three states are located

    GameBoard
      needs to know how to render the game during each step


  Challenges:
      -Randomizing the board/ships.
