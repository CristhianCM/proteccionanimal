/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead, d as renderSlot, m as maybeRenderHead, e as renderComponent } from '../astro.feffeaa8.mjs';
import 'html-escaper';

const $$Astro$a = createAstro("https://CristhianCM.github.io");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="/public/favicon.svg" type="image/png">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css">

    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">

    <title>PET</title>
  ${renderHead($$result)}</head>
  <body>
    ${renderSlot($$result, $$slots["default"])}
    
  </body>
</html>`;
}, "/home/criscm/Documentos/Proyects/Astro_Proyect/proteccionAnimal/proteccionanimal/src/layout/Layout.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$9 = createAstro("https://CristhianCM.github.io");
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate(_a || (_a = __template(["", '<header class="w-full z-50 bg-transparent fixed astro-DMQPWCEC" id="header">\n  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css" integrity="sha256-x8PYmLKD83R9T/sYmJn1j3is/chhJdySyhet/JuHnfY=" crossorigin="anonymous">\n  <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;900&display=swap" rel="stylesheet">\n  \n\n  <nav class="flex items-center bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-2 flex-wrap astro-DMQPWCEC">\n    <a href="#" class="p-2 inline-flex items-center lg:2xl:container lg:2xl:mx-auto lg:px-20 astro-DMQPWCEC">\n      <span class="text-xl text-white uppercase tracking-wide astro-DMQPWCEC">PET</span>\n    </a>\n    <button class="text-white inline-flex py-2 px-4 bg-transparent hover:text-white hover:border hover:border-white hover:border-transparent rounded-md lg:hidden ml-auto outline-none nav-toggler astro-DMQPWCEC" data-target="#navigation">\n      <i class="ri-function-line text-xl astro-DMQPWCEC"></i>\n    </button>\n    <div class="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:gap-4 xl:container 2xl:max-w-3xl lg:2xl:mx-auto lg:w-auto lg:pr-20 astro-DMQPWCEC" id="navigation">\n      <div class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto astro-DMQPWCEC">\n        <a href="#" class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-100 items-center justify-center hover:border hover:border-white hover:border-transparent hover:text-white astro-DMQPWCEC">\n          <span class="astro-DMQPWCEC">Inicio</span>\n        </a>\n        <a href="#" class="lg:inline-flex lg:w-auto lg:ml-3 w-full px-3 py-2 rounded text-gray-100 items-center justify-center hover:border hover:border-white hover:border-transparent hover:text-white astro-DMQPWCEC">\n          <span class="astro-DMQPWCEC">Informaci\xF3n</span>\n        </a>\n        <a href="#" class="lg:inline-flex lg:w-auto lg:ml-3 w-full px-3 py-2 rounded text-gray-100 items-center justify-center hover:border hover:border-white hover:border-transparent hover:text-white astro-DMQPWCEC">\n          <span class="astro-DMQPWCEC">Contacto</span>\n        </a>\n        <a href="#" class="lg:inline-flex lg:w-auto lg:ml-3 w-full px-3 py-2 rounded text-gray-100 items-center justify-center hover:border hover:border-white hover:border-transparent hover:text-white astro-DMQPWCEC">\n          <span class="astro-DMQPWCEC">Galeria</span>\n        </a>\n        <a href="#" class="lg:inline-flex lg:w-auto lg:ml-3 w-full px-3 py-2 rounded text-gray-100 items-center justify-center hover:border hover:border-white hover:border-transparent hover:text-white astro-DMQPWCEC">\n          <span class="astro-DMQPWCEC">Donaci\xF3nes</span>\n        </a>\n        <a href="#" class="lg:inline-flex lg:w-auto lg:ml-3 w-full px-3 py-2 rounded text-zinc-100 items-center hover:border hover:border-zinc-900 hover:text-zinc-900 bg-opacity-40 backdrop-blur-lg drop-shadow-lg flex gap-2 astro-DMQPWCEC">\n          <span class="astro-DMQPWCEC">Modo Oscuro</span>\n          <i class="ri-moon-line change-theme astro-DMQPWCEC" id="theme-button"></i>\n        </a>\n      </div>\n    </div>\n  </nav>\n</header>\n\n\n\n<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js" integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossorigin="anonymous"><\/script>'])), maybeRenderHead($$result));
}, "/home/criscm/Documentos/Proyects/Astro_Proyect/proteccionAnimal/proteccionanimal/src/components/Nav.astro");

const $$Astro$8 = createAstro("https://CristhianCM.github.io");
const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Home;
  return renderTemplate`${maybeRenderHead($$result)}<main>
  <section class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 te">
    <img src="../../public/home1.jpg" alt="" class="absolute top-0 left-0 w-full h-full object-cover object-[85%]">

    <div class="relative h-[calc(100vh-3rem)] gap-3 container grid content-center">
      <div class="m-4 gap-4 text-white">
        <span class="lg:text-2xl text-xl font-light sm:text-lg">Estamos Actuando</span>
        <h1 class="w-full font-normal lg:text-5xl text-3xl text-white lg:leading-10 dark:tex-black leading-9 pb-10">
          Por Los Animales
        </h1>
        <a href="#" class="bg-transparent lg:text-xl xl:text-2xl hover:bg-green-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded focus:ring-white">Explora el Blog</a>
      </div>

      <div class="flex flex-col gap-y-0.5 m-4 text-xl sm:text-2xl lg:text-3xl text-white">
        <a href="#"><i class="ri-facebook-box-fill"></i></a>
        <a href="#"><i class="ri-instagram-fill"></i></a>
        <a href="#"><i class="ri-twitter-fill"></i></a>
        <a href="#"><i class="ri-mv-fill"></i></a>
      </div>

      <div class="text-white flex p-4 items-center gap-2 absolute right-0 bottom-4 sm:bottom-16 w-56 lg:w-72 py-5 px-4 border bg-opacity-20 backdrop-blur-lg drop-shadow-lg hover:border-transparent hover:bg-green-600 mr-4 rounded-md hover:border">
        <div class="text-sm sm:text-base lg:text-xl font-semibold">
          <span class=""> Nuevas Historias</span>
          <a href="#" class="flex items-center gap-2 hover:text-green-900">Mas
            <i class="ri-arrow-right-line"></i>
          </a>
        </div>

        <div class="overflow-hidden rounded-md">
          <a href="#">
            <img class="h-auto" src="../../public/home2.jpg" alt="">
          </a>
        </div>
      </div>
    </div>
  </section>
