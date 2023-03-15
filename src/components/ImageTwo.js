import Field from "../img/field.jpg";
import { Parallax } from "react-parallax";

const ImageTwo = () => (
  <Parallax className="image" bgImage={Field} strength={800}>
    <div className="content">
      <span className="img-txt">Staltech</span>
    </div>
  </Parallax>
);

export default ImageTwo;
