import"https://unpkg.com/swiper/swiper-bundle.min.js";$(document).ready(function(){$(".nav-toggler").each(function(e,t){var l=$(t).data("target");$(t).on("click",function(){$(l).animate({height:"toggle"})})})});function r(){const e=document.getElementById("header");this.scrollY>=100?e.classList.add("scroll-header"):e.classList.remove("scroll-header")}window.addEventListener("scroll",r);new Swiper(".mySwiper",{spaceBetween:30,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});let n=document.querySelectorAll("[data-menu]");for(let e=0;e<n.length;e++){let t=n[e];t.addEventListener("click",function(){let l=t.parentElement.parentElement,i=t.querySelectorAll("img"),a=l.querySelector("#menu");l.querySelector("#mainHeading>div>p").classList.toggle("font-semibold"),a.classList.toggle("hidden"),i[0].classList.toggle("rotate-180")})}
