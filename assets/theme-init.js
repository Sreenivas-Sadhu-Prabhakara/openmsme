/* Runs blocking in <head> to apply the stored theme before first paint. */
(function () {
  try {
    var t = localStorage.getItem("omsme-theme");
    if (t === "dark" || t === "light") document.documentElement.setAttribute("data-theme", t);
  } catch (e) {}
})();
