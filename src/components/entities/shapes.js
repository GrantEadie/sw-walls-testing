const drawArrow = (p5, base, vec, h, p) => {
  p5.push();
  p5.stroke(0);
  p5.fill(0);
  p5.translate(base.x, base.y);
  p5.line(0, 0, vec.x, vec.y);
  p5.rotate(vec.heading());

  let arrowSize = 7;
  p5.translate(arrowSize, 0);
  p5.triangle(10, -arrowSize / 2, 10, arrowSize / 2, -arrowSize + 1, 0);
  p5.translate(vec.mag() - arrowSize * 2, 0);
  p5.triangle(-10, arrowSize / 2, -10, -arrowSize / 2, arrowSize - 1, 0);
  p5.pop();

  p5.push();
  p5.translate(base.x + vec.x / 2, base.y + vec.y / 2);
  p5.rectMode(p5.CENTER);
  p5.noStroke();
  p5.rect(0, 0, 3 * p, 3 * p);
  p5.textAlign(p5.CENTER, p5.CENTER);
  p5.text(`${h / p}"`, 0, 0);
  p5.pop();
};

export const wall = (p5, trait, handleTraitChange) => {


  const xcenter = p5.windowWidth / 4;
  const ycenter = p5.windowHeight / 2;
  const boardWidth = trait.twoByW;

  const rightBoard = {
    x: xcenter + (trait.w / 2 - trait.twoByW / 2),
    y: ycenter,
    w: boardWidth,
    h: trait.h,
  };

  const leftBoard = {
    x: xcenter - (trait.w / 2 - trait.twoByW / 2),
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
    y: ycenter - (trait.h / 2 + boardWidth / 2) + boardWidth / 2,
    w: trait.w,
    h: boardWidth,
  };

  const rafterPlate = {
    x: xcenter,
    y: ycenter - (trait.h / 2 + boardWidth),
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
    y: ycenter + (trait.h / 2 + boardWidth / 2) - 96 * trait.pixels,
    w: trait.w,
    h: trait.twoByH,
  };

  // right board
  p5.push();
  p5.rectMode(p5.CENTER);

  if (!trait.windows) {
    if (trait.h > 96 * trait.pixels) {
      p5.rect(blocking.x, blocking.y, blocking.w, blocking.h);
    }
    if (trait.stud >= 24 * trait.pixels) {
      p5.rect(centerStud.x, centerStud.y, centerStud.w, centerStud.h);
    } else {
      p5.rect(
        centerStud.x - trait.w / 3 / 2,
        centerStud.y,
        centerStud.w,
        centerStud.h
      );
      p5.rect(
        centerStud.x + trait.w / 3 / 2,
        centerStud.y,
        centerStud.w,
        centerStud.h
      );
    }
  }

  p5.rect(rightBoard.x, rightBoard.y, rightBoard.w, rightBoard.h);
  p5.rect(leftBoard.x, leftBoard.y, leftBoard.w, leftBoard.h);
  p5.rect(topBoard.x, topBoard.y, topBoard.w, topBoard.h);
  p5.rect(rafterPlate.x, rafterPlate.y, rafterPlate.w, rafterPlate.h);
  p5.rect(bottomBoard.x, bottomBoard.y, bottomBoard.w, bottomBoard.h);

  p5.pop();

  const arrowDistance = 6 * trait.pixels;

  // right arrow
  let v0 = p5.createVector(
    bottomBoard.x + bottomBoard.w / 2 + arrowDistance,
    bottomBoard.y + bottomBoard.h / 2
  );
  let v1 = p5.createVector(0, -trait.h - boardWidth * 2.5);
  drawArrow(p5, v0, v1, trait.h, trait.pixels);

  // left arrow
  let v2 = p5.createVector(
    bottomBoard.x - bottomBoard.w / 2 - arrowDistance,
    bottomBoard.y + bottomBoard.h / 2 - boardWidth
  );
  let v3 = p5.createVector(0, -trait.h + trait.twoByW);
  drawArrow(p5, v2, v3, trait.h - boardWidth * 3, trait.pixels);
};

