// Enemies our player must avoid
const yStart = [1, 2, 3];
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    this.y = yStart[Math.floor(Math.random()*yStart.length)];
    this.speed = Math.floor(Math.random() * 4) + 1.5;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
    if (this.x >5){
        this.x = -1;
        //reset the speed
        this.speed = Math.floor(Math.random() * 4 + 1.5);
        //reset the y location
        this.y = yStart[Math.floor(Math.random() * yStart.length)];
        }
    //console.log(`Enemy x=${this.x} and y=${this.y}`); (x isn't a whole number...)

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, (this.y * 83)-22);
};

// Now write your own player class
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 2;
    this.y = 5;
    this.Win = function(){
        alert('You Win! Press Ok to play again.');
        this.x = 2;
        this.y = 5;
    }
    console.log(`player x=${this.x} and y=${this.y}`);
};

Player.prototype.checkCollision = function() {
    //console.log(`Enemy x=${this.x} and y=${this.y}`); //--- not working player location
    //console.log(`player x=${this.x} and y=${this.y}`);
    if ((this.y === Enemy.y) &&
        (this.x === Enemy.x)) {
        console.log("collision!!");
            this.x = 2;
            this.y = 5;
        };
};

// This class requires an update(), render() and
Player.prototype.update = function(dt) {
    this.checkCollision();
};

Player.prototype.render= function() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, (this.y * 83)-22);
        if (player.y === 0){
            player.Win();
        }
};

// a handleInput() method.
Player.prototype.handleInput = function(arrowKey){
    console.log("arrow key pressed " + arrowKey);
        switch (arrowKey) {
        case 'left':
        	if (player.x >0){
            	player.x -= 1;
           	}
            break;    
        case 'right':
            if (player.x < 4){
            	player.x += 1;
            }
            break;
        case 'up':
        	if (player.y > 0){
            	player.y -= 1;
        	}
            break;  
        case 'down':
            if (player.y < 5){
            	player.y += 1;
            }
            break;  
        }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const allEnemies = [...Array(4)].map((_,i)=> new Enemy(0,i+1));
// Place the player object in a variable called player
let player = new Player();

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