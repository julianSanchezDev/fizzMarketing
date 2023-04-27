import React, { useState, useEffect } from 'react';

const Clientes = () => {

    const [indiceImagenes, setIndiceImagenes] = useState(0);
    const tiempo = 4000;
    const imagenes = [
      '/public/cliente1.jpeg',
      '/public/cliente2.jpeg',
      '/public/cliente3.jpeg',
      '/public/cliente4.jpeg',
      '/public/cliente5.jpeg',
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

    
<div class="flex flex-col sm:flex-row items-center">
  <div class="w-2/3">
    <div class="card max-w-sm mx-auto image-full sm: py-10 ">
      <figure><img src={imagenes[indiceImagenes]} className="h-2/3 w-full" /></figure>
      <div className="card-body">
        <h2 className="card-title">Nuestros Clientes</h2>
        <p>Quieres formar parte de ellos?</p>
      </div>
    </div>
  </div>
  <div class="ml-4 mt-4 sm:mt-0">
    <h3 class="text-lg font-medium">Únete a nuestro selecto grupo de clientes</h3>
    <p class="mt-2 text-base text-gray-600">Descubre por qué nuestros clientes confían en nosotros y cómo podemos ayudarte a lograr tus objetivos de marketing. ¡Contáctanos hoy mismo!</p>
  </div>
</div>


  )
}

export default Clientes