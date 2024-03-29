function Vehical() {
    this.pos = createVector(random(width), random(height));
    this.target = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.r = 8;
    this.maxspeed = 5;
    this.maxforce = 0.3;



}
Vehical.prototype.behaviors = function () {
    var arrive = this.arrive(this.target);


    var mouse = createVector(mouseX, mouseY);
    var flee = this.flee(mouse);
    arrive.mult(1);
    flee.mult(5);
    this.applyForce(flee);

    this.applyForce(arrive);
}
Vehical.prototype.applyForce = function (f) {
    this.acc.add(f)
}
Vehical.prototype.update = function () {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);

}
Vehical.prototype.show = function () {
    stroke(255);
    strokeWeight(8);
    stroke(255);
    strokeWeight(8);
    point(this.pos.x, this.pos.y);

}

Vehical.prototype.arrive = function (target) {
    var desired = p5.Vector.sub(target, this.pos);
    desired.setMag(this.maxspeed);
    var d = desired.mag();

    if (d < 100) {
        var speed = map(d, 0, 100, 0, this.maxspeed);

    }
    desired.setMag(speed);

    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce)
    return steer;

}
Vehical.prototype.flee = function (target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    if (d < 50) {


        desired.setMag(this.maxspeed);

        desired.mult(-1);
        var steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.maxforce)


        return steer;
    } else {
        return createVector(0, 0);
    }
}