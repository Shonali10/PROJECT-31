class Drop {
  constructor(x, y, r) {
    var options = {
        'restitution':0.3,
        'friction':0.1,
        'density':1.0
    }
    this.rain = Bodies.circle(x,y,5,options)
    this.radius = 5;
    World.add(world, this.rain);
  }

    update(){
      if(this.rain.position.y > height){

        Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
    }
}
    drawDrops(){
      fill("blue")
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
 
};
