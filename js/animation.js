import { refs } from './refs.js';

function heroTitleOutAnimate() {
    const heroTitleOut = [{ transform: 'translateX(110%)' }];
    const heroTitleIn = [{ transform: 'translateX(100%)' }, { transform: 'translateX(0)' }];

    const heroTitleTiming = {
        duration: 1000,
        iterations: 1,
    };
    refs.heroTitle.animate(heroTitleOut, heroTitleTiming);
    setTimeout(() => {
        refs.heroTitle.animate(heroTitleIn, heroTitleTiming);
    }, 1000);
}

export { heroTitleOutAnimate };
