// change service__card class.
const boundaryWidth = 768;

function swicthClassName(elem, before, after)
{
  elem.classList.replace(before, after);
}

function switchServiceCardClassByWidth() {
  const windowWidth = window.innerWidth;

  if (windowWidth > boundaryWidth) {
    let elemsServiceCard = Array.from(document.getElementsByClassName("service__card"));
    let elemsServiceCardImg = Array.from(document.getElementsByClassName("service__card__img"));
    let elemsServiceCardContext = Array.from(document.getElementsByClassName("service__card__context"));

    elemsServiceCard.forEach((e) => swicthClassName(e, 'service__card', 'service__card-v'))
    elemsServiceCardImg.forEach((e) => swicthClassName(e, 'service__card__img', 'service__card-v__img'))
    elemsServiceCardContext.forEach((e) => swicthClassName(e, 'service__card__context', 'service__card-v__context'))
  }
  else if (windowWidth <= boundaryWidth) {
    let elemsServiceCard = Array.from(document.getElementsByClassName("service__card-v"));
    let elemsServiceCardImg = Array.from(document.getElementsByClassName("service__card-v__img"));
    let elemsServiceCardContext = Array.from(document.getElementsByClassName("service__card-v__context"));

    elemsServiceCard.forEach((e) => swicthClassName(e, 'service__card-v', 'service__card'))
    elemsServiceCardImg.forEach((e) => swicthClassName(e, 'service__card-v__img', 'service__card__img'))
    elemsServiceCardContext.forEach((e) => swicthClassName(e, 'service__card-v__context', 'service__card__context'))
  }
}

window.addEventListener("load", switchServiceCardClassByWidth);
window.addEventListener("resize", switchServiceCardClassByWidth);