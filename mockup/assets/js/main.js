/* =============================================================
   JS minimal — menu mobile + année dynamique
   Aucune dépendance. Progressive enhancement.
   ============================================================= */
(function () {
  "use strict";

  // --- Menu mobile -------------------------------------------------
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.querySelector(".sr-only").textContent = open ? "Ouvrir le menu" : "Fermer le menu";
    });

    // Ferme le menu après un clic sur un lien (mobile)
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a") && nav.getAttribute("data-open") === "true") {
        nav.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    // Ferme avec la touche Échap
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.getAttribute("data-open") === "true") {
        nav.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  // --- Année dynamique du pied de page -----------------------------
  var year = document.getElementById("year");
  if (year) { year.textContent = new Date().getFullYear(); }
})();
