// =========================================================
// Comunidade Yeshuá — JS da página inicial
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Partículas doradas flutuantes ---------- */
  const field = document.getElementById('particles');
  if(field){
    const total = 34;
    for(let i=0; i<total; i++){
      const p = document.createElement('span');
      p.className = 'particle';
      const left = Math.random()*100;
      const size = 3 + Math.random()*4;
      const duration = 10 + Math.random()*14;
      const delay = Math.random()*14;
      p.style.left = left + '%';
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.animationDuration = duration + 's';
      p.style.animationDelay = delay + 's';
      field.appendChild(p);
    }
  }

  /* ---------- Clique no coração abre o menu ---------- */
  const heart = document.getElementById('heart-trigger');
  const overlay = document.getElementById('nav-overlay');
  if(heart && overlay){
    heart.addEventListener('click', () => {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  /* ---------- Scroll suave ao clicar na seta ---------- */
  const cue = document.querySelector('.scroll-cue');
  if(cue){
    cue.addEventListener('click', () => {
      document.getElementById('welcome')?.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
