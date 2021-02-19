class Rope{
    constructor(body1,body2,offsetX,offesetY){
        this.offsetX = offsetX
        this. offsetY = offesetY

        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:({x:this.offsetX,y:this.offsetY})
        }
        this.rope = Matter.constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        var point1 = this.rope.bodyA.position;
        var point2 = this.rope.bodyB.position;

        strokeWeight(2);

        var Anchor1X=pointA.x
        var Anchor1Y=pointA.y

        var Anchor2X=pointB.x+this.offsetX
        var Anchor2Y=pointB.y+this.offsetY

line(Anchor1X,Anchor2X,Anchor2Y,Anchor2Y)
    }
}