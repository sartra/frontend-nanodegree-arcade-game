frontend-nanodegree-arcade-game
===============================

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).


===============================


#Description

In this project I was provided with visual assets and a game loop engine; using these tools I must add a number of entities to the game including the player characters and enemies to recreate _a version of_ the classic arcade game Frogger. The reason fo this project is to practice using Object Oriented JavaScript using classes capable of creating countless instances of similarly functioning objects.

## How to Play
  * Open index.html in your browser.
  * Use your arrow keys to move the player.
  * If you collide with an enemy bug, your player will reset to starting position.
  * If you reach the water without going out of bounds and not colliding with an enemy bug, you win!

### Objective
Help your player across the road avoiding the enemy bugs along the way. Reach the water without being touched to win!

##Documentation

  * this repository at: ....
  * Udacity JavaScript style guide (http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)
  * Udacity project detailed description (https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub)

##Goal of project

###Goal 1 - Completed 16/09/2016

  * Update the _app.js_ file to implement the _Player_ and _Enemy_ classes doing the following:
  * The Enemy function, which initiates the Enemy by: - Done
    * Loading the image by setting this.sprite to the appropriate image in the image folder (already provided) - Done
    * Setting the Enemy initial location (you need to implement) - Done
    * Setting the Enemy speed (you need to implement) - Done
    * The update method for the Enemy - Done
    * Updates the Enemy location (you need to implement) - Done
    * Handles collision with the Player (you need to implement) - Done
    * Add own Enemy methods as needed - Done (random speed on regeneration)

    * The player function _to elaborate with all other details from detailed description_(see goal2)

###Goal 2

  * implement the Player class, and you can use the Enemy class as an example on how to get started.
  * At minimum the following should be implemented:
  * The Player function, which initiates the Player by:
  * Loading the image by setting this.sprite to the appropriate image in the image folder (use the code from the Enemy function as an example on how to do that) - Done
  * Setting the Player initial location - Done
      * The update method for the Player (can be similar to the one for the Enemy)
      * The render method for the Player (use the code from the render method for the Enemy) - Done
      * The handleInput method, which should receive user input, allowedKeys (the key which was pressed) and move the player according to that input. In particular: - Done
        * Left key should move the player to the left, right key to the right, up should move the player up and down should move the player down. - Done
      * Recall that the player cannot move off screen (so you will need to check for that and handle appropriately). - Done
      * If the player reaches the water the game should be reset by moving the player back to the initial location (you can write a separate reset Player method to handle that). - Done
  *You can add your own Player methods as needed.

###known issues

####here is where we will add all known issues I have for this project.

  * leveling up
