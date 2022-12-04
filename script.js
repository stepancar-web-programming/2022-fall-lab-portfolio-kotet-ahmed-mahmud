document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line func-names
  document.querySelector('#menu').onclick = function () {
    this.classList.toggle('fa-times');
    document.querySelector('header').classList.toggle('toggle');
  };
  window.addEventListener('scroll', () => {
    document.querySelector('#menu').classList.remove('fa-times');
    document.querySelector('header').classList.remove('toggle');
  });
});
