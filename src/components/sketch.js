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
    p.strokeWeight(3);
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
    let size = ((iteration / iterations) * p.windowHeight) / 3;
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

export default Sketch;
