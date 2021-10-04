const blockNumber = document.querySelector(".block__controls-number");
const blockColor = document.querySelector(".block__controls-color");
const blockContainer = document.querySelector(".blocks");

const createMarkup = (number) => {
  let markup = "";

  for (let i = 0; i < number; i++) {
    const block = document.createElement("div");
    block.classList = "item";
    block.innerText = i + 1;

    markup += block.outerHTML;
  }
  return markup;
};

blockNumber.addEventListener("change", (event) => {
  const number = event.target.value;
  const markup = createMarkup(number);

  blockContainer.innerHTML = markup;
});

const colorTheBlock = (block, color) => {
    block.style.backgroundColor = color;
}

let changed = false;

blockColor.addEventListener("change", event =>{
    const color = event.target.value;
    const items = blockContainer.querySelectorAll(".item");

    changed = !changed;

    for (let i = 0; i < items.length; i++) {
        const currentBlock = items[i];
        const blockQuantity = i + 1;
        colorToApply = "";

        if (changed) {
            colorToApply = blockQuantity  % 2 !== 0 ? color : "#fff";
          } else {
            colorToApply = blockQuantity % 2 === 0 ? color : "#fff";
          }
      
          colorTheBlock(currentBlock, colorToApply);
        }
    
});
