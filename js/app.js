// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = function(){
        // while loop: use the y location and add 1 until it reaches the width of the canvas
        // then reset y=0
        // set timeout to delay bug starting back up?
    };
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 390;

    //need method for player location

    //need method for player collision
};

// This class requires an update(), render() and
Player.prototype.update = function(dt) {

};

Player.prototype.render= function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// a handleInput() method.
Player.prototype.handleInput = function(arrowKey){
    console.log("arrow key pressed " + arrowKey);
        switch (arrowKey) {
        case 'left':
        	if (player.x >0){
            	player.x -= 100;
           	}
            break;    
        case 'right':
            if (player.x <400){
            	player.x += 100;
            }
            break;
        case 'up':
        	if (player.y > -35){
            	player.y -= 85;
        	}
            break;  
        case 'down':
            if (player.y < 390){
            	player.y += 85;
            }
            break;  
        }
}

// Now instantiate your objects.
let player = new Player();

// Place all enemy objects in an array called allEnemies
var enemy1 = new Enemy(0, 62, 120);
var enemy2 = new Enemy(0, 145, 80);
var enemy3 = new Enemy(0, 228, 50);

let allEnemies = [enemy1, enemy2, enemy3 ];
// Place the player object in a variable called player



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
