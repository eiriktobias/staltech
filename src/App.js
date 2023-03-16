import ImageOne from "./components/ImageOne";
import ImageTwo from "./components/ImageTwo";
import ImageThree from "./components/ImageThree";
import TextBox from "./components/TextBox";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <ImageOne />
      <TextBox />
      <ImageTwo />
      <TextBox />
      <ImageThree />
      <TextBox />
    </div>
  );
}

export default App;
