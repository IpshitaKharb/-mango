class Stone{
    constructor(x,y,w,h){
    var options ={
        isStatic : false,
        restitution : 0.04
    }
    this.width = w;
    this.height = h;
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.image=loadImage("stone.png");
    World.add(world,this.body);

}
    display(){
        imageMode(CENTER);
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
        image(this.image, 0, 0, this.width*2,this.height*2);
        pop();
    }
}