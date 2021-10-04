const openButton = document.querySelector("#openOverlay");
const body = document.body;

openButton.addEventListener("click", (event) => {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  overlayElement.addEventListener("click", (event) => {
    if (!event.target.classList.contains('text')) {
     closeElement.click();
    }
  });

  const containerElement = document.createElement("div");
  containerElement.classList.add("overlay__container");

  const closeElement = document.createElement("a");
  closeElement.classList.add("close");
  closeElement.textContent = "x";
  closeElement.href = "#";

  closeElement.addEventListener("click", (event) => {
    event.preventDefault();
    body.removeChild(overlayElement);
  });

  const textElement = document.createElement("div");
  textElement.classList.add("text");
  textElement.innerHTML = "Hello,<b class='text'>world</b>";

  overlayElement.appendChild(containerElement);
  containerElement.appendChild(closeElement);
  containerElement.appendChild(textElement);

  body.appendChild(overlayElement);
});
