import Sketch from "react-p5";
import { wall, window } from './entities/shapes'

const Canvas = ({trait, handleTraitChange}) => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth /2, p5.windowHeight * 1.5).parent(canvasParentRef);
  };

  const draw = (p5) => { 
    p5.background(255);
    p5.resizeCanvas(p5.windowWidth / 2, p5.windowHeight * 1.5);

    wall(p5, trait, handleTraitChange)
    
    if (trait.windows) {
      window(p5, trait, handleTraitChange)
    }
    
    
  };
  return (
    <div>
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}

export default Canvas;