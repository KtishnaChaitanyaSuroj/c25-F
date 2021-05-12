class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbingreen.png");
      World.add(world, this.body);
     
    }
    display(){
      var posit =this.body.position;
      imageMode(CENTER);
      fill("yellow");
      image(this.image,posit.x, posit.y, this.width, this.height);
    }
  };