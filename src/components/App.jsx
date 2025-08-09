import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Details from "./Details";
import { useState } from "react";
function App() {
  const [cartContent, setCartContent] = useState(1);
  return (
    <div>
      <Navbar cartContent={cartContent} setCartContent={setCartContent} />
      <main>
        <Carousel />
        <Details setCartContent={setCartContent} cartContent={cartContent} />
      </main>
    </div>
  );
}

export default App;
