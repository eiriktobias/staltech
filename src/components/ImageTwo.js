import Harrow from "../img/harrow.jpeg";
import { Parallax } from "react-parallax";

const ImageTwo = () => (
  <Parallax className="image" bgImage={Harrow} strength={600}>
    <div className="content">
      <span className="img-txt">Staltech</span>
    </div>
  </Parallax>
);

export default ImageTwo;
