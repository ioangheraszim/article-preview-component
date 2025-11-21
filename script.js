const btn = document.querySelector(".card__share-button");
const popup = document.querySelector(".card__share-popup");

btn.addEventListener("click", () => {
  popup.classList.toggle("card__share-popup--open");
});
