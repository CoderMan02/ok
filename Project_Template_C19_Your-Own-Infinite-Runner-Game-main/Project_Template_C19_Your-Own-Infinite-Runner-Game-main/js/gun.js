class Gun {
    constructor(angle, x, y, width, height) {
        this.gunImage = loadImage("./assets/gun.png");
        this.gunSupport = loadImage("./assets/support.png");
        this.angle = angle;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    show() {
        if(this.angle < 70 && keyIsDown(DOWN_ARROW)) {
            this.angle = this.angle + 1;
        }
        
        if(this.angle > -30 && keyIsDown(UP_ARROW)) {
            this.angle = this.angle - 1;
        }

        push();
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.gunImage, 390, 520, this.width, this.height);
        pop();
        image(this.gunSupport, 300, 613.5, 200, 200);
        noFill();
    }
}