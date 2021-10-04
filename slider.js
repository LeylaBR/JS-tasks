const leftButton = document.querySelector("#left");
const rightButton = document.querySelector("#right");
const itemsContainer = document.querySelector(".slider");
const itemsList = document.querySelectorAll(".slider__item");


// let currentPosition = 0;

// leftButton.addEventListener("click", (event) => {
//   event.preventDefault();

//   if (currentPosition < 0) {
//     currentPosition += 102;

//     items.style.transform = `translateX(${currentPosition}px)`;
//   }
// });

// rightButton.addEventListener("click", (event) => {
//   event.preventDefault();

//   if (currentPosition > -306) {
//     currentPosition += -102;

//     items.style.transform = `translateX(${currentPosition}px)`;
//   }
// });

const minPosition = 0;
const itemWidth = getComputedStyle(itemsList[0]).width;
const sliderWidth = getComputedStyle(itemsContainer).width;
const step = parseInt(itemWidth);
const preShownItems = parseInt(sliderWidth) / step;
const maxPosition = (itemsList.length - preShownItems) * -step;
let currentPosition = 0;

rightButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (currentPosition > maxPosition) {
    currentPosition += -step;

    items.style.transform = `translateX(${currentPosition}px)`;
  }
});

leftButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (currentPosition < minPosition) {
    currentPosition += step;

    items.style.transform = `translateX(${currentPosition}px)`;
  }
});
