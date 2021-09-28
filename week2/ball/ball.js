const radius = 10;
const ball = {x: 20, y: 0, dx: 5, dy: 1};
let old = {x: ball.x, y: ball.y};

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let velocity = 1;
let inertia = 0.9;


function startOverRandom(x = 0) {
    (x === 0) ? ball.x = Math.random() * (canvas.width - radius) + radius : ball.x = x;
    context.clearRect(0, 0, canvas.width, canvas.height);
    ball.y = 0
    ball.dx = 5
    ball.dy = 1

}

function startOver() {
    startOverRandom(20)
}


function start() {
    context.fillStyle = "black";

    setInterval(() => {
        nextBoard();
        display(context);
    }, 1000 / 20);
}

function nextBoard() {

    // keep old ball values for the sake of efficient clearing of the old display
    old.x = ball.x
    old.y = ball.y


    // handle ball is hitting the bounds
    //   reverse direction
    //   lose some energy relative to the current inertia (only velocity varies)

    // calculate new position
    // calculate any changes in velocity due to gravitational pull or medium resistance
    if (ball.y + radius > canvas.height) {
        ball.dy = -ball.dy * inertia
    } else {
        ball.dy += velocity
    }

    if (ball.x + radius > canvas.width || ball.x - radius < 0) {
        ball.dx = -(ball.dx)
    }

    ball.y += ball.dy;
    ball.x += ball.dx;

    if (Math.floor(ball.y) === Math.floor(old.y)) {
        ball.dx = ball.dx * 0.98
    }


}

function display(context) {
    context.clearRect(old.x - radius - 1, old.y - radius - 1, 22, 22);
    fillBox(context)
}

function fillBox(context) {
    context.beginPath();
    context.arc(ball.x, ball.y, radius, 0, 6.3, false);
    context.fill();
}


