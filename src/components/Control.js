import { useState } from "react";
import Form from "./Form";
import Canvas from "./Canvas";

const pixels = 7;

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
    sill: 24 * pixels,
    header: 5.5 * pixels,
    headerAmount: 0,
    windowType: 0,
  });

  const handleTraitChange = (e) => {
    
    setTrait({ ...trait, [e.target.name]: e.target.value * trait.pixels });
  };

  return (
    <div>
      <div className="row">
        <div className="col-4 mt-5">
          <Form handleTraitChange={handleTraitChange} trait={trait} />
        </div>
        <div className="col-6">
          <Canvas handleTraitChange={handleTraitChange} trait={trait} />
        </div>
      </div>
    </div>
  );
};

export default Control;