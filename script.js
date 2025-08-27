document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('header nav');

  if(toggle && nav){
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Toggle navigation');

    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open'); // toggle mobile nav
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.classList.toggle('active'); // optional: animate bars
    });

    // close nav when clicking a link (mobile)
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
          toggle.classList.remove('active');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      const id = this.getAttribute('href');
      if (id.length > 1) {
        e.preventDefault();
        const target = document.querySelector(id);
        if (target) target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // tiny wave animation on the emoji
  const wave = document.querySelector('.wave');
  if (wave) {
    let up = true;
    setInterval(() => {
      wave.style.transform = `rotate(${up ? 18 : 0}deg)`;
      up = !up;
    }, 900);
  }
});
