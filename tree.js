class Tree{
    constructor(x,y,width,height){
    var options={
        isStatic:true,
    }
     this.body=Bodies.rectangle(x,y,width,height,options);
     this.height = height;
     this.width = width;
     this.image=loadImage("tree.png");

    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.height,this.height);
        pop();
    }

}