</main>`;
}, "/home/criscm/Documentos/Proyects/Astro_Proyect/proteccionAnimal/proteccionanimal/src/components/Home.astro");

const $$Astro$7 = createAstro("https://CristhianCM.github.io");
const $$Info = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Info;
  return renderTemplate`${maybeRenderHead($$result)}<div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 tex pb-0">
  <div class="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12 mt-10">
    <div class="w-full lg:w-6/12">
      <h2 class="w-full font-normal lg:text-4xl text-3xl text-gray-800 lg:leading-10 dark:text-white leading-9">
        Información sobre nosotros <br>Protección Animal Puyango
      </h2>
      <p class="font-normal text-base text-justify leading-6 text-gray-600 dark:text-gray-200 mt-6">
        Protección Animal Puyango es una organización sin ánimo de lucro
        dedicada a proteger a los animales en la región de Puyango, ubicada en
        la provincia de Loja en Ecuador. La organización fue fundada por un
        grupo de activistas que comparten una profunda preocupación por el
        bienestar de los animales y que creen que la protección de los animales
        es esencial para el equilibrio y la armonía en la naturaleza. <br>
        <br>
        Nuestro equipo está compuesto por un grupo de voluntarios comprometidos y
        apasionados por la causa animal, quienes se dedican a tiempo completo a cuidar
        y proteger a los animales necesitados. Contamos con un refugio donde brindamos
        atención veterinaria, alimentación y cariño a los animales rescatados, mientras
        esperan ser adoptados por familias amorosas.
      </p>
    </div>
    <div class="w-full lg:w-6/12">
      <img class="lg:block hidden w-full rounded-md" src="../../public/info3.jpg" alt="people discussing on board">
      <img class="lg:hidden sm:block hidden w-full rounded-md" src="../../public/info2.jpg" alt="people discussing on board">
      <img class="sm:hidden block w-full rounded-md" src="../../public/info1.jpg" alt="people discussing on board">
    </div>
  </div>

  <div class="relative mt-24">
    <div class="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
      <div class="z-20 w-12 h-12 bg-green-500 rounded-full flex justify-center items-center">
        <i class="ri-map-pin-line text-white text-2xl"></i>
      </div>

      <div class="z-20 w-12 h-12 bg-green-500 rounded-full flex justify-center items-center">
        <i class="ri-chat-smile-2-line text-white text-2xl"></i>
      </div>

      <div class="hidden z-20 w-12 h-12 bg-green-500 rounded-full sm:flex justify-center items-center">
        <i class="ri-user-3-line text-white text-2xl"></i>
      </div>
    </div>

    <hr class="z-10 absolute top-2/4 w-full bg-gray-200">
  </div>
  <div class="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
    <div>
      <p class="font-normal lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">
        Ubicación
      </p>
      <p class="font-normal text-base text-justify leading-6 text-gray-600 dark:text-gray-200 mt-6">
        Estamos ubicados en la región de Puyango, ubicada en la provincia de
        Loja en Ecuador.
      </p>
    </div>
    <div>
      <p class="font-normal lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">
        Programa de rescate
      </p>
      <p class="font-normal text-base text-justify leading-6 text-gray-600 dark:text-gray-200 mt-6">
        Nuestro programa de rescate de animales cuenta con un equipo altamente
        capacitado y dedicado que está equipado con un vehículo especializado
        para llevar a cabo nuestras operaciones de rescate.
      </p>
    </div>

    <div class="sm:block hidden">
      <p class="font-normal lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">
        Comunidad
      </p>
      <p class="font-normal text-base text-justify leading-6 text-gray-600 dark:text-gray-200 mt-6">
        Trabajamos estrechamente con la comunidad para identificar y responder
        rápidamente a las alertas de animales en peligro o en situación de
        riesgo.
      </p>
    </div>
  </div>

  <div class="sm:hidden block relative mt-8">
    <hr class="absolute top-2/4 w-full bg-gray-200">
    <div class="z-20 w-12 h-12 bg-green-500 rounded-full flex justify-center items-center">
      <i class="ri-user-3-line text-white text-2xl"></i>
    </div>
  </div>
  <div class="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
    <div>
      <p class="font-normal lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">
        Comunidad
      </p>
      <p class="font-normal text-base text-justify leading-6 text-gray-600 dark:text-gray-200 mt-6">
        Trabajamos estrechamente con la comunidad para identificar y responder
        rápidamente a las alertas de animales en peligro o en situación de
        riesgo.
      </p>
    </div>
  </div>

  <div class="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
    <div class="w-full lg:w-6/12">
      <h2 class="font-normal lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white">
        Misión
      </h2>
      <p class="font-normal text-base leading-6 text-justify text-gray-600 dark:text-gray-200 mt-6 w-full lg:w-10/12 xl:w-9/10">
        El principal objetivo de Protección Animal Puyango es proteger a los
        animales en riesgo y asegurarse de que reciban el cuidado que necesitan.
        La organización trabaja en estrecha colaboración con las autoridades
        locales y nacionales, así como con otras organizaciones y grupos
        comunitarios para fomentar la conciencia sobre el bienestar de los
        animales y promover la adopción de políticas de protección animal más
        sólidas.
      </p>
      <p class="font-normal text-base leading-6 text-justify text-gray-600 dark:text-gray-200 w-full lg:w-10/12 xl:w-9/10 mt-10">
        Protección Animal Puyango también trabaja para proporcionar hogares
        temporales y permanentes a los animales rescatados. La organización
        tiene un equipo de voluntarios altamente capacitados que trabajan en
        estrecha colaboración con los veterinarios locales para brindar atención
        médica y alimentación adecuada a los animales. Además, la organización
        trabaja para educar a la comunidad sobre la importancia de la adopción y
        para fomentar la responsabilidad en el cuidado de los animales.
      </p>

      <h2 class="font-normal lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white mt-10">
        Visión
      </h2>

      <p class="font-normal text-base leading-6 text-justify text-gray-600 dark:text-gray-200 w-full lg:w-10/12 xl:w-9/10 mt-10">
        La visión de Protección Animal Puyango es crear una comunidad donde los
        animales sean valorados, respetados y protegidos, y donde la conciencia
        sobre el bienestar animal sea una prioridad compartida por todos. La
        organización aspira a trabajar en estrecha colaboración con las
        autoridades y la comunidad para lograr un cambio significativo en la
        forma en que se tratan a los animales, y para fomentar una cultura de
        compasión y cuidado hacia los seres vivos. La visión de Protección
        Animal Puyango es promover la idea de que los animales tienen derecho a
        vivir en libertad y en un ambiente seguro y saludable, y que su
        protección y bienestar son fundamentales para el bienestar general de
        nuestro planeta y de todas las especies que lo habitan.
      </p>
    </div>
    <div class="w-full lg:w-6/12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
        <!-- Nutricióm Card -->
        <div class="flex p-4 shadow-md">
          <div class="mr-6">
            <img class="mr-6" src="/public/nutrición.png" alt="Nutirción card">
          </div>
          <div class="">
            <p class="font-medium lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white">
              Nutrición
            </p>
            <p class="mt-2 font-normal text-justify text-base leading-6 text-gray-600 dark:text-gray-200">
              Agua y alimento nutricionalmente adecuado para cada especie, que
              esté disponible en cantidades y frecuencia adecuada acorde a la
              edad, estado fisiológico,necesidades especiales.
            </p>
          </div>
        </div>

        <!-- Ambiente Card -->
        <div class="flex p-4 shadow-md">
          <div class="mr-6">
            <img class="mr-6" src="/public/ambiente.png" alt="Ambiente card">
          </div>
          <div class="">
            <p class="font-medium lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white">
              Ambiente
            </p>
            <p class="mt-2 font-normal text-justify text-base leading-6 text-gray-600 dark:text-gray-200">
              Las condiciones físicas y atmosféricas a las que los animales
              están expuestos directamente. El espacio disponible, el piso, la
              atmósfera, el olor, la temperatura, el ruido y la luz o la
              densidad de otros animales.
            </p>
          </div>
        </div>

        <!-- Salud Card -->
        <div class="flex p-4 shadow-md">
          <div class="mr-6">
            <img class="mr-6" src="/public/salud.png" alt="Salud card">
          </div>
          <div class="">
            <p class="font-medium lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white">
              Salud
            </p>
            <p class="mt-2 font-normal text-justify text-base leading-6 text-gray-600 dark:text-gray-200">
              Este dominio se refiere a la atención médica veterinaria tanto
              preventiva como oportuna si el animal ha sufrido lesiones o
              enfermedades. Tienerelación con el dominio 1 y 2.
            </p>
          </div>
        </div>

        <!-- Interacciones comportamentales Card -->
        <div class="flex p-4 shadow-md">
          <div class="mr-6">
            <img class="mr-6" src="/public/interaccion.png" alt="Integración card">
          </div>
          <div class="">
            <p class="font-medium lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white">
              Interacciones comportamentales
            </p>
            <p class="mt-2 font-normal text-justify text-base leading-6 text-gray-600 dark:text-gray-200">
              Destaca los comportamientos flexibles relacionados que presentan
              en respuesta a eventos y condiciones externas variables, a menudo
              impredecibles. El enfoque principal del Dominio 4 está en la
              evidencia conductual de expresión obstaculizada y/o mejorada de
              agencia cuando los animales interactúan con (1) su entorno, (2)
              otros animales no humanos y (3) seres humanos.
            </p>
          </div>
        </div>

        <!-- Mental Card -->
        <div class="flex p-4 shadow-md">
          <div class="mr-6">
            <img class="mr-6" src="/public/mental.png" alt="Estado mental card">
          </div>
          <div class="">
            <p class="font-medium lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white">
              Estado mental
            </p>
            <p class="mt-2 font-normal text-justify text-base leading-6 text-gray-600 dark:text-gray-200">
              Dominio mental se refiere a las experiencias positivas y negativas
              que los humanos podemos generar en los animales, así como también
              se manifiesta en relacióna los dominios 1 al 4.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
}, "/home/criscm/Documentos/Proyects/Astro_Proyect/proteccionAnimal/proteccionanimal/src/components/Info.astro");

