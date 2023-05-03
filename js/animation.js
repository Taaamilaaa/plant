import { refs } from './refs.js';

function heroTitleOutAnimate() {
    const heroTitleOut = [{ transform: 'translateX(110%)' }];
    const heroTitleIn = [{ transform: 'translateX(100%)' }, { transform: 'translateX(0)' }];

    const heroTitleTiming = {
        duration: 1000,
        iterations: 1,
    };


    const heroImgReplaceOut = [{ transform: 'translateX(-110%)' }];
    const heroImgReplaceIn = [{ transform: 'translateY(-100%)' }, { transform: 'translateY(0)' }
    ];
    const heroImgReplaceTiming = {
        duration: 1000,
        iterations: 1,
    };


    refs.heroTitle.animate(heroTitleOut, heroTitleTiming);
    refs.heroImg.animate(heroImgReplaceOut, heroImgReplaceTiming);

    setTimeout(() => {
        refs.heroTitle.animate(heroTitleIn, heroTitleTiming);
refs.heroImg.animate(heroImgReplaceIn, heroImgReplaceTiming);
    }, 1000);   
    
}

function heroTitleInAnimate() {
    // //     console.log("object");
    // setTimeout(() => {
    //     const heroTitleIn = [{ transform: 'translate(-100%)' }, { transform: 'translate(100%)' }];
    //     const heroTitleTiming = {
    //         duration: 1000,
    //         iterations: 1,
    //     };
    //     refs.heroTitle.animate(heroTitleIn, heroTitleTiming);
    // }, 500);
}
export { heroTitleInAnimate, heroTitleOutAnimate };
