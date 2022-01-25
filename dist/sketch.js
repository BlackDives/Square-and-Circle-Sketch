function setup() {
 const myCanvas = createCanvas(800, 400);
  myCanvas.parent('myContainer')
  background('rgb(0,255,0)');
}

function draw() {
   circle(150, 200, 250)
   square(350, 75, 250)
}