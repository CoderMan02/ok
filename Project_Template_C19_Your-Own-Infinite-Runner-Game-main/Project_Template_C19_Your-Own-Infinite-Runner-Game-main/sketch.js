const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var PLAY = 1;
var END = 0;
var gamestate = PLAY; 
var score;

var gun, angle, station, ground;
var gunBullets;
var Bullets = [] //declares array  
var backgroundImage, stationImage;


function preload(){
  backgroundImage = loadImage("assets/background.jpg");
  stationImage = loadImage("assets/tower.png");
}


function setup(){
    createCanvas(windowWidth, windowHeight)
    engine = Engine.create()
    world = engine.world;

    angleMode(DEGREES);
    angle = 15;

    ground = Bodies.rectangle(0, height - 1, width*2, 1, {isStatic: true});
    World.add(world, ground);

    station = Bodies.rectangle(160,350,1160,310, {isStatic: true});
    World.add(world, station);
    gun = new Gun(angle, 180,110,130,100)
    bullet = new Bullet(gun.x, gun.y);

  }
  
  function draw(){
    background(189);
    image(backgroundImage, 0, 0 , displayWidth,displayHeight);

    Engine.update(engine);    

    push();
    fill("black");
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, width*2, 1);
    pop();
    
    push()
    imageMode(CENTER);
    image(stationImage, station.position.x, 575, 300, 430);
    pop()

    gun.show();

    for(var x = 0; x <= Bullets.length; x++) {
    }
  }


  function keyReleased() {
    if(keyCode === 32) {
    //  Bullets[Bullets.length-1].trigger();
   //console.log("hi")

    }
  }
  

  function showBulletkeyPressed() {
    if(keyCode === 32) {
      var gunBullets = new Bullet(gun.x, gun.y);
      gunBullets.trigger()

    }
  }

  function showBullet(Bullets, x) {
    if(Bullets) {
      Bullets.show()
    }
  }
