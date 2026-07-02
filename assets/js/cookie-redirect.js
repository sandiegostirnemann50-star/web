// Intercept clicks on privacy / cookie links and perform a smooth fade transition
(function(){
  const selectors = ['a[href*="cookie"]','a[href*="privacy"]','a[href*="datenschutz"]','[data-privacy-link]','.cookie-link'];
  function matchesAny(el){ return selectors.some(s=> el.matches(s)); }

  document.addEventListener('click', function(e){
    const a = e.target.closest('a') || e.target.closest('[data-privacy-link]');
    if(!a) return;
    const href = a.getAttribute('href') || a.dataset.href;
    if(!href) return;
    // only intercept internal links to the privacy page
    if(href.startsWith('/') || href.startsWith(window.location.origin)){
      const lc = href.toLowerCase();
      if(lc.includes('privacy') || lc.includes('datenschutz') || lc.includes('cookie')){
        e.preventDefault();
        // smooth fade out
        document.documentElement.style.transition = 'opacity 300ms ease';
        document.documentElement.style.opacity = '0';
        setTimeout(function(){
          window.location.href = href;
        }, 300);
      }
    }
  }, true);

  // If someone navigates back to site, fade in
  window.addEventListener('pageshow', function(){
    document.documentElement.style.opacity = '1';
  });
})();
