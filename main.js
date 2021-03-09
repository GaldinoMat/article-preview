const btnToggle = document.querySelector(".share-button");
const shareImg = document.querySelector(".share-img");
const shareBar = document.querySelector(".social-media-container");

function toggleSocialBar() {
  btnToggle.classList.toggle("share-button--active");
  shareImg.classList.toggle("share-img--active");
  shareBar.classList.toggle("social-media-container--active");
}
