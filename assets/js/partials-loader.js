// Lädt HTML‑Partials in Elemente mit data-include="/partials/.."
(function(){
  if(!('fetch' in window)) return;
  document.querySelectorAll('[data-include]').forEach(async function(el){
    try{
      const url = el.getAttribute('data-include');
      const res = await fetch(url);
      if(res.ok){ el.innerHTML = await res.text(); }
    }catch(e){ console.warn('partials-loader:', e); }
  });
})();
