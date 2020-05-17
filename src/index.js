import './main.scss';
import { createNavbar } from './app/navbar';
import { createHome } from './app/home';
import { createMenu } from './app/menu';

createNavbar();
const homeLink = document.querySelector('#home-link');
const menuLink = document.querySelector('#menu-link');
createHome();

homeLink.addEventListener('click', createHome);
menuLink.addEventListener('click', createMenu);
