import pifood from "./images/pifood.jpg";
import pf from "./images/pf.jpg";
import clima from "./images/appclima.jpg";
import calculadora from "./images/calculadora.jpg";
import ecommerce from './images/e-commerce.png'
import rps from './images/rockpaper.png'

export default [
  { img: pifood, name: "PI-FOOD HENRY", deploy: 'https://demo-front-foodapp.vercel.app/', repo: 'https://github.com/SaanCaba/PI-FOOD', info:'Proyecto desarrollado sobre una app de recetas, con filtros, ordenamientos. Cuenta con un simple páginado para navegar, y además de un formulario de creacion para nuevas comidas. ', tecnologias: 'React, Redux, Node, Express, postgreSQL' },
  { img: pf, name: "PF-FINAL HENRY", deploy: 'https://despegue.vercel.app/', repo: 'https://github.com/laubento/Despegue', info: 'App sobre búsquedas de vuelos para todas las partes del mundo, que incluye: Búsqueda, filtrado combinados, pasarelas de pago con Mercado Pago y Paypal, chatBot, panel de administrador, logueo con terceros, sistema de asistencias para compra de viajes, carrito de compras, scroll infinito y además de un sistema para subir imágenes.', tecnologias:'React, Redux, Node, Express, MongoDB, Bootstrap' },
  { img: clima, name: "Weather App", deploy: 'https://appclima-one.vercel.app/', repo: 'https://github.com/SaanCaba/appclima', info:'App para buscar el clima en diferentes partes del mundo, con un simple buscador, para encontrar tu sitio deseado.',tecnologias:'React, Redux' },
  { img: calculadora, name: "Calculadora", repo:'https://github.com/SaanCaba/ProyectoCalculadora', info: 'App de calculadora, simple para poder realizar calculos exactos.', tecnologias:'React' },
  {img: ecommerce, name: 'E-Commerce', deploy:'https://e-commerce-sc.vercel.app/', repo:'https://github.com/SaanCaba/e-commerce', info:'App sobre un e-commerce, con productos traidos de una api, con autenticación y pasarela de pagos, además de filtros para los productos.', tecnologias:'React, Redux, TypeScript, Node, Express, MongoDB'},
  {img:rps, name:'Stone-Paper-Scissor Game', deploy:'https://stone-paper-scissor-game-navy.vercel.app/play', repo: 'https://github.com/SaanCaba/stone-paper-scissor-game', info:'App realizada sobre el juego de piedra papel o tijera, en el cual implementé Next.JS como herramienta principal además de TypeScript.', tecnologias:'NextJS, TypeScript'}
];
