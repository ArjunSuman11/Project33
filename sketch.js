const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, bars1, bars2, bars3, bars4, bars5, bars6;
var plinkos = [];

function setup() {
  
  engine=Engine.create();
  world=engine.world;
  
  createCanvas(480,800);
  ground = new Ground(480,800,1000,20);

  for (i = 0 ; i < 16 ; i++){
    let x= 10 + 30 * i;
    let y = 90 + 10 ;
    plinkos.push(new createPlinko(x, 200));
  }

  for (j = 0 ; j < 16 ; j++){
    let x= 10 + 30 * j;
    let y = 90 + 10 ;
    plinkos.push(new createPlinko(x, 300));
  }

  for (i = 0 ; i < 16 ; i++){
    let x= 10 + 30 * i;
    let y = 90 + 10 ;
    plinkos.push(new createPlinko(x, 400));
  }

  for (i = 0 ; i < 16 ; i++){
    let x= 10 + 30 * i;
    let y = 90 + 10 ;
    plinkos.push(new createPlinko(x, 100));
  }
   
  //drawing vertical bars
  bars1 = new Ground(80,800,10,600);
  bars2 = new Ground(160,800,10,600);
  bars3 = new Ground(240,800,10,600);
  bars4 = new Ground(320,800,10,600);
  bars5 = new Ground(400,800,10,600);
  bars6 = new Ground(480,800,10,600);
}

function position(){
  this.x = x;
  this.y = y;
  this.r = r;
}

var particles = [];



function draw() {
  background(0);  
  ground.display();
  bars1.display();
  bars2.display();
  bars3.display();
  bars4.display();
  bars5.display();
  bars6.display();

  if(frameCount%60===0){
     particles.push(new createParticle(random(width/2-40, width/2+40), 10, 10));
  }
  for(i=0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  for(var a=0; a<particles.length; a++){
    particles[a].display();
    console.log(particles[a].body);
  }

}