const navLink = document.querySelector('.navlink');
const hamBurger = document.querySelector('.hamburger');
const ul = document.querySelector('ul');

hamBurger.addEventListener('click', () =>{
    hamBurger.classList.toggle('active');
    navLink.classList.toggle('active');
});
ul.addEventListener('click', () =>{
    navLink.classList.remove('active');
});