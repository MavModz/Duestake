const navItems = document.querySelector('#nav__items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');
const loginBtn = document.querySelector('#login__btn');

openNavBtn.addEventListener('click', () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
    loginBtn.style.display = 'flex';
})

const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
    loginBtn.style.display = 'none';
}
closeNavBtn.addEventListener('click', closeNav);
