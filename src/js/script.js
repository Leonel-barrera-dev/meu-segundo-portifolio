const hamburguer = document.querySelector('.hamburguer');
const close = document.querySelector('.close');
const ul = document.querySelector('ul');
const aparece = document.querySelector('.aparece');
const fecha = document.querySelector('.fecha');

hamburguer.addEventListener('click', () => {

  ul.classList.toggle("show");

  if (aparece.classList.contains("ri-menu-line")) {
    aparece.classList.remove('ri-menu-line')
    aparece.classList.add('ri-close-line')
  } else {
    aparece.classList.remove('ri-close-line')
    aparece.classList.add('ri-menu-line')
  }

})

ul.addEventListener('click', () => {
  ul.classList.toggle("show");
});





// hamburguer.addEventListener('click', () => {

//   ul.classList.add('show');
//   close.classList.add('hamburguer');
//   hamburguer.classList.add("hidden");

// });

// close.addEventListener('click', () => {

//   ul.classList.remove('show');
//   hamburguer.classList.remove('hidden');
//   close.classList.add('close');
// });
