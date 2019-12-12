// const Sketch = p => {
//   p.setup = () => {
//     p.createCanvas(720, 400);
//     p.background(51);
//     p.noStroke();
//     p.noLoop();
//   };

//   p.draw = () => {
//     p.background('rgb(78, 2, 90)');
//     p.drawTarget(100 * 0.25, 100 * 0.4, 200, 4);
//     p.drawTarget(100 * 0.5, 100 * 0.5, 300, 10);
//     p.drawTarget(100 * 0.75, 100 * 0.3, 120, 6);
//   };

//   p.drawTarget = (xloc, yloc, size, num) => {
//     const grayvalues = 255 / num;
//     const steps = size / num;
//     for (let i = 0; i < num; i++) {
//       p.fill(i * grayvalues);
//       p.ellipse(xloc, yloc, size - i * steps, size - i * steps);
//     }
//   };
// };

const Sketch = p => {
  let angle;
  let iterations;

  p.setup = () => {
    angle = 0;
    iterations = 5;
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.strokeWeight(2);
    p.noFill();
    p.stroke('#fff');
  };

  p.draw = () => {
    p.clear();
    angle += 0.001;
    let x = p.windowWidth / 2;
    let y = p.windowHeight / 2;
    p.d(iterations, x, y);
  };

  p.d = (iteration, x, y) => {
    if (iteration <= 0) return;
    iteration--;
    p.push();
    p.translate(x, y);
    p.rotate(iteration * angle);
    let size = ((iteration / iterations) * p.windowHeight) / 4;
    p.rect(-size / 2, -size / 2, size, size);
    p.d(iteration, -size / 2, -size / 2);
    p.d(iteration, size / 2, size / 2);
    p.d(iteration, size / 2, -size / 2);
    p.d(iteration, -size / 2, size / 2);
    p.pop();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

// ********************

// const Sketch = p => {
//   p.setup = () => {
//     p.createCanvas(p.windowWidth, p.windowHeight);
//     p.angleMode(p.DEGREES);
//     p.colorMode(p.HSB);
//   };

//   let particles = [];
//   let angle = 0;

//   p.draw = () => {
//     p.background(0);
//     p.translate(p.width / 2, p.height / 2);
//     if (p.frameCount % 5 === 0) {
//       const changesUntilCenter = p.int(p.map(p.mouseX, 0, p.width, 1000, 10));
//       particles.push(new Particle(angle, changesUntilCenter, p));
//     }
//     const angleChange = p.int(p.map(p.mouseY, 0, p.height, 1, 10));
//     angle = (angle + angleChange) % 360;
//     let deleteIndexes = [];
//     particles.map((k, i) => {
//       if (k.pos.p.mag() > 1) {
//         k.p.draw();
//         k.p.move();
//       } else {
//         deleteIndexes.push(i);
//       }
//     });
//     deleteIndexes.reverse();
//     deleteIndexes.forEach(i => particles.splice(i, 1));
//   };

//   p.keyPressed = () => {
//     particles = [];
//     angle = 0;
//   };

//   class Particle {
//     constructor(angle, changesUntilCenter, p) {
//       console.log(this);

//       this.pos = p.createVector(
//         (p.cos(angle) * p.width) / 3,
//         (p.sin(angle) * p.height) / 3
//       );
//       this.color = angle; // They have the same range
//       this.chg = p.Vector.p.div(this.pos, changesUntilCenter);
//       this.size = 30;
//       const smallestSize = 5;
//       this.sizeChg = (30 - smallestSize) / changesUntilCenter;
//     }

//     draw() {
//       p.noStroke();
//       p.fill(this.color, 100, 100);
//       p.ellipse(this.pos.x, this.pos.y, this.size);
//     }

//     move() {
//       this.pos.sub(this.chg);
//       this.size -= this.sizeChg;
//     }
//   }
// };

export default Sketch;
