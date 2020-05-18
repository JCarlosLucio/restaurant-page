const content = document.querySelector('#content');

export function createContact() {
	content.textContent = ''; // clear content
	const contactContainerFluid = document.createElement('div');
	const contactContainer = document.createElement('div');
	const triangle = document.createElement('div');

	contactContainerFluid.classList.add('contact-container-fluid');
	contactContainer.classList.add('contact-container');
	triangle.classList.add('triangle');

	const h1 = document.createElement('h1');
	const contactGrid = document.createElement('div');

	contactGrid.classList.add('contact-grid');
	h1.textContent = 'CONTACT';

	// First div with contact class
	const contactFirst = document.createElement('div');
	contactFirst.classList.add('contact');

	const h2First = document.createElement('h2');
	h2First.textContent = 'About us...';

	// contactFirst.append(h2First);

	const infoList = [
		{
			h3: 'Opening Hours',
			p: '-- MON - SAT -- 1PM - 12AM'
		},
		{
			h3: 'Reservations',
			p: '(012)-345-6789'
		},
		{
			h3: 'Address',
			p: '123 Restaurant Page Ave, Flavor Town, Burger 80085, Awesome Country'
		}
	];
	for (const info of infoList) {
		const div = document.createElement('div');
		const h3 = document.createElement('h3');
		const p = document.createElement('p');

		div.classList.add('info');

		h3.textContent = info['h3'];
		p.textContent = info['p'];

		div.append(h3, p);
		contactFirst.append(div);
	}

	const aFirst = document.createElement('a');
	aFirst.href = 'https://unsplash.com/@amir_v_ali';
	aFirst.textContent = 'Awesome Burger Photos by Amirali Mirhashemian';

	const social = document.createElement('div');
	social.classList.add('social');

	const iconClasses = [ 'fa-facebook-square', 'fa-twitter-square', 'fa-instagram-square' ];
	for (const iconClass of iconClasses) {
		const icon = document.createElement('i');
		icon.classList.add('fab', iconClass);
		social.append(icon);
	}

	contactFirst.prepend(h2First);
	contactFirst.append(aFirst, social);

	// Second div with contact class
	const contactSecond = document.createElement('div');
	contactSecond.classList.add('contact');

	const h2Second = document.createElement('h2');
	h2Second.textContent = 'Contact us';

	const form = document.createElement('form');
	const placeholderTexts = [ ' Your name*', ' Your mail*', ' Subject*' ];
	for (const text of placeholderTexts) {
		const input = document.createElement('input');
		input.type = 'text';
		input.placeholder = text;
		form.append(input);
	}
	const textArea = document.createElement('textarea');
	textArea.cols = 30;
	textArea.rows = 10;
	textArea.placeholder = ' Your message*';
	const button = document.createElement('button');
	button.textContent = 'Submit';

	form.append(textArea, button);

	const aSecond = document.createElement('a');
	aSecond.href = 'https://github.com/JCarlosLucio/restaurant-page';
	aSecond.textContent = 'by Lucio';
	const githubIcon = document.createElement('i');
	githubIcon.classList.add('fab', 'fa-github-alt');
	aSecond.append(githubIcon);

	contactSecond.append(h2Second, form, aSecond);

	// Append to contactGrid
	contactGrid.append(contactFirst, contactSecond);
	// Append to contactContainer
	contactContainer.append(h1, contactGrid);
	// Append to contactContainerFluid
	contactContainerFluid.append(contactContainer, triangle);
	// Append to content
	content.append(contactContainerFluid);
}
