const opneBtn = document.getElementById("modal__openBtn");
const closeBtn = document.getElementById("modal__closeBtn");
const modal = document.getElementById("modal__window");

opneBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if ( !e.target.closest(".inquery__modal__content-inner") && e.target.id !== "modal__openBtn") {
    modal.style.display = 'none';
  }
});
