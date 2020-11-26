const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var score=0
var bg

function preload() {
  getBackgroundImg();
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground1=new Ground(550,190,240,20)

  box1=new Box(530,165,40,30)
  box2=new Box(490,165,40,30)
  box3=new Box(570,165,40,30)
  box4=new Box(610,165,40,30)

  box5=new Box(510,135,40,30)
  box6=new Box(550,135,40,30)
  box7=new Box(590,135,40,30)

  box8=new Box(530,105,40,30)
  box9=new Box(570,105,40,30)

  box10=new Box(550,77,40,30)

  polygon=new Polygon(50,200,40,40)

  ground2=new Ground(300,335,240,20)

  box11=new Box(280,310,40,30)
  box12=new Box(240,310,40,30)
  box13=new Box(320,310,40,30)
  box14=new Box(360,310,40,30)

  box15=new Box(260,280,40,30)
  box16=new Box(300,280,40,30)
  box17=new Box(340,280,40,30)

  box18=new Box(280,250,40,30)
  box19=new Box(320,250,40,30)

  box20=new Box(300,222,40,30)

  chain=new Slingshot(polygon.body,{x:100,y:200})

 
  
} 

function draw() {
  if (bg){
    background(bg);
    
    textSize(35)
    fill("white")
    text("score: "+score,width-300,50)
    } 


  Engine.update(engine)


  
  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  chain.display();
  polygon.display();


  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
 


}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  chain.fly()
}
function keyPressed(){
  if(keyCode === 32){
      chain.attach(polygon.body);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON=await response.json();
  console.log(responseJSON)
  var datetime= responseJSON.datetime;
  var hour = datetime.slice(11,13)
  console.log(hour)

  if (hour>=06 && hour<=18){
      bg = "lightblue"
  }
  else{
      bg = "black"
  }


}