const $$Astro$6 = createAstro("https://CristhianCM.github.io");
const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Gallery;
  return renderTemplate`${maybeRenderHead($$result)}<h1 role="heading" class="text-center lg:text-4xl text-3xl lg:leading-10 dark:text-white leading-9 mt-12">
  Galleria de fotos
</h1>
<p role="contentinfo" class="font-normal text-base text-justify leading-6 text-gray-600 dark:text-gray-200 mt-6 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 te">
  Aquí encontrarás una colección de imágenes que muestran nuestro trabajo en
  acción, así como algunos de los animales que hemos tenido el privilegio de
  rescatar y cuidar. Nuestra organización está comprometida en proteger y
  preservar la vida de los animales, y esta galería de fotos refleja nuestro
  compromiso de compartir nuestra labor con la comunidad. Cada fotografía cuenta
  una historia única de rescate y rehabilitación de animales en peligro o en
  situación de riesgo, y representa una pequeña parte de nuestra dedicación a la
  protección de los animales en la región. Esperamos que estas imágenes te
  inspiren a unirte a nosotros en nuestra misión de proteger a los animales y
  promover un futuro más compasivo y justo para todas las especies.
</p>

<div class="hidden 2xl:container 2xl:mx-auto xl:flex flex-wrap items-start justify-center pt-6 pb-6 gap-6">
  <div class="flex lg:flex-col sm:flex-row flex-col items-start lg:gap-0 gap-6 lg:w-96 w-auto">
    <!--  Img 1 -->

    <div>
      <img class="rounded-lg" src="/public/gl_1.jpg" alt="foto 1">
    </div>

    <!--  Img 2 -->

    <div class="lg:mt-10">
      <img class="rounded-lg" src="/public/gl_2.jpg" alt="foto 2">
    </div>
  </div>
  <div class="flex lg:flex-col sm:flex-row flex-col items-start lg:gap-0 gap-6 lg:w-96 w-auto">
    <!--  Img 3 -->

    <div>
      <img class="rounded-lg" src="/public/gl_3.jpg" alt="foto 3">
    </div>

    <!--  Img 4 -->

    <div class="lg:mt-10">
      <img class="rounded-lg" src="/public/gl_4.jpg" alt="foto 4">
    </div>
  </div>
  <div class="flex xl:flex-col sm:flex-row flex-col items-start xl:gap-0 gap-6 xl:w-96 w-auto">
    <!--  Img 5 -->

    <div>
      <img class="rounded-lg" src="/public/gl_5.jpg" alt="foto 5">
    </div>

    <!--  Img 6 -->

    <div class="xl:mt-10">
      <img class="rounded-lg" src="/public/gl_6.jpg" alt="foto 6">
    </div>
  </div>
</div>`;
}, "/home/criscm/Documentos/Proyects/Astro_Proyect/proteccionAnimal/proteccionanimal/src/components/Gallery.astro");

