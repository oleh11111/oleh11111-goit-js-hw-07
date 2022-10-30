import { galleryItems } from "./gallery-items.js";

const galleryUlEl = document.querySelector(".gallery");

const markupImgCard = creatGalleryImgCardMarkup(galleryItems);

galleryUlEl.insertAdjacentHTML("beforeend", markupImgCard);
function creatGalleryImgCardMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src=${preview} alt=${description}/>
      </a>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
