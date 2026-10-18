/* wow.js: animatsiyalar. Muammo bo'lsa, index.html dagi shu fayl havolasini o'chirish kifoya. */
(function () {
  "use strict";
  if (!window.matchMedia || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  function rand(a, b) { return Math.round(a + Math.random() * (b - a)); }

  /* 1) Bosh sahifada uchib chiquvchi uchqunlar */
  var hero = document.getElementById("bosh");
  if (hero) {
    var box = document.createElement("div");
    box.className = "sparks";
    box.setAttribute("aria-hidden", "true");
    var n = window.innerWidth < 640 ? 10 : 18;
    for (var i = 0; i < n; i++) {
      var s = document.createElement("i");
      s.style.cssText = "--x:" + rand(2, 98) + "%;--s:" + rand(2, 5) + "px;--t:" + rand(7, 14) +
        "s;--dl:-" + rand(0, 14) + "s;--dx:" + rand(-40, 40) + "px";
      box.appendChild(s);
    }
    hero.insertBefore(box, hero.firstChild);
  }

  /* 2) Raqamlar 0 dan sanab chiqadi: <b data-count="1200" data-suffix="+">1200+</b> */
  function count(el) {
    var to = parseFloat(el.getAttribute("data-count"));
    if (isNaN(to)) return;
    var suf = el.getAttribute("data-suffix") || "", t0 = performance.now(), dur = 1500;
    function frame(t) {
      var p = Math.min(1, (t - t0) / dur);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))) + suf;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /* 3) Aylantirganda elementlar pastdan silliq chiqib keladi */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        io.unobserve(el);
        if (el.hasAttribute("data-count")) count(el);
        if (el.classList.contains("rv")) {
          el.classList.add("rv-in");
          var wait = 900 + (parseInt(el.style.getPropertyValue("--d"), 10) || 0);
          setTimeout(function () { el.classList.remove("rv", "rv-in"); el.style.removeProperty("--d"); }, wait);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

    var targets = document.querySelectorAll(
      ".now,.tile,.card,.tt-wrap,.tabs,.note,.cls-pick,.about>*,main h2,main .intro,.empty-note");
    Array.prototype.forEach.call(targets, function (el) {
      var idx = el.parentNode ? Array.prototype.indexOf.call(el.parentNode.children, el) : 0;
      el.style.setProperty("--d", (idx % 8) * 70 + "ms");
      el.classList.add("rv");
      io.observe(el);
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-count]"), function (el) { io.observe(el); });
  }

  /* 4) Kompyuterda tugmalar kursorga qarab biroz egiladi va yorqinlik kuzatadi */
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.addEventListener("pointermove", function (e) {
      var t = e.target.closest && e.target.closest(".tile");
      if (!t) return;
      var r = t.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      t.style.setProperty("--mx", (x * 100).toFixed(1) + "%");
      t.style.setProperty("--my", (y * 100).toFixed(1) + "%");
      t.style.setProperty("--ry", ((x - 0.5) * 10).toFixed(2) + "deg");
      t.style.setProperty("--rx", ((0.5 - y) * 10).toFixed(2) + "deg");
    });
    document.addEventListener("pointerout", function (e) {
      var t = e.target.closest && e.target.closest(".tile");
      if (t && !t.contains(e.relatedTarget)) { t.style.removeProperty("--rx"); t.style.removeProperty("--ry"); }
    });
  }
})();
