// Mobile nav toggle + smooth scroll + wave animation
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle'); // matches your HTML button
  const nav = document.querySelector('header nav');     // matches your HTML nav

  if(toggle && nav){
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open'); // toggle mobile nav
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // close nav when clicking a link (mobile)
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (nav.classList.contains('open')) nav.classList.remove('open');
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
