import Harrow2 from "../img/harrow2.jpeg";
import { Parallax } from "react-parallax";

const ImageThree = () => (
  <Parallax className="image" bgImage={Harrow2} strength={600}>
    <div className="content">
      <span className="img-txt">Staltech</span>
    </div>
  </Parallax>
);

export default ImageThree;
