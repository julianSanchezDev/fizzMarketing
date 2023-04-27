import React, { useState, useEffect } from 'react';

const Sliders = () => {
  const [indiceImagenes, setIndiceImagenes] = useState(0);
  const tiempo = 4000;
  const imagenes = [
    '/src/components/homeCarpeta/imagenes/cabecera1.jpg',
    '/src/components/homeCarpeta/imagenes/cabecera2.jpg',
    '/src/components/homeCarpeta/imagenes/cabecera1.jpg',
    '/src/components/homeCarpeta/imagenes/cabecera2.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndiceImagenes((indiceAnterior) =>
        indiceAnterior === imagenes.length - 1 ? 0 : indiceAnterior + 1
      );
    }, tiempo);
    return () => clearInterval(intervalId);
  }, [tiempo, imagenes.length]);

  return (
    <div className="carousel w-full">
      <div id="slide1" className={`carousel-item relative w-full`}>
        <img src={imagenes[indiceImagenes]} className="h-2/3 w-full" />
      </div>
    </div>
  );
};

export default Sliders;
