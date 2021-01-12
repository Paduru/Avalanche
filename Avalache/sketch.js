const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var ground1, ground2;

var balls = [];

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(560, 500, 500, 25,340);

  ground2 = new Ground(240, 200, 500, 25,340)
  console.log(ground1)
}

function draw() {  
  background("white");
  text(mouseX+","+mouseY,mouseX,mouseY)
  Engine.update(engine);
  ground1.display();
  ground2.display();
  for (var i=0; i<balls.length; i++) {
    balls[i].display();
  }
}

function mouseClicked() {
  var ball = new Ball(150, 50, Math.round(random(10, 50)));
  balls.push(ball);
}