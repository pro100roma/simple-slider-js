window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    //Slider
    let slideIndex = 1,                                     //Active slide
        slides = document.querySelectorAll('.slider-item'), //Arr with Slides blocks
        prev = document.querySelector('.prev'),             //Previous arrow
        next = document.querySelector('.next'),             //Next arrow
        dotsWrap = document.querySelector('.slider-dots'),  //Wrap for dots
        dots = document.querySelectorAll('.dot');           //Array with Dots

    showSlides(slideIndex);
    function showSlides(n) {

        if(n > slides.length) {     //If slide index > count of slides then go to first slide (Infinite slider)
            slideIndex = 1;
        }
        if(n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        
        dots.forEach((item) => item.classList.remove('dot-active'));
        
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);     //Slide step. Can to use (-2), (-3) ...
    });
    next.addEventListener('click', function() {
        plusSlides(1);      //Slide step. Can to use (2), (3) ...
    });

    dotsWrap.addEventListener('click', function(e) {
        for(let i = 0; i < dots.length + 1; i++) {
            if(e.target.classList.contains('dot') && e.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });

});