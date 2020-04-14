'use strict';

const modalOpen = document.querySelector('.modal-container__button');
const modalWindow = document.querySelector('.modal-window');
const modalClose = document.querySelector('.times');

modalOpen.addEventListener('click', function () {
    modalWindow.classList.add('animated', 'zoomIn');
    modalWindow.classList.remove('hidden', 'zoomOut');
});

modalClose.addEventListener('click', function () {
    modalWindow.classList.remove('zoomIn');
    modalWindow.classList.add('zoomOut');
    setTimeout(function () {
        modalWindow.classList.add('hidden');
    }, 500);
});




const buttons = document.querySelectorAll(".product-btn");

buttons.forEach((button) => {
    button.addEventListener('click', function(event){
        changeViewProd(event);
    });
});

function changeViewProd(event){
    const clickEvent = event.target;
    const cardTarget = event.target.parentNode;

    const product = {
        productName: cardTarget.querySelector(".product-name"),
        img: cardTarget.querySelector(".product-image"),
        button: cardTarget.querySelector(".product-btn")
    };

    const noneClicked = clickEvent.textContent;
    if (noneClicked === "Подробнее"){
        showText(product);
        clickEvent.innerText = "Отмена";
    } else {
        showImg(product, cardTarget);
        clickEvent.innerText = "Подробнее";
    }
}

function showText(product) {
    product.img.classList.add('hidden');
    const someText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
        "Aliquam, assumenda commodi dolore exercitationem nulla odio officiis pariatur quis reiciendis tenetur.";
    product.img.insertAdjacentHTML("afterend", `<div class="hidden-container">${someText}</div>`);
}

function showImg(product, cardTarget) {
    product.img.classList.remove('hidden');
    cardTarget.parentNode.querySelector('.hidden-container').remove();
}
