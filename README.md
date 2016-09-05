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


      # Battleship!

Currently, a one-player game, testing your abilities to hunt and sink ships of various sizes before you run out of missles! Future updates will include a two-player mode, scoring, and more!

      ## Getting Started

      These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

      ### Prerequisities

      What things you need to install the software and how to install them

      ```
      Give examples
      ```

      ### Installing

      A step by step series of examples that tell you have to get a development env running

      Stay what the step will be

      ```
      Give the example
      ```

      And repeat

      ```
      until finished
      ```

      End with an example of getting some data out of the system or using it for a little demo

      ## Running the tests

      Explain how to run the automated tests for this system

      ### Break down into end to end tests

      Explain what these tests test and why

      ```
      Give an example
      ```

      ### And coding style tests

      Explain what these tests test and why

      ```
      Give an example
      ```

      ## Deployment

      Add additional notes about how to deploy this on a live system

      ## Built With

      * Atom

      ## Versioning

      We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

      ## Authors
        - Josh Whitney (github here)
