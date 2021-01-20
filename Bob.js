
class Bob{
    constructor(x,y){
        var options = {
            isStatic: false,
            'restitution': 1.0,
            'friction': 1.2,
            'density':1.9
        }
        this.x = x;
        this.y = y;
        this.r = 50;
        this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
        World.add(world, this.body);
        
        }
        display(){
            var pos = this.body.position;
            push();
            translate(pos.x, pos.y);
            ellipseMode(CENTER);
            strokeWeight(2);
            fill(254, 170, 0);
            ellipse(0,0,50,50);
            pop();
        }
    }