const $$Astro$5 = createAstro("https://CristhianCM.github.io");
const $$Carousel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Carousel;
  return renderTemplate`${maybeRenderHead($$result)}<div class="swiper mySwiper xl:hidden mt-6 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img class="object-cover w-full h-[36rem] rounded-md" src="../../public/gm_1.jpg" alt="">
    </div>
    <div class="swiper-slide">
      <img class="object-cover w-full h-[36rem] rounded-md" src="../../public/gm_2.jpg" alt="">
    </div>
    <div class="swiper-slide">
      <img class="object-cover w-full h-[36rem] rounded-md" src="../../public/gm_3.jpg" alt="">
    </div>
    <div class="swiper-slide">
      <img class="object-cover w-full h-[36rem] rounded-md" src="../../public/gm_4.jpg" alt="">
    </div>
  </div>
  <div class="swiper-button-next text-white mr-5"></div>
  <div class="swiper-button-prev text-white ml-5"></div>
  <div class="swiper-pagination text-white"></div>
</div>

<!-- Swiper JS -->`;
}, "/home/criscm/Documentos/Proyects/Astro_Proyect/proteccionAnimal/proteccionanimal/src/components/Carousel.astro");

const $$Astro$4 = createAstro("https://CristhianCM.github.io");
const $$Cta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Cta;
  return renderTemplate`${maybeRenderHead($$result)}<div class="2xl:mx-auto dark:bg-gray-900 2xl:container md:px-20 px-4 md:py-12 py-9">
  <div class="relative rounded-md">
    <img src="/public/donateLarge.jpg" alt="city view" class="w-full h-full rounded-md object-center object-cover absolute sm:block hidden">
    <img src="/public/donateSm.jpg" alt="city view" class="w-full h-full rounded-md absolute object-center object-cover sm:hidden">
    <div class="text-xl relative bg-gradient-to-r from-green-500 to-transparent w-full h-full z-40 top-0 md:p-16 p-6 flex flex-col justify-between rounded-md">
      <div>
        <h1 class="md:text-5xl text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64">
          ¡Únete a nuestra causa!
        </h1>
        <span class="md:text-3xl text-justify text-xl font-normal md:leading-10 leading-9 text-white sm:w-auto w-64">Haz una donación y ayuda a proteger a los animales</span>
        <p class="text-lg text-justify leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-10/12 2xl:pr-12 mt-4">
          Nuestro trabajo es posible gracias al apoyo de personas y
          organizaciones comprometidas con nuestra misión. Si compartes nuestra
          pasión por proteger a los animales, te invitamos a unirte a nuestra
          causa y hacer una donación.
        </p>
      </div>
      <div class="md:mt-12 mt-20">
        <button class="text-base font-medium leading-4 text-white bg-transparent border sm:w-auto w-full rounded p-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">Donación</button>
      </div>
    </div>
  </div>
</div>`;
}, "/home/criscm/Documentos/Proyects/Astro_Proyect/proteccionAnimal/proteccionanimal/src/components/Cta.astro");

