const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world; 
var ground;
var box1,box2,box3,box4,box5,box6;

function setup() {
  createCanvas(1500,700);

engine = Engine.create();
world = engine.world;
ground=new Ground(750,650,1500,20);
ball=new Ball(200,200,80,80)
rope=new Rope(ball.body,{x:350,y:50})

box1=new Box(900,100,70,70);
box2=new Box(900,100,70,70);
box3=new Box(900,100,70,70);
box4=new Box(900,100,70,70);
box5=new Box(900,100,70,70);
box6=new Box(900,100,70,70);

box7=new Box(1000,100,70,70);
box8=new Box(1000,100,70,70);
box9=new Box(1000,100,70,70);
box10=new Box(1000,100,70,70);
box11=new Box(1000,100,70,70);
box12=new Box(1000,100,70,70);

box13=new Box(1100,100,70,70);
box14=new Box(1100,100,70,70);
box15=new Box(1100,100,70,70);
box16=new Box(1100,100,70,70);
box17=new Box(1100,100,70,70);
box18=new Box(1100,100,70,70);

box19=new Box(1200,100,70,70);
box20=new Box(1200,100,70,70);
box21=new Box(1200,100,70,70);
box22=new Box(1200,100,70,70);
box23=new Box(1200,100,70,70);
box24=new Box(1200,100,70,70);

box25=new Box(1300,100,70,70);
box26=new Box(1300,100,70,70);
box27=new Box(1300,100,70,70);
box28=new Box(1300,100,70,70);
box29=new Box(1300,100,70,70);
box30=new Box(1300,100,70,70);
box31=new Box(1300,100,70,70);
}

function draw() {
  background(0);  
  Engine.update(engine)
  ground.display()
  fill ("green")
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  strokeWeight(4)
  fill ("blue")
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  fill ("yellow")
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  fill ("purple")
  box19.display()
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  box24.display()
  fill ("pink")
box25.display()
box26.display()
box27.display()
box28.display()
box29.display()
box30.display()
box31.display()
  ball.display()
  rope.display()
}

function mouseDragged(){
   Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}