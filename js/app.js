// "use strict";
// variable creation
var lives = 5;
var score = 0;
//sounds withcreatejs sound API
// http://createjs.com/getting-started/soundjs
var CAUGHT = "snap";
var JUMP = "jump";
var SUCCESS = "success";
var GAME_OVER= "gameover";

// the functiones required by the createjs sound API
function loadSounds() {
    createjs.Sound.registerSound("sounds/caught.mp3", CAUGHT);
    createjs.Sound.registerSound("sounds/jump.mp3", JUMP);
    createjs.Sound.registerSound("sounds/success.wav", SUCCESS);
    createjs.Sound.registerSound("sounds/gameover.wav", GAME_OVER);
}

// looping background music
myAudio = new Audio('sounds/music.mp3');
//volume set 0-1
myAudio.volume = .5;

myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

// UNCOMMENT FOR BG MUSIC
//myAudio.play();



function playSnap() {
    createjs.Sound.play(CAUGHT);
}
function playJump() {
    createjs.Sound.play(JUMP);
}

function playSuccess() {
    createjs.Sound.play(SUCCESS);
}
function playGameOver() {
    createjs.Sound.play(GAME_OVER);
}

loadSounds();


// how to implement inheritance???

//Initialize the creature class of all the moving elements to draw
var Character = function(x,y,sprite) {
    this.x=x;
    this.y=y;
    this.sprite = sprite;
};

// Draws the creature on the screen
Character.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // This sets the enemies initial location
    // this.x = x;
    // this.y = y;
    this.speed = speed * (Math.random()+1);

    this.height = 67;
    this.width = 10;

    Character.call(this, x,y,'images/enemy-bug.png');

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    // this.sprite = 'images/enemy-bug.png';

};

Enemy.prototype = Object.create(Character.prototype);
Enemy.prototype.constructor = Enemy;


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;

// reuse same enemy instances each time they go off screen
    if (this.x >= 505) {
        this.x = -100;
    }

    // if (player.x <= this.x + 40 &&
    //     player.x >= this.x - 40 &&
    //     player.y <= this.y + 40 &&
    //     player.y >= this.y - 40) {
    //         console.log("Ouch");
    //         playSnap();
    //         player.lives = player.lives - 1;
    //         $("#lifeLeft").text(player.lives);
    //         console.log('lives: ' + player.lives);


    //         player.reset();
    // }

};

Enemy.prototype.checkCollisions = function(){
    if (player.x <= this.x + 40 &&
        player.x >= this.x - 40 &&
        player.y <= this.y + 40 &&
        player.y >= this.y - 40) {
            console.log("Ouch");
            playSnap();
            player.lives = player.lives - 1;
            $("#lifeLeft").text(player.lives);
            console.log('lives: ' + player.lives);


            player.reset();
    }
}

// Draw the enemy on the screen, required method for game
// Enemy.prototype.render = function() {
//     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
// };


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y) {
    // this.x = x;
    // this.y = y;

    this.playerHeight = 50;
    this.playerWidth = 150;
    this.speed = 100;
    this.lives = 5;
    this.score = 0;

    this.speed = 100;
    // this.sprite = 'images/char-horn-girl.png';

    Character.call(this, x,y,'images/char-horn-girl.png');
}

Player.prototype = Object.create(Character.prototype);
Player.prototype.constructor = Player;

Player.prototype.reset = function() {
    this.x = 205;
    this.y = 400;

    if(this.lives === 0){
        playGameOver();
        // change body background to red
        //document.body.style.backgroundColor = "#AA0000";
        // add replay.png to fill canvas
        replay = true;
        //and when they click game resets to beginning
        //player.reset();
        gameOn=false;
    }

};

Player.prototype.update = function(dt) {

    if (this.y < -15) {
        console.log('you made it across!');
        this.reset();
        playSuccess();
        this.score += 200;
        $("#score").text(this.score);
        console.log('score: ' + this.score);
    }


    // so player cannot go off the screen
    // canvas width: 505
    // canvas height: 606
        if (this.y > 400){
            this.y = 400;
        }
        if (this.x > 405){
            this.x = 405;
        }
        if (this.x < 0){
            this.x = 5;
        }

// if player has lost - have to click canvas to replay game
        if(replay){
            document.onclick = docclickhandler;
            function docclickhandler() {
                console.log("The document is clicked...");
                replay = false;
                document.body.style.backgroundColor = "#FFF";
                player.lives = 5;
                player.score = 0;
                $("#lifeLeft").text(player.lives);
                $("#score").text(player.score);
                player.reset();
                gameOn=true;
            }
        }


};



// Player.prototype.render = function() {
//     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
// }



Player.prototype.handleInput = function(direction) {
    if (direction == 'left') {
        this.x -= 100;
        playJump();
    }

    if (direction == 'right') {
        this.x += 100;
        playJump();
    }

    if (direction == 'up') {
        this.y -= 83;
        playJump();
    }

    if (direction == 'down') {
        this.y += 83;
        playJump();
    }
}



var Gems = function(x, y, color) {

    this.color = color;

        switch (color) {

            case "orange":
                this.sprite = 'images/gem-orange.png';
                break;
            case "green":
                this.sprite = 'images/gem-green.png';
                break;
            case "blue":
                this.sprite = 'images/gem-blue.png';
                break;
        }

        this.gemWidth = 60;
        this.gemHeight = 67;

        this.x = x;
        this.y = y;
}

    // get the x and y coordinate of the gem
Gems.prototype.render = function(x, y) {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}




var createGems = function() {

    gems = [gemGreen, gemBlue, gemOrange];

    for (var i = 0, len=gems.length; i < len; i++) {
        allGems.push(gems[i]);
    }

}

var gemCollision = function() {

 for (var i = 0; i < allGems.length; i++) {

        if (player.x < allGems[i].x + allGems[i].gemWidth && player.x + player.playerWidth > allGems[i].x && player.y < allGems[i].y + allGems[i].gemHeight && player.playerHeight + player.y > allGems[i].y) {

            allGems.splice(i, 1);

            player.score +=100;
            $("#score").text(player.score);

            if (allGems.length==0){

             var newGem = new Gems(Math.random()*4, Math.random*3, "green");

                allGems.push(newGem);
            }

        }
    }
}





// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player(205, 400);
var enemy1 = new Enemy(-100,210, 100);
var enemy2 = new Enemy(-100,120, 100);
var enemy3 = new Enemy(-100,40, 100);
var enemy4 = new Enemy(-200,40, 100);

var allEnemies = [enemy1, enemy2, enemy3, enemy4];

var allGems = [];
var gemGreen = new Gems(60, 200, "green");
var gemOrange = new Gems(300, 100, "orange");
var gemBlue = new Gems(350, 200, "blue");


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

if(gameOn===true){
        player.handleInput(allowedKeys[e.keyCode]);
    }
});


