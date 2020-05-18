import restaurantPageBurger from '../assets/restaurant-page-burger.jpg';
import meatLoversBurger from '../assets/meat-lovers-burger.jpg';
import doubleTroubleBurger from '../assets/double-trouble-burger.jpg';
import doNotBurger from '../assets/do-not-burger.jpg';

const content = document.querySelector('#content');
export function createMenu() {
	content.textContent = ''; // clear content
	const menuContainerFluid = document.createElement('div');
	const menuContainer = document.createElement('div');
	menuContainerFluid.classList.add('menu-container-fluid');
	menuContainer.classList.add('menu-container');

	const h1 = document.createElement('h1');
	h1.textContent = 'MENU';

	const menuGrid = document.createElement('div');
	menuGrid.classList.add('menu-grid');
	const menuItems = [
		{
			src: restaurantPageBurger,
			alt: 'restaurant page burger',
			price: '$8.99',
			text:
				'A timeless classic with all of the essentials. TWO classic patties with american cheese on a bed of onion, tomato, iceberg lettuce, secret sauce in our staple brioche bread.'
		},
		{
			src: meatLoversBurger,
			alt: 'meat lovers burger',
			price: '$10.99',
			text:
				'A true testament of our love for meat. TWO classic patties with american cheese and crisp Artisan Dry-Cured Bacon, on a bed of caramelized onions, sweet ventilla chiles, pickels and our special sauce in our staple brioche bread.'
		},
		{
			src: doubleTroubleBurger,
			alt: 'double trouble burger',
			price: '$12.99',
			text:
				' Prepare for TROUBLE! - Make it DOUBLE! This is getting out of hand... Now there are TWO of them! You guessed it, our classic Restaurant Page Burger but doubled. Buy them or something!'
		},
		{
			src: doNotBurger,
			alt: 'do not burger',
			price: '$11.99',
			text:
				'We were so preoccupied with whether or not we could, we never stopped to think if we should! THREE classic patties with american cheese, stripes of our crisp Dry-Cured Bacon, all inside of a DOUGHNUT!'
		}
	];
	for (const item of menuItems) {
		const imgDiv = document.createElement('div');
		const textDiv = document.createElement('div');
		const img = document.createElement('img');
		const h2 = document.createElement('h2');
		const span = document.createElement('span');
		const p = document.createElement('p');

		imgDiv.classList.add('menu', 'menu-tall', 'menu-wide');
		textDiv.classList.add('menu', 'menu-wide');

		img.src = item.src;
		img.alt = item.alt;

		h2.textContent = item.alt.toUpperCase();
		span.textContent = item.price;
		p.textContent = item.text;

		imgDiv.append(img);
		textDiv.append(h2, span, p);
		menuGrid.append(imgDiv, textDiv);
	}

	menuContainer.append(h1, menuGrid);
	menuContainerFluid.append(menuContainer);
	content.append(menuContainerFluid);
}
