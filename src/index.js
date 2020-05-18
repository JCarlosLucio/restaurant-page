import './main.scss';
import { createNavbar } from './app/navbar';
import { createHome } from './app/home';
import { createMenu } from './app/menu';
import { createContact } from './app/contact';

createNavbar();
const homeLink = document.querySelector('#home-link');
const menuLink = document.querySelector('#menu-link');
const contactLink = document.querySelector('#contact-link');
createHome();

homeLink.addEventListener('click', createHome);
menuLink.addEventListener('click', createMenu);
contactLink.addEventListener('click', createContact);
