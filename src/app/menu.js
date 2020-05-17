const content = document.querySelector('#content');

export function createMenu() {
	const menuGrid = document.createElement('div');
	menuGrid.classList.add('menu-grid');
	const menuItems = [
		{
			src: 'https://source.unsplash.com/sc5sTPMrVfk',
			alt: 'restaurant page burger',
			price: '$8.99',
			text:
				'A timeless classic with all of the essentials. TWO classic patties with american cheese on a bed of onion, tomato, iceberg lettuce, secret sauce in our staple brioche bread.'
		},
		{
			src: 'https://source.unsplash.com/88YAXjnpvrM',
			alt: 'meat lovers burger',
			price: '$10.99',
			text:
				'A true testament of our love for meat. TWO classic patties with american cheese and crisp Artisan Dry-Cured Bacon, on a bed of caramelized onions, sweet ventilla chiles, pickels and our special sauce in our staple brioche bread.'
		},
		{
			src: 'https://source.unsplash.com/pjGnlZTtQ-Y',
			alt: 'double trouble burger',
			price: '$12.99',
			text:
				' Prepare for TROUBLE! - Make it DOUBLE! This is getting out of hand... Now there are TWO of them! You guessed it, our classic Restaurant Page Burger but doubled. Buy them or something!'
		},
		{
			src: 'https://source.unsplash.com/b6bYaFOPfmI',
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
	content.append(menuGrid);
}