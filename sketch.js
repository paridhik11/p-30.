const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var jointLink,jointPoint,bridge,ground,stone,lWall,rWall,zombie1,backgroundImg
var stones=[]

function preload(){
zombie1=loadImage("./assets/zombie.png")
backgroundImg=loadImage("./assets/background.png")

//buttonImg=loadImage("./assets/vfLae.png")
}

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
 

  ground = new Base(300,680,1000,20);

lWall=new Base(10,100,100,80);

rWall=new Base(790,100,100,80);

bridge=new Bridge(15,{x:-50,y:100})
jointPoint=new Base(790,100,600,10)

Matter.Composite.add(bridge.body,jointPoint)
jointLink=new Link(bridge,jointPoint)

zombie=createSprite(width/3,height-110)
zombie.addImage(zombie1)
zombie.scale=0.1
zombie.velocityX=2

//button=createSprite(width-200,height/2-100)
//button.addImage(buttonImg)
//button.scale=0.1

breakbutton = createButton("");
  breakbutton.position(width-200,height/2-100);
  breakbutton.class("breakButton")
  breakbutton.mousePressed(handleButtonPress)
  
for(var i=0;i<=8;i++){
  var x=random(width/2-200,width/2+300)
  var y=random(-10,100)
  var stone =new Stone(x,y,40)
  stones.push(stone)
  
}
}

function draw() {
  background(backgroundImg)

  Engine.update(engine);

 ground.show();
bridge.show();
lWall.show();
rWall.show();

for(var i of stones)
{
  i.show()
}
drawSprites()

}

 
function handleButtonPress(){
  jointLink.detach()
  setTimeout(() =>{
    bridge.break()
  },1500)
  }

