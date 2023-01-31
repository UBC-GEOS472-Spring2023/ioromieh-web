let rect1, rect2, rect3, rect4, rect5;

function setup() {
  createCanvas(600, 400);

  rect1 = new Rectangle(-50, 50, 50, 50, 2);
  rect2 = new Rectangle(-100, 100, 50, 50, 3);
  rect3 = new Rectangle(-150, 150, 50, 50, 4);
  rect4 = new Rectangle(-200, 200, 50, 50, 5);
  rect5 = new Rectangle(-250, 250, 50, 50, 6);
}

function draw() {
  background(255);

  rect1.move();
  rect1.display();

  rect2.move();
  rect2.display();

  rect3.move();
  rect3.display();

  rect4.move();
  rect4.display();

  rect5.move();
  rect5.display();
}

class Rectangle {
  constructor(x, y, w, h, speed) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = speed;
  }

  display() {
    rect(this.x, this.y, this.w, this.h);
  }

  move() {
    this.x += this.speed;
    if (this.x > width) {
      this.x = -50;
    }
  }
}
