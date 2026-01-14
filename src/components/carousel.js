"use client";
import { useState } from "react";
import "../styles/carousel.css";

export default function Carousel() {
  const items = [
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/200/?2",
    "https://picsum.photos/300/200/?3",
  ];
  const [image, setImage] = useState(0);

  const nextImage = () => {
    setImage((p) => (p === items.length - 1 ? 0 : p + 1));
  };

  const prevImage = () => {
    setImage((p) => (p === 0 ? items.length - 1 : p - 1));
  };

  return (
<div className="carousel">

  <img src={items[image]}/>

  <div>
    <button onClick={prevImage}>◀</button>
    <button onClick={nextImage}>▶</button>
  </div>
</div>

  );
}
