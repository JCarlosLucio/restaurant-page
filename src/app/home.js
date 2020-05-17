import restaurantPageBurger from '../assets/restaurant-page-burger.jpg';
const content = document.querySelector('#content');

export function createHome() {
	// create elements
	const containerFluid = document.createElement('div');
	const container = document.createElement('div');
	const triangle = document.createElement('div');
	const imgBox = document.createElement('div');
	const spanBox = document.createElement('div');

	const h1 = document.createElement('h1');
	const imgText = document.createElement('span');
	const burgerImg = document.createElement('img');

	const pText = [
		'The Restaurant Page Burger is the burger for you and me!',
		'The last time you had a cheeseburger was too long ago. Try not to drool when you think about the slightly charred, medium-rare meat nestled between soft brioche, cradled in crisp iceberg lettuce and flavour amplifying condiments. Why are you still reading this- go get a cheeseburger.'
	];
	// add classes
	containerFluid.classList.add('container-fluid');
	container.classList.add('container');
	triangle.classList.add('triangle');
	imgBox.classList.add('img-box');
	spanBox.classList.add('span-box');
	imgText.classList.add('img-text');
	// add other attributes
	h1.textContent = 'Restaurant Page'.toUpperCase();
	imgText.textContent = '100% Angus Beef';
	burgerImg.src = restaurantPageBurger;
	burgerImg.alt = 'home burger image';
	// append elements
	spanBox.append(imgText);
	imgBox.append(spanBox, burgerImg);
	container.append(h1, imgBox);
	for (const text of pText) {
		const card = document.createElement('div');
		const p = document.createElement('p');
		card.classList.add('card');
		p.textContent = text;
		card.append(p);
		container.append(card);
	}
	containerFluid.append(container, triangle);
	content.append(containerFluid);
}
