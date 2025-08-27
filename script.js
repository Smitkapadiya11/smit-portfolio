document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('header nav');

  if(toggle && nav){
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Toggle navigation');

    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.classList.toggle('active');
    });

    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if(nav.classList.contains('open')){
          nav.classList.remove('open');
          toggle.classList.remove('active');
          toggle.setAttribute('aria-expanded','false');
        }
      });
    });
  }

  // smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
      const id = this.getAttribute('href');
      if(id.length>1){
        e.preventDefault();
        const target = document.querySelector(id);
        if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // wave animation
  const wave = document.querySelector('.wave');
  if(wave){
    let up = true;
    setInterval(()=>{wave.style.transform=`rotate(${up?18:0}deg)`; up=!up;},900);
  }

  // fade-in cards
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('visible');
    });
  },{threshold:0.2});
  cards.forEach(card=>observer.observe(card));
});
