// =========================================================
// Comunidade Yeshuá — JS compartilhado entre páginas
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Menu overlay (abrir / fechar) ---------- */
  const overlay = document.getElementById('nav-overlay');
  const openers = document.querySelectorAll('[data-menu-open]');
  const closer = document.getElementById('nav-close');

  function openMenu(){
    if(!overlay) return;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu(){
    if(!overlay) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  openers.forEach(btn => btn.addEventListener('click', openMenu));
  if(closer) closer.addEventListener('click', closeMenu);
  if(overlay){
    overlay.addEventListener('click', (e) => {
      if(e.target === overlay) closeMenu();
    });
  }
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeMenu();
  });

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && revealEls.length){
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => obs.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('current-year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Generic fade-in for elements with .fade-seq ---------- */
  document.querySelectorAll('.fade-seq').forEach((el, i) => {
    el.style.animationDelay = (i * 0.12) + 's';
  });
});

/* ---------- Helper: table API (RESTful) ---------- */
async function fetchTable(table, params = {}) {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`tables/${table}${query ? '?' + query : ''}`);
  if(!res.ok) throw new Error('Erro ao carregar dados de ' + table);
  return res.json();
}

async function postTable(table, data) {
  const res = await fetch(`tables/${table}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if(!res.ok) throw new Error('Erro ao enviar dados para ' + table);
  return res.json();
}
