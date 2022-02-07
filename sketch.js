var wall1
var wall2
var wall3
var wall4
var wall5
var wall6
var wall7
var wall8
var wall9
var wall10
var wall11
var wall12
var wall13
var wall14
var wall15
var wall16
var wall17
var wall18
var wall19
var wall20
var wall21
var wall22
var wall23
var wall24
var point1
var point2
var point3
var point4
var point5
var point6
var point7
var point8
var point9
var point10
var point11
var point12
var point13
var point14
var point15
var point16
var point17
var point18
var point19
var point20
var point21
var point22
var point23
var point24
var point25
var point26
var point27
var point28
var point29
var point30
var point31
var point32
var point33
var point34
var point35
var point36
var point37
var point38
var point39
var point40
var point41
var point42
var point43
var point44
var point45
var point46
var point47
var point48

var hero

var count
function setup() {
  canvas=createCanvas(400,400);
  wall1=createSprite(200,375,360,10);
  wall2=createSprite(375,200,10,360);
  wall3=createSprite(200,25,360,10);
  wall4=createSprite(20,175,10,310);
  wall5=createSprite(125,175,110,10);
  wall6=createSprite(175,125,10,110);
  wall7=createSprite(275,175,110,10);
  wall8=createSprite(225,125,10,110);
  wall9=createSprite(125,225,110,10);
  wall10=createSprite(175,275,10,110);
  wall11=createSprite(275,225,110,10);
  wall12=createSprite(225,275,10,110);
  wall13=createSprite(75,100,10,60);
  wall14=createSprite(100,75,60,10);
  wall15=createSprite(325,100,10,50);
  wall16=createSprite(300,75,60,10);
  wall17=createSprite(75,300,10,60);
  wall18=createSprite(100,325,60,10);
  wall19=createSprite(325,300,10,60);
  wall20=createSprite(300,325,60,10);
  wall21=createSprite(125,125,25,25);
  wall21.shapeColor="black";
  wall22=createSprite(275,125,25,25);
  wall22.shapeColor="black";
  wall23=createSprite(125,275,25,25);
  wall23.shapeColor="black";
  wall24=createSprite(275,275,25,25);
  wall24.shapeColor="black";
  point1=createSprite(200,200,10,10);
  point2=createSprite(100,350,10,10);
  point3=createSprite(150,350,10,10);
  point4=createSprite(200,350,10,10);
  point5=createSprite(250,350,10,10);
  point6=createSprite(300,350,10,10);
  point7=createSprite(350,350,10,10);
  point8=createSprite(350,300,10,10);
  point9=createSprite(350,250,10,10);
  point10=createSprite(350,200,10,10);
  point11=createSprite(350,150,10,10);
  point12=createSprite(350,100,10,10);
  point13=createSprite(350,50,10,10);
  point14=createSprite(50,50,10,10);
  point15=createSprite(100,50,10,10);
  point16=createSprite(150,50,10,10);
  point17=createSprite(200,50,10,10);
  point18=createSprite(250,50,10,10);
  point19=createSprite(300,50,10,10);
  point20=createSprite(50,300,10,10);
  point21=createSprite(50,250,10,10);
  point22=createSprite(50,200,10,10);
  point23=createSprite(50,150,10,10);
  point24=createSprite(50,100,10,10);
  point25=createSprite(100,100,10,10);
  point26=createSprite(100,150,10,10);
  point27=createSprite(100,200,10,10);
  point28=createSprite(100,250,10,10);
  point29=createSprite(100,300,10,10);
  point30=createSprite(150,100,10,10);
  point31=createSprite(150,150,10,10);
  point32=createSprite(150,200,10,10);
  point33=createSprite(150,250,10,10);
  point34=createSprite(150,300,10,10);
  point35=createSprite(200,100,10,10);
  point36=createSprite(200,150,10,10);
  point37=createSprite(200,250,10,10);
  point38=createSprite(200,300,10,10);
  point39=createSprite(250,100,10,10);
  point40=createSprite(250,150,10,10);
  point41=createSprite(250,200,10,10);
  point42=createSprite(250,250,10,10);
  point43=createSprite(250,300,10,10);
  point44=createSprite(300,100,10,10);
  point45=createSprite(300,150,10,10);
  point46=createSprite(300,200,10,10);
  point47=createSprite(300,250,10,10);
  point48=createSprite(300,300,10,10);
  
  hero=createSprite(50,350,20,24);
  
  count=0;
  count1=0;
}

