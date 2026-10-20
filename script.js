document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
const mobileViewport = window.matchMedia('(max-width: 759px)');

function closeMenu({ restoreFocus = false } = {}) {
  navigation.dataset.open = 'false';
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('span').textContent = '+';
  if (restoreFocus) menuButton.focus();
}

menuButton.hidden = false;
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  navigation.dataset.open = String(!isOpen);
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.querySelector('span').textContent = isOpen ? '+' : '−';
});

navigation.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link) return;
  closeMenu();
  if (mobileViewport.matches) {
    const destination = document.querySelector(link.getAttribute('href'));
    if (destination) {
      destination.setAttribute('tabindex', '-1');
      destination.focus({ preventScroll: true });
      destination.addEventListener('blur', () => destination.removeAttribute('tabindex'), { once: true });
    }
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu({ restoreFocus: true });
  }
});

mobileViewport.addEventListener('change', () => closeMenu());

function openLinkedCase() {
  if (!window.location.hash) return;
  const target = document.getElementById(window.location.hash.slice(1));
  if (target instanceof HTMLDetailsElement) target.open = true;
}

document.querySelectorAll('a[href="#case-001"]').forEach((link) => {
  link.addEventListener('click', () => {
    document.getElementById('case-001').open = true;
  });
});
window.addEventListener('hashchange', openLinkedCase);
openLinkedCase();
