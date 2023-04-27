import { refs } from './refs.js';
import { imgPath } from '../data.js';
import {listOfCards} from './goods.js'

let prevIndex = imgPath.length - 1;
let currentIndex = 0;
let nextIndex = 1;

refs.heroBtnNext.addEventListener('click', onNextBtnClick);
refs.heroBtnPrev.addEventListener('click', onPrevBtnClick);

//next
function onNextBtnClick(e) {
    const currentTitle = refs.heroTitle.textContent.trim();
    findNextIndex(currentTitle, e);
    if (refs.heroBtnPrev.disabled === true) {
        refs.heroBtnPrev.disabled = false;
    }

   
}

//prev
function onPrevBtnClick(e) {
    const currentTitle = refs.heroTitle.textContent.trim();
    findNextIndex(currentTitle, e);
    if (refs.heroBtnNext.disabled === true) {
        refs.heroBtnNext.disabled = false;
    }
}

function findNextIndex(currentTitle, e) {
    if (e.currentTarget === refs.heroBtnNext) {
        imgPath.forEach((el, index) => {
            if (el.name === currentTitle) {
                currentIndex = index + 1;
                prevIndex = currentIndex - 1;
                nextIndex = currentIndex + 1;

                if (currentIndex === imgPath.length - 1) {
                    refs.heroBtnNext.disabled = true;
                    nextIndex = 0;
                }
            }
        });


    } else if (e.currentTarget === refs.heroBtnPrev) {
        imgPath.forEach((el, index) => {
            if (el.name === currentTitle) {
                currentIndex = index - 1;
                prevIndex = currentIndex - 1;
                nextIndex = currentIndex + 1;

                if (currentIndex === 0) {
                    refs.heroBtnPrev.disabled = true;
                    prevIndex = imgPath.length - 1;
                }
            }
        });
    }
    replaceContents();

    
}

function replaceContents() {
    imgPath.forEach((el, index) => {
        if (index === currentIndex) {
            refs.heroImg.style.backgroundImage = `url(${el.path})`;
            refs.heroTitle.textContent = el.name;

            if (currentIndex > 0) {
                refs.previousName.textContent = imgPath[currentIndex - 1].name;
                refs.nextName.textContent = imgPath[nextIndex].name;
            } else {
                refs.previousName.textContent = imgPath[imgPath.length - 1].name;

                refs.nextName.textContent = imgPath[imgPath.length - 2].name;
            }

          listOfCards(el.goods)
        }
       
    });
}





