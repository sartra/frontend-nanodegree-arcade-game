frontend-nanodegree-arcade-game
===============================

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).


===============================


# Description

In this game you have a Player and Enemies (Bugs). The goal of the player is to reach the water, without colliding into any one of the enemies. The player can move left, right, up and down. The enemies move in varying speeds on the paved block portion of the scene. Once a the player collides with an enemy, the game is reset and the player moves back to the start square. Once the player reaches the water the game is won.

## How to Run
  * go to this <a href="http://sartra-com.stackstaging.com/5.frontend-nanodegree-arcade-game/">link </a>and use arrow keys to move player

## How to Play
  * Use your arrow keys to move your player up/down/right/left.
  * If you collide with the enemy you return to starting position and lose one life out of 5 lives - when you lose all 5 lives game is over.
  * When you reach the water you score 200 points
  * When you collect gems you score 100 points



### Additional Functionality

In addition to the basic functionality, you can add more cool functionality to your game. For example, here are some additional features that you can add:

Player selection: allow the user to select the image for the player character before starting the game. You can use the different character images provided in the images folder (we’ll get to that below).
Score: you can implement a score for the game. For example, the score can increase each time the player reaches the water, and it can be reset to 0 when collision occurs (or it can be reduced).
Collectables: you can add gems to the game, allowing the player to collect them to make the game more interesting.
Anything else you like!

## Documentation

  * JavaScript style guide - http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html
  * <a href="https://docs.google.com/document d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub">Udacity project detailed description</a>

## Goal 1: Enemy Class

Inside the app.js file, you will need to implement the Player and the Enemy classes, using Object-Oriented JavaScript. Part of the code for the Enemy is provided to you, and you will need to complete the following:

* The Enemy function, which initiates the Enemy by:
* Loading the image by setting this.sprite to the appropriate image in the image folder (already provided)
* Setting the Enemy initial location (you need to implement)
* Setting the Enemy speed (you need to implement)
* The update method for the Enemy
* Updates the Enemy location (you need to implement)
* Handles collision with the Player (you need to implement)
* You can add your own Enemy methods as needed

### Goal 2: Player Class

You will also need to implement the Player class, and you can use the Enemy class as an example on how to get started. At minimum you should implement the following:

* The Player function, which initiates the Player by:
* Loading the image by setting this.sprite to the appropriate image in the image folder (use the code from the * Enemy function as an example on how to do that)
* Setting the Player initial location
* The update method for the Player (can be similar to the one for the Enemy)
* The render method for the Player (use the code from the render method for the Enemy)
* The handleInput method, which should receive user input, allowedKeys (the key which was pressed) and move the -player according to that input. In particular:
  - Left key should move the player to the left, right key to the right, up should move the player up and down   -should move the player down.
  - Recall that the player cannot move off screen (so you will need to check for that and handle appropriately).
  - If the player reaches the water the game should be reset by moving the player back to the initial location   (-you can write a separate reset Player method to handle that).
  - You can add your own Player methods as needed.
  - Once you have completed implementing the Player and Enemy, you should instantiate them by:

Creating a new Player object
Creating several new Enemies objects and placing them in an array called allEnemies
