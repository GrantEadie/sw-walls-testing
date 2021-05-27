import { useState } from "react";
import Form from "./Form";
import Canvas from "./Canvas";

const pixels = 5;

const Control = () => {
  const [trait, setTrait] = useState({
    pixels: pixels,
    twoByW: 1.5 * pixels,
    twoByH: 3.5 * pixels,
    w: 48 * pixels,
    h: 96 * pixels,
    stud: 16 * pixels,
    windows: 0, 
    windowW: 42 * pixels,
    windowH: 42 * pixels,
    sill: 30 * pixels, 
    header: 5.5 * pixels
  });

  const handleCoordinateChange = (e) => {
    console.log(e.target.value);
    setTrait({ ...trait, [e.target.name]: e.target.value * pixels });
  };

  return (
    <div>
      <div className="row">
        <div className="col-4 mt-5">
          <Form handleCoordinateChange={handleCoordinateChange} />
        </div>
        <div className="col-6">
          <Canvas trait={trait} />
        </div>
      </div>
    </div>
  );
};

export default Control;