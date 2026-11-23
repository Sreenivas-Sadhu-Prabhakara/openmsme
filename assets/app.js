/* Open MSME — theme toggle + catalog search/filter. No dependencies. */
(function () {
  "use strict";

  // ---- theme toggle ----
  var root = document.documentElement;
  function stored() { try { return localStorage.getItem("omsme-theme"); } catch (e) { return null; } }
  function current() {
    var t = root.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function paint(btn) {
    if (!btn) return;
    var dark = current() === "dark";
    btn.textContent = dark ? "☀ Light" : "☾ Dark";
    btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  }
  var toggle = document.querySelector("[data-themer]");
  if (toggle) {
    paint(toggle);
    toggle.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("omsme-theme", next); } catch (e) {}
      paint(toggle);
    });
    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
        if (!stored()) paint(toggle);
      });
    }
  }

  // ---- catalog search / filter ----
  var search = document.querySelector("[data-search]");
  var list = document.querySelector("[data-ideas]");
  if (!list) return;
  var items = Array.prototype.slice.call(list.querySelectorAll("[data-idea]"));
  var countEl = document.querySelector("[data-count]");
  var emptyEl = document.querySelector("[data-empty]");
  var chips = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
  var activeFilter = "all";

  function apply() {
    var q = (search && search.value || "").trim().toLowerCase();
    var shown = 0;
    for (var i = 0; i < items.length; i++) {
      var el = items[i];
      var hay = el.getAttribute("data-text") || "";
      var tags = el.getAttribute("data-tags") || "";
      var okQ = !q || hay.indexOf(q) !== -1;
      var okF = activeFilter === "all" || tags.indexOf("|" + activeFilter + "|") !== -1;
      var show = okQ && okF;
      el.hidden = !show;
      if (show) shown++;
    }
    if (countEl) countEl.textContent = shown;
    if (emptyEl) emptyEl.hidden = shown !== 0;
  }

  if (search) search.addEventListener("input", apply);
  chips.forEach(function (c) {
    c.addEventListener("click", function () {
      activeFilter = c.getAttribute("data-filter");
      chips.forEach(function (x) { x.setAttribute("aria-pressed", x === c ? "true" : "false"); });
      apply();
    });
  });
  apply();
})();
