document.querySelector('.hamburger').addEventListener('click', () => {
    console.log(document.querySelector('.nav-links').classList.toggle('expanded'));
  });