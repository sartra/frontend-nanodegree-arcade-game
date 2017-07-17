// variable creation
var lives = 5;
var score = 0;
//sounds withcreatejs sound API
var caught = "snap";

// the functiones required by the createjs sound API in order to work correctly
function loadSounds() {
    createjs.Sound.registerSound("sounds/caught.mp3", caught);
}

function playSnap() {
    createjs.Sound.play(caught);
}

loadSounds();


// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // This sets the enemies initial location
    this.x = x;
    this.y = y;
    this.speed = speed * (Math.random()+1);

    this.height = 67;
    this.width = 10;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};


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

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    drawBox(this.x, this.y + 77, 100, 67, "yellow");
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y) {
    this.x = x;
    this.y = y;

    this.height = 50;
    this.width = 150;
    this.speed = 100;
    this.lives = 5;
    this.score = 0;

    this.speed = 100;
    this.sprite = 'images/char-horn-girl.png';
}

Player.prototype.reset = function() {
    this.x = 205;
    this.y = 400;

    if (this.lives == 0) {
        console.log('YOU LOSE!')
    }
};

Player.prototype.update = function(dt) {

    if (this.y <= -25) {
        console.log('you made it across!');
        this.reset();
        this.score += 1;
        $("#score").text(player.score);
        console.log('score: ' + player.score);

    }

    //  if (this.x < 0 || this.x > 400) {
    //     if(this.x < 0){
    //         this.x = 0;
    //     }
    //     else{
    //         this.x = 400;
    //     }
    // }
    //   if (this.y < 0 || this.y > 400) {
    //     if(this.y < 0){
    //         this.reset();
    //     }
    //     else{
    //         this.y = 400;
    //     }
    // }
    // this.checkCollisions();
};



Player.prototype.checkCollisions = function() {

    for (var i = 0; i < allEnemies.length; i++) {
        if ((this.x < allEnemies[i].x + allEnemies[i].width) && (this.x + this.width > allEnemies[i].x) && (this.y < allEnemies[i].y + allEnemies[i].height) && (this.height + this.y > allEnemies[i].y)) {


            console.log("Collision!");
            this.lives--;
            this.reset();
        }

        else if ((this.x < heart.x + heart.width) && (this.x + this.width > heart.x) && (this.y < heart.y + heart.height) && (this.height + this.y > heart.y)) {

            setTimeout (function() {
            alert('YOU WIN!');
            }, 100);
            this.reset();
        }
    }
};

function drawBox(x, y, width, height, color) {
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    ctx.stroke();
};


Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    drawBox(this.x + 5, this.y + 60, 85, 80, "blue");

}

var Heart = function(x,y) {
    this.x = x;
    this.y = y;
    this.height = 50;
    this.width = 50;
    this.sprite = 'images/Heart.png';
};

Heart.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    drawBox(this.x + 5, this.y + 50, 95, 90, "blue");
}

Player.prototype.handleInput = function(direction) {
    if (direction == 'left') {
        this.x -= 100;
    }

    if (direction == 'right') {
        this.x += 100;
    }

    if (direction == 'up') {
        this.y -= 83;
    }

    if (direction == 'down') {
        this.y += 83;
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

var heart = new Heart(150,150);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
