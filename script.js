const navToggle = document.querySelector('.nav-toggle');
const siteMenu = document.querySelector('#site-menu');

if (navToggle && siteMenu) {
  navToggle.addEventListener('click', () => {
    const open = siteMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  siteMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const form = document.querySelector('#contact-form');
const formNote = document.querySelector('#form-note');

if (form && formNote) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    formNote.textContent = `Gracias${name ? `, ${name}` : ''}. Tu solicitud quedó preparada para el siguiente paso.`;
    formNote.classList.add('success');
    form.reset();
  });
}

document.querySelector('#year').textContent = new Date().getFullYear();
