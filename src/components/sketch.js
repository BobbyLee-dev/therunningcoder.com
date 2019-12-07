const Sketch = p => {
  p.setup = () => {
    p.createCanvas(720, 400);
    p.background(51);
    p.noStroke();
    p.noLoop();
  };

  p.draw = () => {
    p.background('rgb(78, 2, 90)');
    p.drawTarget(100 * 0.25, 100 * 0.4, 200, 4);
    p.drawTarget(100 * 0.5, 100 * 0.5, 300, 10);
    p.drawTarget(100 * 0.75, 100 * 0.3, 120, 6);
  };

  p.drawTarget = (xloc, yloc, size, num) => {
    const grayvalues = 255 / num;
    const steps = size / num;
    for (let i = 0; i < num; i++) {
      p.fill(i * grayvalues);
      p.ellipse(xloc, yloc, size - i * steps, size - i * steps);
    }
  };
};

export default Sketch;
