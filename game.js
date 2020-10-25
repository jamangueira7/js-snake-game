window.onload = function (){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');

    document.addEventListener('keydown', function (e){
        switch (e.keyCode){
            case 37:
                velX = -1;
                velY = 0;
                break;
            case 38:
                velX = 0;
                velY = -1;
                break;
            case 39:
                velX = 1;
                velY = 0;
                break;
            case 40:
                velX = 0;
                velY = +1;
                break;
        }
    });
    setInterval(game, 1000/10);
}

snake = [];
positionX = 10;
positionY = 10;
foodX = 15;
foodY = 15;
grid = 20;
velX = 0;
velY = 0;
size = 5;

function game() {
    positionX += velX;
    positionY += velY;

    if (positionX < 0) {
        positionX = grid;
    }

    if (positionX > grid) {
        positionX = 0;
    }

    if (positionY < 0) {
        positionY = grid;
    }

    if (positionY > grid) {
        positionY = 0;
    }

    ctx.fillStyle = 'azure';
    ctx.fillRect(0, 0, canvas.width, canvas.height );

    fruit = parseInt(document.getElementById('fruit').innerText);

    ctx.fillStyle = 'darkolivegreen';
    for( var i=0; i < snake.length; i++){
        ctx.fillRect(snake[i].x * grid, snake[i].y * grid, grid-1, grid-1);

        if(snake[i].x == positionX && snake[i].y == positionY ) {
            size = 5;
            document.getElementById('fruit').innerHTML = 0;
        }
    }

    snake.push({ x: positionX, y: positionY });

    while (snake.length > size) {
        snake.shift();
    }

    ctx.fillStyle = 'red';
    ctx.fillRect(foodX * grid, foodY * grid, grid-1, grid-1);

    if(positionX == foodX && positionY == foodY) {
        size++;
        document.getElementById('fruit').innerHTML = fruit + 1;
        foodX = Math.floor(Math.random() * grid);
        foodY = Math.floor(Math.random() * grid);
    }

}
