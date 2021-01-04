class Mango{
    constructor(x,y,r){
    var options={
        isStatic:true,
    }
     this.body=Bodies.circle(x,y,r/2,options);
     World.add(world,this.body);
     this.radius = r;
     this.image = loadImage("mango.png");

    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(angle);
        imageMode(CENTER);
        
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }

}