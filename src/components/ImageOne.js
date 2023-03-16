import Field from "../img/field.jpg";
import { Parallax } from "react-parallax";

const ImageOne = () => (
  <Parallax className="image" bgImage={Field} strength={800}>
<div className="w-full h-screen flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
<p className="text-2xl">Fantastisk tekst her</p>
<h1 className="py-3 text-5xl md:text-7xl font-bold">Stor tekst</h1>
<p className="text-2">Litt mindre tekst</p>
<button className="py-3">Kontakt oss</button>
        </div>

      </div>
    </div>
    
  </Parallax>
);

export default ImageOne;
