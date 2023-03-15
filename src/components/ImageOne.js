import Field from "../img/field.jpg";
import { Parallax } from "react-parallax";

const ImageOne = () => (
  <Parallax className="image" bgImage={Field} strength={600}>
<div className="content">
      <span className="img-txt">Staltech</span>
    </div>
  </Parallax>
);

export default ImageOne;
