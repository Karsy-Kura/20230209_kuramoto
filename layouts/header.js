const target = document.getElementById("header__menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("header__nav");
  nav.classList.toggle('in');
});