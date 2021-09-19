const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("assets/background.png");
  baseimage = loadImage("assets/base.png");
  playerimage = loadImage("assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

 // var options = {
  //  isStatic = true
  //};

  //create player base body
  playerBase = new Player(200,350,180,150);
  World.add(world,playerBase);
  //create player body
  player = new Player(250,180,180,150);
  World.add(world,player);

}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
  image(baseimage,playerBase.x,playerBase.y,180,150)
  //show the playerbase image using image() function
  image(playerimage,player.x,player.y,50,180)


  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  playerBase.display();
  player.display();
}
