import Field from "../img/field.jpg";
import { Parallax } from "react-parallax";

const ImageThree = () => (
  <Parallax className="image" bgImage={Field} strength={200}>
    <div className="content">
      <span className="img-txt">Staltech</span>
    </div>
  </Parallax>
);

export default ImageThree;