const $$Astro$3 = createAstro("https://CristhianCM.github.io");
const $$Faqs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Faqs;
  return renderTemplate`${maybeRenderHead($$result)}<div class="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
  <h1 class="text-center dark:text-white lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-normal">
    Preguntas frecuentes
  </h1>

  <div class="lg:mt-12 bg-gray-100 dark:bg-gray-800 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto rounded-md">
    <div class="flex justify-between md:flex-row flex-col">
      <div class="md:mb-0 mb-8 md:text-left text-center">
        <h2 class="font-normal dark:text-white text-xl leading-5 text-gray-800 lg:mb-2 mb-4">
          Preguntas
        </h2>
        <p class="font-normal text-justify dark:text-gray-300 text-sm leading-5 text-gray-600 md:w-8/12 md:ml-0 w-11/12 mx-auto">
          Si no encuentra su respuesta, contáctenos o deje un mensaje, estaremos
          encantados de ayudarle.
        </p>
      </div>
    </div>
  </div>

  <div class="lg:w-8/12 w-full mx-auto">
    <!-- Question 1 -->
    <hr class="w-full lg:mt-10 md:mt-12 md:mb-8 my-8">

    <div class="w-full md:px-6">
      <div id="mainHeading" class="flex justify-between items-center w-full">
        <div class="">
          <p class="flex justify-center items-center dark:text-white font-medium text-base leading-6 md:leading-4 text-gray-800">
            <span class="lg:mr-6 text-justify mr-4 dark:text-white lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-normal text-green-500">P1.</span> ¿Cuál es el proceso para adoptar un animal de Protección Animal Puyango?
          </p>
        </div>
        <button aria-label="toggler" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 rounded" data-menu>
          <img class="transform dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg" alt="toggler">
          <img class="transform dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg" alt="toggler">
        </button>
      </div>
      <div id="menu" class="hidden mt-6 w-full">
        <p class="text-base text-justify leading-6 text-gray-600 dark:text-gray-300 font-normal">
          El proceso para adoptar un animal de Protección Animal Puyango incluye
          llenar un formulario de solicitud de adopción, pasar por una
          entrevista y una visita al hogar, y pagar una tarifa de adopción.
          Nuestro objetivo es asegurarnos de que los animales sean adoptados por
          hogares amorosos y responsables, y que se brinde un ambiente seguro y
          adecuado para el animal.
        </p>
      </div>
    </div>

    <!-- Question 2 -->

    <hr class="w-full lg:mt-10 my-8">

    <div class="w-full md:px-6">
      <div id="mainHeading" class="flex justify-between items-center w-full">
        <div class="">
          <p class="flex justify-center items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800">
            <span class="lg:mr-6 text-justify dark:text-white mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-normal text-green-500">P2.</span> ¿Cómo puedo reportar un caso de crueldad o maltrato animal?
          </p>
        </div>
        <button aria-label="toggler" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 rounded" data-menu>
          <img class="transform dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg" alt="toggler">
          <img class="transform dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg" alt="toggler">
        </button>
      </div>
      <div id="menu" class="hidden mt-6 w-full">
        <p class="text-base text-justify leading-6 text-gray-600 dark:text-gray-300 font-normal">
          Si sospechas que un animal está siendo maltratado o está en situación
          de peligro, puedes contactarnos a través de nuestra línea de
          emergencia o enviar un correo electrónico a nuestro equipo de rescate.
          También puedes reportar el caso a las autoridades locales, como la
          policía o el departamento de control de animales.
        </p>
      </div>
    </div>

    <!-- Question 3 -->

    <hr class="w-full lg:mt-10 my-8">

    <div class="w-full md:px-6">
      <div id="mainHeading" class="flex justify-between items-center w-full">
        <div class="">
          <p class="flex justify-center items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800">
            <span class="lg:mr-6 text-justify dark:text-white mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-normal text-green-500">P3.</span> ¿Cómo puedo apoyar a Protección Animal Puyango si no puedo hacer una
            donación monetaria?
          </p>
        </div>
        <button aria-label="toggler" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 rounded" data-menu>
          <img class="transform dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg" alt="toggler">
          <img class="transform dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg" alt="toggler">
        </button>
      </div>
      <div id="menu" class="hidden mt-6 w-full">
        <p class="text-base text-justify leading-6 text-gray-600 dark:text-gray-300 font-normal">
          Respuesta: Hay muchas maneras de apoyar nuestra organización sin hacer
          una donación monetaria. Puedes convertirte en voluntario, difundir
          nuestro mensaje en redes sociales, asistir a nuestros eventos y
          compartir información sobre nuestras campañas de concientización.
          También puedes donar suministros y alimentos para nuestros animales, o
          incluso abrir tu hogar como hogar temporal para animales rescatados.
        </p>
      </div>
    </div>

    <!-- Question 4 -->

    <hr class="w-full lg:mt-10 my-8">

    <div class="w-full md:px-6">
      <div id="mainHeading" class="flex justify-between items-center w-full">
        <div class="">
          <p class="flex justify-center items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800">
            <span class="lg:mr-6 text-justify dark:text-white mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-normal text-green-500">P4.</span>¿Qué hace Protección Animal Puyango con las donaciones que recibe?
          </p>
        </div>
        <button aria-label="toggler" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 rounded" data-menu>
          <img class="transform dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg" alt="toggler">
          <img class="transform dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg" alt="toggler">
        </button>
      </div>
      <div id="menu" class="hidden mt-6 w-full">
        <p class="text-base text-justify leading-6 text-gray-600 dark:text-gray-300 font-normal">
          Todas las donaciones que recibimos se destinan a la atención médica,
          el rescate y la rehabilitación de animales en peligro o en situación
          de riesgo. También utilizamos las donaciones para financiar nuestras
          campañas de concientización y educación sobre el bienestar animal en
          la comunidad.
        </p>
      </div>
    </div>

    <!-- Question 5 -->

    <hr class="w-full lg:mt-10 my-8">

    <div class="w-full md:px-6">
      <div id="mainHeading" class="flex justify-between items-center w-full">
        <div class="">
          <p class="flex justify-center items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800">
            <span class="lg:mr-6 dark:text-white mr-4 text-justify lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-normal text-green-500">P5.</span>¿Qué tipo de animales rescatan y cuidan en Protección Animal
            Puyango?
          </p>
        </div>
        <button aria-label="toggler" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 rounded" data-menu>
          <img class="transform dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg" alt="toggler">
          <img class="transform dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg" alt="toggler">
        </button>
      </div>
      <div id="menu" class="hidden mt-6 w-full">
        <p class="text-base text-justify leading-6 text-gray-600 dark:text-gray-300 font-normal">
          Rescatamos y cuidamos a todo tipo de animales, desde perros y gatos
          hasta animales exóticos y de granja. Nuestro equipo de rescate está
          capacitado para manejar una amplia variedad de situaciones, y
          trabajamos en estrecha colaboración con expertos veterinarios y
          especialistas en rehabilitación de animales para brindar la mejor
          atención posible a cada animal rescatado.
        </p>
      </div>
    </div>

    <hr class="w-full lg:mt-10 my-8">
  </div>
</div>`;
}, "/home/criscm/Documentos/Proyects/Astro_Proyect/proteccionAnimal/proteccionanimal/src/components/Faqs.astro");

