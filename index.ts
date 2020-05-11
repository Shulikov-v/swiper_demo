import Swiper from 'swiper';

import './index.css';
import 'swiper/css/swiper.css';


const breakpoint = window.matchMedia( '(min-width:414px)' );

let mySwiper;

const enableSwiper = function(slidesPerView: number = 6) {

    mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        slidesPerView,
        spaceBetween: 10,
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

  };

const breakpointChecker = function() {
	if (breakpoint.matches === true) {
		if (mySwiper !== undefined) mySwiper.destroy(true, true);
		return enableSwiper(6);
	} else if (breakpoint.matches === false) {
        if (mySwiper !== undefined) mySwiper.destroy(true, true);
		return enableSwiper(3);
    }
};

breakpoint.addListener(breakpointChecker);

breakpointChecker();
