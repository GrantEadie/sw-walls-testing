const drawArrow = (p5, base, vec, h) => {
  p5.push();
  p5.stroke(0);
  p5.fill(0);
  p5.translate(base.x, base.y);
  p5.line(0, 0, vec.x, vec.y);
  p5.rotate(vec.heading());

  let arrowSize = 7;
  p5.translate(arrowSize, 0);
  p5.triangle(10, -arrowSize / 2, 10, arrowSize / 2, -arrowSize, 0);
  p5.translate(vec.mag() - arrowSize * 2, 0);
  p5.triangle(-10, arrowSize / 2, -10, -arrowSize / 2, arrowSize, 0);
  p5.pop();

  p5.push();
  p5.translate(base.x, base.y - h / 2);
  p5.rectMode(p5.CENTER);
  p5.noStroke();
  p5.rect(0, 0, 30, 30);
  p5.textAlign(p5.CENTER, p5.CENTER);
  p5.text(`${h / 5}"`, 0, 0);
  p5.pop();
};

export const wall = (p5, trait) => {
  const xcenter = p5.windowWidth / 4;
  const ycenter = p5.windowHeight / 2;
  const boardWidth = 1.5 * 5;

  const rightBoard = {
    x: xcenter + 116,
    y: ycenter,
    w: boardWidth,
    h: trait.h,
  };

  const leftBoard = {
    x: xcenter - 116,
    y: ycenter,
    w: boardWidth,
    h: trait.h,
  };

  const bottomBoard = {
    x: xcenter,
    y: ycenter + (trait.h / 2 + boardWidth / 2),
    w: trait.w,
    h: boardWidth,
  };

  const topBoard = {
    x: xcenter,
    y: ycenter - (trait.h / 2 + boardWidth / 2),
    w: trait.w,
    h: boardWidth,
  };

  const rafterPlate = {
    x: xcenter,
    y: ycenter - (trait.h / 2 + boardWidth * 1.5),
    w: trait.w,
    h: boardWidth,
  };

  const centerStud = {
    x: xcenter,
    y: ycenter,
    w: boardWidth,
    h: trait.h,
  };

  const blocking = {
    x: xcenter,
    y: ycenter + (trait.h / 2 + boardWidth / 2) - 480,
    w: trait.w,
    h: trait.twoByH,
  };

  // right board
  p5.push();
  p5.rectMode(p5.CENTER);

  if (trait.h > 480) {
    p5.rect(blocking.x, blocking.y, blocking.w, blocking.h);
  }
  if (!trait.windows) {
    if (trait.stud < 120) {
      p5.rect(centerStud.x, centerStud.y, centerStud.w, centerStud.h);
    } else {
      p5.rect(centerStud.x - 40, centerStud.y, centerStud.w, centerStud.h);
      p5.rect(centerStud.x + 40, centerStud.y, centerStud.w, centerStud.h);
    }
  }

  p5.rect(rightBoard.x, rightBoard.y, rightBoard.w, rightBoard.h);
  p5.rect(leftBoard.x, leftBoard.y, leftBoard.w, leftBoard.h);
  p5.rect(topBoard.x, topBoard.y, topBoard.w, topBoard.h);
  p5.rect(rafterPlate.x, rafterPlate.y, rafterPlate.w, rafterPlate.h);
  p5.rect(bottomBoard.x, bottomBoard.y, bottomBoard.w, bottomBoard.h);

  p5.pop();

  const arrowDistance = 30;

  // right arrow
  let v0 = p5.createVector(
    bottomBoard.x + bottomBoard.w / 2 + arrowDistance,
    bottomBoard.y + bottomBoard.h / 2
  );
  let v1 = p5.createVector(0, -trait.h - boardWidth * 3);
  drawArrow(p5, v0, v1, trait.h);

  // left arrow
  let v2 = p5.createVector(
    bottomBoard.x - bottomBoard.w / 2 - arrowDistance,
    bottomBoard.y + bottomBoard.h / 2 - boardWidth
  );
  let v3 = p5.createVector(0, -trait.h);
  drawArrow(p5, v2, v3, trait.h - boardWidth * 3);
};

export const window = (p5, trait) => {
  p5.push();

  p5.pop();
};
