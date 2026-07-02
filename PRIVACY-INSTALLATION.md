Kurzanleitung: So nutzt du die neuen Partials und die Cookie‑Weiterleitung

1) Partials einbinden
 - Füge an passenden Stellen in deiner HTML (z.B. index.html) Platzhalter ein:
   <div data-include="/partials/header.html"></div>
   ...
   <div data-include="/partials/footer.html"></div>
 - Lade das Partial‑Loader Script am Ende deiner Seite:
   <script src="/assets/js/partials-loader.js"></script>

2) Cookie/Privacy Weiterleitung
 - Das Script assets/js/cookie-redirect.js fängt Klicks auf Links ab, die "privacy", "datenschutz" oder "cookie" im href haben
 - Lade das Script mit:
   <script src="/assets/js/cookie-redirect.js"></script>

Hinweis: Ich habe eine vollständige deutsche Datenschutzerklärung unter /privacy-policy.html angelegt. Wenn du willst, kann ich index.html automatisch anpassen (Header/Footer einfügen und die beiden Script‑Tags ergänzen). Sag kurz Bescheid und ich mache das.