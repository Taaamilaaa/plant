import { refs } from './refs.js';
import { imgPath } from '../data.js';
import { listOfCards } from './goods.js';
import { heroTitleOutAnimate, heroTitleInAnimate } from './animation.js';

let current;
let currentIndex;
let prevIndex = imgPath.length - 1;
let nextIndex = 1;

//LocalStorage
window.addEventListener('load', getInfoFromLS);

const firstLoad = () => {
    localStorage.setItem('currentEl', JSON.stringify(imgPath[0].name));
    localStorage.setItem('currentIndex', JSON.stringify(0));
    current = imgPath[0].name;
    currentIndex = 0;
};

const followingLoad = () => {
    current = JSON.parse(localStorage.getItem('currentEl'));

    currentIndex = imgPath.findIndex(el => {
        if (el.name === current) {
            return el;
        } else if (currentIndex !== 0) {
            refs.heroBtnPrev.disabled = false;
        }
    });
    if (currentIndex === imgPath.length - 1) {
        refs.heroBtnNext.disabled = true;
    }
};

function getInfoFromLS(e) {
    const currentEl = JSON.parse(localStorage.getItem('currentEl'));

    if (currentEl === null) {
        firstLoad();
    } else if (currentEl !== null) {
        followingLoad();
        replaceContents();
    }
}

//кнопки вперед та назад
refs.heroBtnNext.addEventListener('click', onNextBtnClick);
refs.heroBtnPrev.addEventListener('click', onPrevBtnClick);

//next
function onNextBtnClick(e) {
    current = JSON.parse(localStorage.getItem('currentEl'));

    if (refs.heroBtnPrev.disabled === true) {
        refs.heroBtnPrev.disabled = false;
    }

    findNextIndex(e);
}

const nextBtn = current => {
    imgPath.forEach((el, index) => {
        if (el.name === current) {
            currentIndex = index + 1;
            prevIndex = currentIndex - 1;
            nextIndex = currentIndex + 1;

            if (currentIndex === imgPath.length - 1) {
                refs.heroBtnNext.disabled = true;
                nextIndex = 0;
            }

            setCurrentData(imgPath[currentIndex].name, currentIndex);
        }
    });
};

//prev
function onPrevBtnClick(e) {
    current = JSON.parse(localStorage.getItem('currentEl'));
    findNextIndex(e);
    if (refs.heroBtnNext.disabled === true) {
        refs.heroBtnNext.disabled = false;
    }
}

const prevBtn = current => {
    imgPath.forEach((el, index) => {
        if (el.name === current) {
            currentIndex = index - 1;
            prevIndex = currentIndex - 1;
            nextIndex = currentIndex + 1;

            if (currentIndex === 0) {
                refs.heroBtnPrev.disabled = true;
                prevIndex = imgPath.length - 1;
            }

            setCurrentData(imgPath[currentIndex].name, currentIndex);
        }
    });
};

function findNextIndex(e) {
    heroTitleOutAnimate();

    if (e.currentTarget === refs.heroBtnNext) {
        nextBtn(current);
      
        setTimeout(replaceContents, 1000)
    } else if (e.currentTarget === refs.heroBtnPrev) {
        prevBtn(current);
        setTimeout(replaceContents, 1000)
    }


}

//заміна контенту
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

            listOfCards(el.goods);
        }
    });
}
//записує дані елемента
function setCurrentData(title, index) {
    localStorage.setItem('currentEl', JSON.stringify(title));
    localStorage.setItem('currentIndex', JSON.stringify(index));
}
