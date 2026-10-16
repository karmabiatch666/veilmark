const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();

const products = Array.isArray(window.VEILMARK_PRODUCTS) ? window.VEILMARK_PRODUCTS : [];
const grid = document.querySelector('#product-grid');
if (products.length) {
  grid.innerHTML = products.map((p) => `
    <article class="product-card">
      <div class="product-image" aria-label="${escapeHtml(p.name)} product placeholder"><span>${escapeHtml(p.mark || 'VM')}</span></div>
      <div class="product-info">
        <span class="product-tag">${escapeHtml(p.collection || 'VEILMARK')}</span>
        <h3>${escapeHtml(p.name)}</h3>
        <p>${escapeHtml(p.description || 'First Mark / 001')}</p>
        ${p.url ? `<a class="product-link" href="${safeUrl(p.url)}" target="_blank" rel="noopener">View product ↗</a>` : '<span class="product-link">Product link coming soon</span>'}
      </div>
    </article>`).join('');
} else {
  grid.innerHTML = ['CERBERUS','VIPERSIX','GHOSTWATCH'].map((name,i) => `
    <article class="product-card">
      <div class="product-image"><span>${['C','VI','G'][i]}</span></div>
      <div class="product-info"><span class="product-tag">FIRST MARK / 00${i+1}</span>
      <h3>${name} — First Piece</h3><p>Add your Printful product details in <code>products.js</code>.</p>
      <span class="product-link">Product link coming soon</span></div>
    </article>`).join('');
}
document.querySelectorAll('[data-collection]').forEach(link => {
  link.addEventListener('click', () => {
    const chosen = link.dataset.collection;
    document.querySelectorAll('.product-card').forEach(card => {
      card.hidden = !(card.textContent.toLowerCase().includes(chosen) || chosen === 'cerberus' && card.textContent.toLowerCase().includes('first piece'));
    });
  });
});
function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function safeUrl(value) {
  try { const u = new URL(value); return ['https:','http:'].includes(u.protocol) ? u.href : '#'; } catch { return '#'; }
}
