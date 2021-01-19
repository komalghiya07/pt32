class Box {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':false,
          'restitution':0.8,
          'friction':1,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image=loadImage("blue.png");
      this.width = width;
      this.height = height;
      this.visibility=255;

      World.add(world, this.body);
    }
    display(){
     
      if(this.body.speed<3){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("lightBlue");
        strokeWeight(4);
        stroke("black");
        image(this.image,0, 0, this.width, this.height);
        pop();
        }
        else{
          World.remove(world,this.body);
          push();
          this.visibility=this.visibility-15;
          tint(255,this.visibility);
           image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
           pop();
        }
      }
      score(){
        if(this.visibility===0){
          score=score+1;
        }
      }
     
    }
    