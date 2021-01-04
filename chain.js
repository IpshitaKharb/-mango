class Chain {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.01,
             length:10
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
        this.pointB = pointB;
    }
    fly () {
        // console.log("working");
        this.chain.bodyA=null;
    }
    display(){
        if(this.chain.bodyA){
            // console.log("working1");
            var PointA = this.chain.bodyA.position;
            var PointB = this.chain.pointB;
            push ();
            strokeWeight(4);
            line(PointA.x,PointA.y,PointB.x,PointB.y);
            pop ();
        }
    }
}