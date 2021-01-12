class Ball {
    constructor(x,y,r) {
        var options={
            friction: 0.00001, restitution: 0.5, density: 0.001 
        }

        this.body=Bodies.circle(x, y, r, options)
        World.add(world, this.body);
        this.r = r; 

    }
    display () {
        var  pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate();
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r)
        pop();

    }
    }