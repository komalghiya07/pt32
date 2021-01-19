class Polygon{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.8,
            density:1.0
        }
        this.body=Bodies.circle(x,y,70,options);
        this.image=loadImage("polygon.png");
        this.r=70;
        World.add(world,this.body); 
    }
    display(){
        var angle=this.body.angle;
        var pos=this.body.position;
        push();
        imageMode(CENTER);
        fill("white");
        rotate(angle);
        image(this.image,pos.x,pos.y,this.r,this.r);
        pop();
            
    }
    
}
