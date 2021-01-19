const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28;
var polygonImg;
var slingshot;
var bg;
var score=0;
var engine,world;

function preload(){
    getBackground();
}

function setup() {
    createCanvas(1600,700);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(700,height-20,1800,20);

    box1 = new Box(800,635,70,70);
    box2 = new Box(730,635,70,70);
    box3 = new Box(660,635,70,70);
    box4 = new Box(590,635,70,70);
    box5 = new Box(870,635,70,70);
    box6 = new Box(940,635,70,70);
    box7 = new Box(1010,635,70,70);

    
    box8 = new Box(620,565,70,70);
    box9 = new Box(690,565,70,70);
    box10 = new Box(760,565,70,70);
    box11 = new Box(830,565,70,70);
    box12 = new Box(900,565,70,70);
    box13 = new Box(970,565,70,70);

    box14 = new Box(650,495,70,70);
    box15 = new Box(720,495,70,70);
    box16 = new Box(790,495,70,70);
    box17 = new Box(860,495,70,70);
    box18 = new Box(930,495,70,70);

    box19 = new Box(680,425,70,70);
    box20 = new Box(750,425,70,70);
    box21 = new Box(820,425,70,70);
    box22 = new Box(890,425,70,70);

    box23 = new Box(720,355,70,70);
    box24 = new Box(790,355,70,70);
    box25 = new Box(860,355,70,70);

    box26 = new Box(750,285,70,70);
    box27 = new Box(820,285,70,70);

    box28 = new Box(780,215,70,70);

    polygon=new Polygon(50,50);
    
    slingshot= new Slingshot(polygon.body,{x:100,y:200});

}

function draw() {
    if(bg)
    background(bg);   
    fill("lightPink");
    textSize(40);
    text("Score: "+score,1400,100);
    Engine.update(engine);
    
    ground.display();

    box1.display();
    box1.score();
    box2.display();
    box2.score();
    box3.display();
    box3.score();
    box4.display();
    box4.score();
    box5.display();
    box5.score();
    box6.display();
    box6.score();
    box7.display();
    box7.score();

    box8.display();
    box8.score();
    box9.display();
    box9.score();
    box10.display();
    box10.score();
    box11.display();
    box11.score();
    box12.display();
    box12.score();
    box13.display();
    box13.score();

    box14.display();
    box14.score();
    box15.display();
    box15.score();
    box16.display();
    box16.score();
    box17.display();
    box17.score();
    box18.display();
    box18.score();

    box19.display();
    box19.score();
    box20.display();
    box20.score();
    box21.display();
    box21.score();
    box22.display();
    box22.score();

    box23.display();
    box23.score();
    box24.display();
    box24.score();
    box25.display();
    box25.score();

    box26.display();
    box26.score();
    box27.display();
    box27.score();

    box28.display();
    box28.score();

    polygon.display();
    slingshot.display();

    }

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

async function getBackground(){
    var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON=await response.json();
    var dateTime=responseJSON.datetime;
    var hour=dateTime.slice(11,13);
    //console.log(hour);
    if(hour>06 && hour<19) {
    bg=loadImage("bg.png");
    }
   else{
    bg=loadImage("bg2.png");
  }  
 }   