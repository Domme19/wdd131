document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const hamburgerButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-links');
const mainNavigation = document.querySelector('.main-header')
const headerTitle = document.querySelector('#header-title')

hamburgerButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamburgerButton.classList.toggle('open');
    headerTitle.classList.toggle('hidden')
    mainNavigation.classList.toggle('open')
    //  we need to make the paragraph disappear

});