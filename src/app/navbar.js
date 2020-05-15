const body = document.querySelector('body');

export function navbarCreate() {
	const nav = document.createElement('nav');
	nav.classList.add('navbar');
	const ul = document.createElement('ul');
	ul.classList.add('navbar-nav');
	const navLinksText = [ 'Home', 'Menu', 'Contact' ];
	for (const text of navLinksText) {
		const a = document.createElement('a');
		const li = document.createElement('li');
		a.classList.add('nav-link');
		li.classList.add('nav-item');
		a.text = text;
		li.append(a);
		ul.append(li);
	}
	nav.append(ul);
	body.prepend(nav);
}