export const window = (p5, trait) => {

  const crippleHeight = trait.h - (trait.windowH + trait.sill) - trait.twoByW * 2

  if (trait.windowType === 0) {
    trait.windowW = 42 * trait.pixels;
  }

  if (trait.windowW > 42 * trait.pixels) {
    trait.windowW = 42 * trait.pixels;
  }

  if (trait.sill < 10 * trait.pixels) {
    trait.sill+=trait.pixels/4
  }

  if (trait.h - trait.sill < trait.windowH + trait.header + trait.twoByW*2) {
    trait.sill-=trait.pixels/4
  }
  

  const xcenter = p5.windowWidth / 4;
  const ycenter = p5.windowHeight / 2;
  const bottomBoard = {
    x: xcenter,
    y: ycenter + (trait.h / 2 + trait.twoByW / 2),
  };

  p5.push();
  p5.rectMode(p5.CENTER);
  p5.translate(bottomBoard.x, bottomBoard.y - trait.twoByW / 2);

  // jacks

  const centerWindowX = trait.windowW / 2 + trait.twoByW / 2;
  const centerSillHeight =
    -trait.sill / 2 - trait.windowH / 2 - trait.twoByW / 2;
  const totalSillWindowHeight = trait.sill + trait.windowH + trait.twoByW;

  if (trait.stud >= 24 * trait.pixels) {
    p5.rect(0, -trait.sill / 2, trait.twoByW, trait.sill);
  } else {
    p5.rect(8 * trait.pixels, -trait.sill / 2, trait.twoByW, trait.sill);
    p5.rect(-8 * trait.pixels, -trait.sill / 2, trait.twoByW, trait.sill);
  }
  p5.rect(centerWindowX, centerSillHeight, trait.twoByW, totalSillWindowHeight);
  p5.rect(
    -centerWindowX,
    centerSillHeight,
    trait.twoByW,
    totalSillWindowHeight
  );

  // sill
  p5.translate(0, -trait.sill);

  if (trait.windowW/trait.pixels === 42) {
    p5.rect(0, 0, trait.windowW + trait.twoByW * 2, trait.twoByW);
  } else {
    p5.rect(0, 0, trait.windowW, trait.twoByW);
  }

  // window
  p5.translate(0, -trait.twoByW / 2 - trait.windowH / 2);
  p5.rect(0, 0, trait.windowW, trait.windowH);

  // lintel
  p5.translate(0, -trait.twoByW / 2 - trait.windowH / 2);
  p5.rect(0, 0, trait.w - trait.twoByW * 2, trait.twoByW);

  // cripple
  
  p5.translate(0, -trait.twoByW/2)
  if (trait.stud >= 24 * trait.pixels) {
    p5.rect(
      0,
      -crippleHeight / 2,
      trait.twoByW,
      crippleHeight
    );
  } else {
    p5.rect(
      8 * trait.pixels,
      -crippleHeight / 2,
      trait.twoByW,
      crippleHeight
    );
    p5.rect(
      -8 * trait.pixels,
      -crippleHeight / 2,
      trait.twoByW,
      crippleHeight
    );
  }

  // header
  p5.translate(0, -trait.header / 2);
  p5.rect(0, 0, trait.w - trait.twoByW * 2, trait.header);
  p5.textAlign(p5.CENTER, p5.CENTER);
  p5.text(`2 x ${Math.ceil(trait.header / trait.pixels)}`, 0, 10);
  const headerTypes = ["SINGLE", "DOUBLE", "TRIPLE"];
  p5.text(`${headerTypes[trait.headerAmount / trait.pixels]} HEADER`, 0, -10);

  p5.pop();

  // sill height arrows
  let outerBottom = p5.createVector(
    bottomBoard.x + 5 * trait.pixels,
    bottomBoard.y + trait.twoByW / 4
  );
  let outerSill = p5.createVector(0, -trait.sill - trait.twoByW);
  drawArrow(p5, outerBottom, outerSill, trait.sill, trait.pixels);

  // sill inner height arrows
  let innerBottom = p5.createVector(
    bottomBoard.x - 5 * trait.pixels,
    bottomBoard.y - trait.twoByW / 1.25
  );
  let innerSill = p5.createVector(0, -trait.sill + trait.twoByW);
  drawArrow(
    p5,
    innerBottom,
    innerSill,
    trait.sill - trait.twoByW * 2,
    trait.pixels
  );

  // cripple arrow

  const lintel = bottomBoard.y - trait.windowH - trait.sill - trait.twoByW * 2;
  let crippleArrow0 = p5.createVector(xcenter - 15 * trait.pixels, lintel);
  let crippleArrow1 = p5.createVector(
    0,
    -crippleHeight
  );
  drawArrow(
    p5,
    crippleArrow0,
    crippleArrow1,
    trait.h - (trait.windowH + trait.sill) - trait.twoByW * 2,
    trait.pixels
  );

  let windowArrowH0 = p5.createVector(
    xcenter - trait.windowW / 4,
    lintel + trait.windowH + trait.twoByW
  );
  let windowArrowH1 = p5.createVector(0, -trait.windowH);

  drawArrow(p5, windowArrowH0, windowArrowH1, trait.windowH, trait.pixels);

  let windowArrowW0 = p5.createVector(
    xcenter - trait.windowW / 2,
    lintel + trait.windowH + trait.twoByW - 10 * trait.pixels
  );
  let windowArrowW1 = p5.createVector(trait.windowW, 0);

  drawArrow(p5, windowArrowW0, windowArrowW1, trait.windowW, trait.pixels);
};
