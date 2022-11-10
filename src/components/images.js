import pifood from "./images/pifood.jpg";
import pf from "./images/pf.jpg";
import clima from "./images/appclima.jpg";
import calculadora from "./images/calculadora.jpg";

export default [
  { img: pifood, name: "PI-FOOD HENRY", deploy: 'https://demo-front-foodapp.vercel.app/', repo: 'https://github.com/SaanCaba/PI-FOOD', info:'Proyecto desarrollado sobre una app de recetas, con filtros, ordenamientos. Cuenta con un simple páginado para navegar, y además de un formulario de creacion para nuevas comidas. ', tecnologias: 'React, Redux, Node, Express, postgreSQL' },
  { img: pf, name: "PF-FINAL HENRY", deploy: 'https://despegue.vercel.app/', repo: 'https://github.com/laubento/Despegue', info: 'App sobre búsquedas de vuelos para todas las partes del mundo, que incluye: Búsqueda, filtrado combinados, pasarelas de pago con Mercado Pago y Paypal, chatBot, panel de administrador, logueo con terceros, sistema de asistencias para compra de viajes, carrito de compras, scroll infinito y además de un sistema para subir imágenes.', tecnologias:'React, Redux, Node, Express, MongoDB, Bootstrap' },
  { img: clima, name: "Weather App", deploy: 'https://appclima-one.vercel.app/', repo: 'https://github.com/SaanCaba/appclima', info:'App para buscar el clima en diferentes partes del mundo, con un simple buscador, para encontrar tu sitio deseado.',tecnologias:'React, Redux' },
  { img: calculadora, name: "Calculadora", repo:'https://github.com/SaanCaba/ProyectoCalculadora', info: 'App de calculadora, simple para poder realizar calculos exactos.', tecnologias:'React' },
];
