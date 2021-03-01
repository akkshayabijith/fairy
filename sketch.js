var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/starImage.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starryNight.jpg");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.05;

	engine = Engine.create();
	world = engine.world;

    var	option = {
		isStatic:true,restitution: 0.5
	}

	starBody = Bodies.circle(650 , 30 , 5 ,option);
	World.add(world, starBody);
	
	Engine.run(engine);

	star.y = starBody.position.y;
    star.x = starBody.position.x;
 keyPressed();

 if(star.y>470){
	Body.setStatic(starBody>false);
   }
}


function draw() {
  background(bgImg);

 

  Engine.update(engine);

  drawSprites();

}

function keyPressed() {
	//write code here
	if(keyCode === LEFT_ARROW){
      fairy.x -= 6;
	}

	if(keyCode === RIGHT_ARROW){
		fairy.x += 6;
	}
}
