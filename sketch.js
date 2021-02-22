const Engine = Matter.Engine; //Namespacing
const World = Matter.World;
const Bodies = Matter.Bodies;


var universe, earth, ground, ball, pig1,log1,box3,box4,pig2, log2, log3, log4, box5, bird1, bgimage;
function preload() {
  bgimage = loadImage("bg.png")
}

function setup() {
  createCanvas(1200,400);
  background(bgimage); 

  universe = Engine.create();
  earth= universe.world;

ground = new Ground(600, 400, 1200, 20)
box1 = new box(700,320,70,70)
box2 = new box(920,320,70,70)
box3 = new box(700,240,70,70)
box4 = new box(920,240,70,70)
box5 = new box(810,160,70,70)
pig1 = new pig(810, 350)
pig2 = new pig(810, 220)
log2 = new log(810, 180, 300, PI/2)
log1 = new log(810, 260, 300, PI/2)
log3 = new log(760, 120, 150, PI/7)
log4 = new log(870, 120, 150, -PI/7)
bird1 = new bird(100, 100)




  
}

function draw() {
 
  background(bgimage);
  Engine.update(universe);
  
   ground.display()
   box1.display()
   box2.display()
   pig1.display()
   log1.display()
   box3.display()
   box4.display()
   pig2.display()
   log2.display()
   log3.display()
   log4.display()
   box5.display()
   bird1.display()
   


  //rect(200,200,50,50); //x,y,width,height
  
 
}