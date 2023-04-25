import { refs } from './refs.js';
import { imgPath } from '../data.js';

refs.heroBtnNext.addEventListener('click', onNextBtnClick);
refs.heroBtnPrev.addEventListener('click', onPrevBtnClick);

function onNextBtnClick(e) {
 if (refs.heroBtnPrev.disabled === true) {
         refs.heroBtnPrev.disabled = false;
    }

    const currentTitle = refs.heroTitle.textContent.trim();

    findNextIndex(currentTitle);
}

let prevIndex = imgPath.length - 1;
let currentIndex = 0;
let nextIndex = 1;

console.log('prevIndex:', prevIndex, 'currentIndex:', currentIndex, 'nextIndex:', nextIndex);

function findNextIndex(currentTitle) {
    //find next index
    imgPath.forEach((el, index) => {
        if (el.name === currentTitle) {
            currentIndex = index + 1;
            prevIndex = currentIndex - 1;
            nextIndex = currentIndex + 1;

            if (prevIndex === -1) {
                prevIndex = 0;
            } else if (nextIndex > imgPath.length - 1) {
                nextIndex = 0;
                refs.heroBtnNext.disabled = true;
            }
        }
    });
    //replace path of img
    imgPath.forEach((el, index) => {
        if (index === currentIndex) {
            refs.heroImg.src = el.path;
            refs.heroTitle.textContent = el.name;

            refs.previousName.textContent = imgPath[currentIndex - 1].name;
            refs.nextName.textContent = imgPath[nextIndex].name;
        }
    });
    console.log('prevIndex:', prevIndex, 'currentIndex:', currentIndex, 'nextIndex:', nextIndex);
}

function onPrevBtnClick(e) {
     
    // if (refs.heroBtnNext.disabled === true) {
    //     refs.heroBtnNext.disabled = false;
    // }
    // imgPath.forEach((el, index) => {
    //     if (index === prevIndex) {
    //         refs.heroImg.src = el.path;
    //         refs.heroTitle.textContent = el.name;

    //         prevIndex = index - 1
    //         currentIndex = index
    //         nextIndex = index + 1
            

    //                      if (prevIndex === -1) {
    //              prevIndex = imgPath.length - 1
    //              refs.heroBtnPrev.disabled = true;
    //          } 

    //     }


    // });
    //         console.log('prevIndex:', prevIndex, 'currentIndex:', currentIndex, 'nextIndex:', nextIndex);

}
