import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Formulario = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_16buy7k', 'template_cja6fk4', form.current, 'K-mfevL4rQaktf73j')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <>
    <h2 className='text-center my-8'>Completa El Formulario Para Empezar a Vender Mas</h2>

      <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto border border-blue-500 rounded-lg bg-gray-100 p-6 my-8">
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2" htmlFor="user_name">Nombre</label>
    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="user_name" id="user_name" />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2" htmlFor="user_email">Email</label>
    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="user_email" id="user_email" />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2" htmlFor="number">Numero</label>
    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="number" id="number" />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Mensaje</label>
    <textarea className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="message" id="message" rows="4"></textarea>
  </div>
  
  <div className="flex justify-end">
    <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Enviar" />
  </div>
</form>

    
    
    </>
  
  );
};

export default Formulario;