const $$Astro$2 = createAstro("https://CristhianCM.github.io");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${maybeRenderHead($$result)}<div class="2xl:container 2xl:mx-auto md:py-12 py-9">
  <div class="bg-gray-50 dark:bg-gray-800 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-12 gap-14 lg:px-20 lg:py-12 py-10 md:px-12 px-4">
    <!-- Correo grid Card -->
    <div class="">
      <img class="" src="/public/correo-electronico.png" alt="Correo electronico">
      <h3 class="text-xl leading-5 dark:text-white font-semibold text-gray-800 lg:mt-10 mt-8">
        Correo Electronico
      </h3>
      <p class="text-base leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
        Ponte en contacto en nuestro correo <span class="font-semibold cursor-pointer">
          customercare@gmail.com</span>
      </p>
    </div>

    <!-- Whatsap Grid Card -->

    <div class="">
      <img class="" src="/public/whatsapp.png" alt="Whatsapp">

      <h3 class="text-xl leading-5 dark:text-white font-semibold text-gray-800 lg:mt-10 mt-8">
        Número de teléfono y whatsapp
      </h3>
      <p class="text-base leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
        Mandanos un mensaje a nuestro numero <span class="font-semibold cursor-pointer">+495-589-509</span>
      </p>
    </div>

    <!-- tiktok Grid Card -->

    <div class="">
      <img class="" src="/public/tik-tok.png" alt="TikTok">

      <h3 class="text-xl leading-5 dark:text-white font-semibold text-gray-800 lg:mt-10 mt-8">
        TikTok
      </h3>
      <p class="text-base leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
        Siguenos para saber más de esta gran valor bridando su apoyo <span class="font-semibold cursor-pointer">@proteccionanimalpuyango</span>
      </p>
    </div>

    <!-- Faceboock Card -->

    <div class="">
      <img class="" src="/public//facebook.png" alt="Facebook">

      <h3 class="text-xl leading-5 dark:text-white font-semibold text-gray-800 lg:mt-10 mt-8">
        Faceboock
      </h3>
      <p class="text-base leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
        Siguenos para saber más de esta gran valor bridando su apoyo <span class="font-semibold cursor-pointer">@proteccionanimalpuyango</span>
      </p>
    </div>
  </div>
