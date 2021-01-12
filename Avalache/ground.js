class Ground {
    constructor(x, y, w, h,angle) {
        var options = {
            isStatic : true
            
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world,this.body);
        Matter.Body.setAngle(this.body,angle)
        this.w = w;
        this.h = h;
    }
    display () {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0, this.w, this.h);
       pop();
    }
}