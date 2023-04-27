import React, { useEffect } from "react";
import Sliders from "./Sliders";
import CardsRellenos from "./CardsRellenos";
import Clientes from "./Clientes";
import Formulario from "./Formulario";
import PiePagina from "./PiePagina";
import WspIcono from "./WspIcono";

const Home = () => {
  useEffect(() => {
    const boton = document.querySelector("#boton");
    const menu = document.querySelector("#menu");

    boton.addEventListener("click", () => {
      console.log("CLICK");
      menu.classList.toggle("hidden");
    });
  }, []);

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap	p-4 text-lg">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="/public/logo.jpeg" />
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          <button
            id="boton"
            class="flex items-center px-3 py-2 border rounded text-black border-black hover:text-white hover:border-white"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          id="menu"
          className="w-full  flex-grow lg:flex lg:items-center lg:w-auto hidden"
        >
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-700 hover:border-purple-500 border-b-2 border-transparent -mb-2 mr-4 text-lg"
            >
              Nosotros
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-700 hover:border-purple-500 border-b-2 border-transparent -mb-2 mr-4 text-lg"
            >
              Donde Estamos ?
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=1126878036"
              target="_blank"
              rel="noopener noreferrer"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-700 hover:border-purple-500 border-b-2 border-transparent -mb-2 text-lg"
            >
              Contactanos
            </a>
          </div>
        </div>
      </nav>

      <div class="max-w-lg mx-auto">
  <h1 class="text-4xl font-bold tracking-in-contract text-gray-900 leading-tight text-center mb-8">Como Vender Más ?</h1>
  <p class="text-gray-700 leading-loose text-lg">Eso es lo que seguramente buscas en Google para mejorar tu negocio, nosotros te proponemos otra solución, deja tus datos en nuestro formulario de abajo para que te contemos que podemos hacer por tu negocio.</p>
</div>

      <div className="relative">
        <WspIcono />
      </div>
    </>
  );
};

export default Home;
