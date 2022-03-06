class Bullet {
    constructor(x, y) {
        const options = {
            isStatic: true
        }

        this.r = 30;  
        this.image = ("./assets/bullet.png");
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body)
    }

    trigger() {
        var updatedAngle = gun.angle - 28;
        updatedAngle = updatedAngle*(3.14/180);
        var velocity = p5.Vector.fromAngle(updatedAngle);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, {
            x: velocity.x * (180/3.14), y: velocity.y * (180/3.14)
        })
    }

    show() {
        var pos = this.body.position;
        push()
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, this.r, this.r)
        pop()
    }   
}