</div>`;
}, "/home/criscm/Documentos/Proyects/Astro_Proyect/proteccionAnimal/proteccionanimal/src/components/Contact.astro");

const $$Astro$1 = createAstro("https://CristhianCM.github.io");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<div class="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12">
  <div class="flex flex-col items-center justify-center">
    <div>
      <svg class="text-gray-800 dark:text-white hover:text-gray-500" width="111" height="19" viewBox="0 0 111 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        </svg><h1 class="text-center dark:text-white lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-normal">
          Protección Animal Puyango
        </h1>
      
    </div>
    <div class="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
      <a href="javascript:void(0)" class="focus:underline focus:outline-none hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white">Información</a>
      <a href="javascript:void(0)" class="focus:underline focus:outline-none hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white">Contacto</a>
      <a href="javascript:void(0)" class="focus:underline focus:outline-none hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white">Terminos y Condiciones</a>
      <a href="javascript:void(0)" class="focus:underline focus:outline-none hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white">Politicas de Privacidad</a>
    </div>

    <div class="flex items-center mt-6">
      <p class="text-base leading-4 text-gray-800 dark:text-gray-400">
        2023 <span class="font-semibold">@CrisCM</span>
      </p>
      <div class="border-l border-gray-800 pl-2 ml-2">
        <p class="text-base leading-4 text-gray-800 dark:text-gray-400">
          Inc. All rights reserved
        </p>
      </div>
    </div>
  </div>
</div>`;
}, "/home/criscm/Documentos/Proyects/Astro_Proyect/proteccionAnimal/proteccionanimal/src/components/Footer.astro");

const $$Astro = createAstro("https://CristhianCM.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Nav", $$Nav, {})}${renderComponent($$result2, "Home", $$Home, {})}${renderComponent($$result2, "Info", $$Info, {})}${renderComponent($$result2, "Gallery", $$Gallery, {})}${renderComponent($$result2, "Carousel", $$Carousel, {})}${renderComponent($$result2, "Cta", $$Cta, {})}${renderComponent($$result2, "Faqs", $$Faqs, {})}${renderComponent($$result2, "Contact", $$Contact, {})}${renderComponent($$result2, "Footer", $$Footer, {})}` })}`;
}, "/home/criscm/Documentos/Proyects/Astro_Proyect/proteccionAnimal/proteccionanimal/src/pages/index.astro");

const $$file = "/home/criscm/Documentos/Proyects/Astro_Proyect/proteccionAnimal/proteccionanimal/src/pages/index.astro";
const $$url = "/proteccionanimal";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _ };
