const body = document.querySelector('body');

export function createNavbar() {
	const nav = document.createElement('nav');
	nav.classList.add('navbar');
	const ul = document.createElement('ul');
	ul.classList.add('navbar-nav');
	const spanTexts = [ 'Home', 'Menu', 'Contact' ];
	const iconClasses = [ 'fa-home', 'fa-utensils', 'fa-info-circle' ];
	for (let i = 0; i < 3; i++) {
		const span = document.createElement('span');
		const icon = document.createElement('i');
		const aLink = document.createElement('a');
		const li = document.createElement('li');
		span.textContent = spanTexts[i];
		span.classList.add('link-text');
		icon.classList.add('fas', iconClasses[i]);
		aLink.classList.add('nav-link');
		aLink.id = `${spanTexts[i].toLowerCase()}-link`;
		li.classList.add('nav-item');
		aLink.append(icon, span);
		li.append(aLink);
		ul.append(li);
	}
	nav.append(ul);
	body.prepend(nav);
}
