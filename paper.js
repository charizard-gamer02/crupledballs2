class Paper{
    constructor(x,y,radius){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        
this.body = Bodies.circle(x, y, radius, options);

World.add(world, this.body);
this.image=loadImage("paperball.png");
}
display(){
var pos =this.body.position;
var angle=this.body.angle
push()
angleMode(RADIANS)
translate(pos.x,pos.y)
rotate(angle)
ellipseMode(CENTER);
fill(255);
circle(0, 0, this.width, this.height);

}
};
    