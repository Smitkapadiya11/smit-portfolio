// Simple mobile nav toggle + smooth scroll and small wave animation
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // close nav when clicking a link (mobile)
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', (e) => {
      if (nav.classList.contains('open')) nav.classList.remove('open');
    });
  });

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
