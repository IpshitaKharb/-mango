class Ground{
    constructor(x,y,width,height){
    var options={
        isStatic:true,
    }
     this.body=Bodies.rectangle(x,y,width,height,options);
     World.add(world,this.body);
     this.height = height;
     this.width = width;

    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y)
        rect(0, 0, this.width, this.height);
        rotate(angle);
        pop();
    }

}