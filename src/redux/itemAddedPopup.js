const popupElement = () => {
  const popup = document.createElement("div");
  popup.innerHTML = "Item added to cart!";
  popup.classList.add("popup");
  document.querySelector("body").append(popup);
};

const deletePopup = () => {
  const popup = document.querySelector(".popup");
  document.removeChild(popup);
};
export const itemAddedPopup = () => {
  popupElement();
  setTimeout(deletePopup(), 2500);
};
