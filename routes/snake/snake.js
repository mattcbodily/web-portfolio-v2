const canvas = document.getElementById('game-board');
const ctx = canvas.getContext('2d');
const active = false;
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

const bgMusic = new Audio();
const snakeBite = new Audio();
const gameOver = new Audio();

bgMusic.src = '../../assets/arcade-assets/snake/snake-music.mp3';
bgMusic.loop = 'true';
snakeBite.src = '../../assets/arcade-assets/snake/snake-eat.mp3';
gameOver.src = '../../assets/arcade-assets/game-over.mp3';

function Snake(){
    this.x = 60;
    this.y = 60;
    this.xSpeed = 20;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    this.draw = function(){
        ctx.fillStyle = '#3F88C5';
        for (let i = 0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x,
              this.tail[i].y, scale, scale);
        }

        ctx.fillRect(this.x, this.y, scale, scale);
    }

    this.move = function(){
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }
      
        this.tail[this.total - 1] = { x: this.x, y: this.y };

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > canvas.width - scale) {
            this.x = 0;
          }
      
        if (this.y > canvas.height - scale) {
            this.y = 0;
        }
      
        if (this.x < 0) {
            this.x = canvas.width - scale;
        }
      
        if (this.y < 0) {
            this.y = canvas.height - scale;
        }
    }

    this.changeDirection = function(direction){
        switch(direction){
            case 'Up':
                if(this.ySpeed <= 0 || this.total === 0){
                    this.xSpeed = 0;
                    this.ySpeed = -scale * 1;
                }
                break;
            case 'Down':
                if(this.ySpeed >= 0 || this.total === 0){
                    this.xSpeed = 0;
                    this.ySpeed = scale * 1;
                }
                break;
            case 'Left':
                if(this.xSpeed <= 0 || this.total === 0){
                    this.xSpeed = -scale * 1;
                    this.ySpeed = 0;
                }
                break;
            case 'Right':
                if(this.xSpeed >= 0 || this.total === 0){
                    this.xSpeed = scale * 1;
                    this.ySpeed = 0;
                }
                break;
        }
    }

    this.eat = function(fruit){
        if(this.x === fruit.x && this.y === fruit.y){
            snakeBite.play();
            this.total++;
            return true;
        }
        return false;
    }

    this.checkCollision = function(interval, score){
        for (let i = 0; i < this.tail.length; i++) {
            if (this.x === this.tail[i].x &&
              this.y === this.tail[i].y) {
              if(score > sessionStorage.getItem('highScore')){
                  sessionStorage.setItem('highScore', score)
              }
              bgMusic.pause();
              bgMusic.currentTime = 0;
              gameOver.play();
              this.total = 0;
              this.tail = [];
              clearInterval(interval)
              ctx.font = '30px Orbitron';
              ctx.textAlign = 'center';
              ctx.fillStyle = '#FFFFFF';
              ctx.fillText('Game Over', 250, 50)
            }
        }
    }
}

  
function Fruit(){
    this.x;
    this.y;

    this.spawn = function(tail){
        this.x = (Math.floor(Math.random() * columns - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * rows - 1) + 1) * scale;

        for(let i = 0; i < tail.length; i++){
            if(this.x === tail[i].x && this.y === tail[i].y){
                console.log('hit', this.x, this.y)
                this.spawn(tail)
                this.draw();
            }
        }
    }

    this.draw = function() {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x, this.y, scale, scale)
    }
}

let snake;
sessionStorage.setItem('highScore', 0)

function setup(){
    bgMusic.play();
    snake = new Snake();
    fruit = new Fruit();
    let highScore = sessionStorage.getItem('highScore');
    fruit.spawn(snake.tail)

    let gameTime = window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.draw();
        snake.move();
        document.getElementById('game-score').innerText = `Your score: ${snake.total}`;

        if(snake.total > highScore){
            highScore = snake.total
        }
        document.getElementById('high-score').innerText = `High score: ${highScore}`;

        if(snake.eat(fruit)){
            fruit.spawn(snake.tail);
        }

        snake.checkCollision(gameTime, highScore);
      }, 1000 / 10);
}

window.addEventListener('keydown', ((e) => {
    if(e.keyCode !== 32){
        const direction = e.key.replace('Arrow', '');
        snake.changeDirection(direction);
    }
}));

window.addEventListener('keydown', (e => {
    if(e.keyCode === 32){
        setup()
    }
}))