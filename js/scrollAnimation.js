import { refs } from './refs.js';

if (refs.animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let i = 0; i < refs.animItems.length; i++) {
            const animItem = refs.animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;           

            let animItemPoint =
                animItemHeight > window.innerHeight / 3
                    ? window.innerHeight - window.innerHeight / animStart
                    : window.innerHeight - animItemHeight / animStart;
           
        

            if (
                window.pageYOffset > animItemOffset - animItemPoint &&
                window.pageYOffset < animItemOffset + animItemHeight
            ) {               
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}
