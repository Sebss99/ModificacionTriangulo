var canvas;
var r;
var g;
var b;

function setup() {
    canvas = createCanvas(800, 800);
    canvas.position(550, 100);
    background(0);
}

function draw() {
    
    r = random(255);
    g = random(255);
    b = random(255);

    fill(r, g, b);
    noStroke();
    triangle(mouseX, mouseY, 450, 450, 350, 450);
}
