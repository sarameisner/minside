import { useEffect, useState } from "react";

export default function Images() {
  const [visibleImages, setVisibleImages] = useState([]); // Holder styr på hvilke billeder der skal vises

  // Array af billeder, der skal rotere rundt om det centrale billede
  const images = ["/images/img1.jpg", "/images/img2.jpg", "/images/img3.png", "/images/img4.jpg", "/images/img5.webp", "/images/img6.webp", "/images/img7.webp", "/images/img8.webp", "/images/img9.webp", "/images/img10.webp"];

  // Opdater de synlige billeder hurtigere
  useEffect(() => {
    const interval = setInterval(() => {
      // Vælg et tilfældigt sæt af synlige billeder
      const newVisibleImages = images
        .map((img, index) => ({ img, index }))
        .sort(() => Math.random() - 0.5) // Tilfældig rækkefølge
        .slice(0, 4); // Vis op til 4 billeder ad gangen
      setVisibleImages(newVisibleImages.map((item) => item.index));
    }, 1000); // Skift hver 1 sekund
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative flex items-center justify-center w-full h-[400px]">
      {/* Central billede */}
      <img
        src="/images/me.png" // Dit eget billede
        alt="Sara Meisner"
        className="relative z-10 w-auto h-[300px] max-w-[300px] object-contain"
      />

      {/* Rotating billeder */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`absolute w-48 h-auto ${visibleImages.includes(index) ? "opacity-100 z-20" : "opacity-0 z-0"}`}
          style={{
            top: `${50 + 25 * Math.sin((index / images.length) * 2 * Math.PI)}%`,
            left: `${50 + 25 * Math.cos((index / images.length) * 2 * Math.PI)}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}
