import { useState } from "react";
import { gallery } from "../data";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(3);

  function handleClick(id) {
    setActiveIndex(id - 1);
  }
  return (
    <section>
      <div className="hero-img">
        <img src={gallery[activeIndex].full} alt={gallery[activeIndex].alt} />
      </div>
      <div className="gallery-imgs">
        {gallery.map((product, i) => (
          <div
            className={`thumb-wrapper ${i === activeIndex && "selected"}`}
            key={product.id}
            onClick={() => handleClick(product.id)}>
            <img src={product.thumb} alt={product.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Carousel;
