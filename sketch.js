const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];

var maxDrops=100;

function setup(){
    engine = Engine.create();
    world = engine.world;
     
        if(frameCount % 150 === 0){
        for(var i=0; i<maxDrops;i++){
          drops.push(new Drop (random(0,400),random(0,400)))
        }
    }
    createCanvas(400,700);
}

function draw(){
    Engine.update(engine);
    background("black");  
    for(var i = 0; i<maxDrops; i++){
        drops[i].drawDrops();
        drops[i].update()
        
    }
// drops.drawDrops();
// drops.update();
}   

