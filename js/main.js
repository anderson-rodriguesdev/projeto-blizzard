"use strict";var btnOpenModal=document.querySelector(".js-open-modal"),btnCloseModal=document.querySelector(".js-close-modal"),overlay=document.querySelector(".js-overlay"),progressSlide=(btnOpenModal.addEventListener("click",function(e){e.preventDefault(),document.documentElement.classList.add("show-modal")}),btnCloseModal.addEventListener("click",function(){document.documentElement.classList.remove("show-modal")}),overlay.addEventListener("click",function(){document.documentElement.classList.remove("show-modal")}),document.querySelector(".js-progress")),slide_thumbnail=new Swiper(".slide-thumbnail",{slidesPerView:5,direction:"vertical",spaceBetween:20,watchSlidesProgress:!0,breakpoints:{290:{direction:"horizontal"},992:{direction:"vertical"}}}),slide_hero=new Swiper(".slide-principal",{effect:"fade",thumbs:{swiper:slide_thumbnail},autoplay:{delay:5e3,disableOnInteraction:!1},on:{init:function(){progressSlide.classList.remove("animate"),progressSlide.classList.remove("active"),progressSlide.classList.add("animate"),progressSlide.classList.add("active")},slideChangeTransitionStart:function(){progressSlide.classList.remove("animate"),progressSlide.classList.remove("active"),progressSlide.classList.add("active")},slideChangeTransitionEnd:function(){progressSlide.classList.add("animate")}}}),clean=function(){btnMenu.forEach(function(e){e.classList.remove("active")}),menuSite.forEach(function(e){e.classList.remove("active"),e.addEventListener("mouseleave",function(){e.classList.remove("active"),btnMenu.forEach(function(e){e.classList.remove("active")})})})},ativarIndex=function(e,t){clean(),e.classList.add("active"),menuSite[t].classList.add("active")},btnMenu=document.querySelectorAll(".js-btn-menu"),menuSite=document.querySelectorAll(".js-menu"),allFilters=(btnMenu.forEach(function(t,s){t.addEventListener("click",function(e){e.preventDefault(),ativarIndex(t,s)})}),document.querySelectorAll(".js-nav-games li a")),tabPane=document.querySelectorAll(".tab-pane-games");allFilters.forEach(function(t,s){t.addEventListener("click",function(e){e.preventDefault(),allFilters.forEach(function(e){e.classList.remove("active")}),tabPane.forEach(function(e){e.classList.remove("active")}),tabPane[s].classList.add("active"),t.classList.add("active")})});