function draw(){
  background("white");
  background("white");
  text("point :"+ count,10,10);
  text("death :"+ count1,60,10);
  
  hero.bounceOff(wall1);
  hero.bounceOff(wall2);
  hero.bounceOff(wall3);
  hero.bounceOff(wall4);
  hero.bounceOff(wall5);
  hero.bounceOff(wall6);
  hero.bounceOff(wall7);
  hero.bounceOff(wall8);
  hero.bounceOff(wall9);
  hero.bounceOff(wall10);
  hero.bounceOff(wall11);
  hero.bounceOff(wall12);
  hero.bounceOff(wall13);
  hero.bounceOff(wall14);
  hero.bounceOff(wall15);
  hero.bounceOff(wall16);
  hero.bounceOff(wall17);
  hero.bounceOff(wall18);
  hero.bounceOff(wall19);
  hero.bounceOff(wall20);
  hero.bounceOff(wall21);
  hero.bounceOff(wall22);
  hero.bounceOff(wall23);
  hero.bounceOff(wall24);
  
  if(hero.isTouching(point1)){
    point1.destroy();
    count=count+1;
  }
  if(hero.isTouching(point2)){
    point2.destroy();
    count=count+1;
  }
  if(hero.isTouching(point3)){
    point3.destroy();
    count=count+1;
  }
  if(hero.isTouching(point4)){
    point4.destroy();
    count=count+1;
  }
  if(hero.isTouching(point5)){
    point5.destroy();
    count=count+1;
  }
  if(hero.isTouching(point6)){
    point6.destroy();
    count=count+1;
  }
  if(hero.isTouching(point7)){
    point7.destroy();
    count=count+1;
  }
  if(hero.isTouching(point8)){
    point8.destroy();
    count=count+1;
  }
  if(hero.isTouching(point9)){
    point9.destroy();
    count=count+1;
  }
  if(hero.isTouching(point10)){
    point10.destroy();
    count=count+1;
  }
  if(hero.isTouching(point11)){
    point11.destroy();
    count=count+1;
  }
  
  if(hero.isTouching(point12)){
    point12.destroy();
    count=count+1;
  }
  if(hero.isTouching(point13)){
    point13.destroy();
    count=count+1;
  }
  if(hero.isTouching(point14)){
    point14.destroy();
    count=count+1;
  }
  if(hero.isTouching(point15)){
    point15.destroy();
    count=count+1;
  }
  if(hero.isTouching(point16)){
    point16.destroy();
    count=count+1;
  }
  if(hero.isTouching(point17)){
    point17.destroy();
    count=count+1;
  }
  if(hero.isTouching(point18)){
    point18.destroy();
    count=count+1;
  }
  if(hero.isTouching(point19)){
    point19.destroy();
    count=count+1;
  }
  if(hero.isTouching(point20)){
    point20.destroy();
    count=count+1;
  }
  if(hero.isTouching(point21)){
    point21.destroy();
    count=count+1;
  }
  if(hero.isTouching(point22)){
    point22.destroy();
    count=count+1;
  }
  if(hero.isTouching(point23)){
    point23.destroy();
    count=count+1;
  }
  if(hero.isTouching(point24)){
    point24.destroy();
    count=count+1;
  }
  if(hero.isTouching(point25)){
    point25.destroy();
    count=count+1;
  }
  if(hero.isTouching(point26)){
    point26.destroy();
    count=count+1;
  }
  if(hero.isTouching(point27)){
    point27.destroy();
    count=count+1;
  }
  if(hero.isTouching(point28)){
    point28.destroy();
    count=count+1;
  }
  if(hero.isTouching(point29)){
    point29.destroy();
    count=count+1;
  }
  if(hero.isTouching(point30)){
    point30.destroy();
    count=count+1;
  }
  if(hero.isTouching(point31)){
    point31.destroy();
    count=count+1;
  }
  if(hero.isTouching(point32)){
    point32.destroy();
    count=count+1;
  }
  if(hero.isTouching(point33)){
    point33.destroy();
    count=count+1;
  }
  if(hero.isTouching(point34)){
    point34.destroy();
    count=count+1;
  }
  if(hero.isTouching(point35)){
    point35.destroy();
    count=count+1;
  }
  if(hero.isTouching(point36)){
    point36.destroy();
    count=count+1;
  }
  if(hero.isTouching(point37)){
    point37.destroy();
    count=count+1;
  }
  if(hero.isTouching(point38)){
    point38.destroy();
    count=count+1;
  }
  if(hero.isTouching(point39)){
    point39.destroy();
    count=count+1;
  }
  if(hero.isTouching(point40)){
    point40.destroy();
    count=count+1;
  }
  if(hero.isTouching(point41)){
    point41.destroy();
    count=count+1;
  }
  if(hero.isTouching(point42)){
    point42.destroy();
    count=count+1;
  }
  if(hero.isTouching(point43)){
    point43.destroy();
    count=count+1;
  }
  if(hero.isTouching(point44)){
    point44.destroy();
    count=count+1;
  }
  if(hero.isTouching(point45)){
    point45.destroy();
    count=count+1;
  }
  if(hero.isTouching(point46)){
    point46.destroy();
    count=count+1;
  }
  if(hero.isTouching(point47)){
    point47.destroy();
    count=count+1;
  }
  if(hero.isTouching(point48)){
    point48.destroy();
    count=count+1;
  }
  
  
  if(keyDown("right")){
    background("red")
    hero.position.x=hero.position.x+5
  }
  
  if(keyDown("left")){
    background("lightblue")
    hero.position.x=hero.position.x-5
  }
  
  if(keyDown("up")){
    background("lightgreen")
    hero.position.y=hero.position.y-5
  }
  
  if(keyDown("down")){
    background("yellow")
    hero.position.y=hero.position.y+5;
  }
  if(hero.isTouching(wall24)||
  hero.isTouching(wall23)||
  hero.isTouching(wall22)||
  hero.isTouching(wall21)){
    
    hero.position.x=50;
    hero.position.y=350;
    count1=count1+1;
  }
  
  drawSprites();
}