import { galleryItems } from "./gallery-items.js";

const galleryDivEl = document.querySelector(".gallery");

const markupImgCard = creatGalleryImgCardMarkup(galleryItems);

galleryDivEl.insertAdjacentHTML("beforeend", markupImgCard);
function creatGalleryImgCardMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source=${original}
            alt=${description}
            />
            </a>
            </div>`;
    })
    .join("");
}

galleryDivEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target instanceof Image) {
    const instance = basicLightbox.create(
      `<img src="${event.target.getAttribute("data-source")}">`
    );

    instance.show();
  }
});
