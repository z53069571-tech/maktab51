/* render.js — data.js dagi ma'lumotlarni sahifaga chiqaradi. Til o'zgarganda o'zi qayta chizadi. */
(function () {
  "use strict";
  var D = window.SCHOOL_DATA || { news: [], results: [], staff: [] };

  var UI = {
    uz: { more: "To‘liq o‘qish", close: "Yopish", months: ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentabr","oktabr","noyabr","dekabr"], fmt: "{d}-{m} {y}" },
    qq: { more: "Tolıq oqıw",    close: "Jabıw",  months: ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr"], fmt: "{d}-{m} {y}" },
    ru: { more: "Читать полностью", close: "Закрыть", months: ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"], fmt: "{d} {m} {y}" },
    en: { more: "Read more",     close: "Close",  months: ["January","February","March","April","May","June","July","August","September","October","November","December"], fmt: "{m} {d}, {y}" }
  };

  function lang() {
    var l = document.documentElement.getAttribute("lang") || "uz";
    return l === "kaa" ? "qq" : (UI[l] ? l : "uz");
  }
  function L(v) {
    if (v == null) return "";
    if (typeof v === "string") return v;
    return v[lang()] || v.uz || "";
  }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function fmtDate(s) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || "");
    if (!m) return s || "";
    var u = UI[lang()];
    return u.fmt.replace("{d}", +m[3]).replace("{m}", u.months[+m[2] - 1]).replace("{y}", m[1]);
  }
  function initials(name) {
    var w = String(name || "").trim().split(/\s+/).filter(Boolean);
    if (!w.length) return "?";
    return (w[0].charAt(0) + (w.length > 1 ? w[1].charAt(0) : "")).toUpperCase();
  }

  /* ---------- Modal (to'liq matn) ---------- */
  var dlg = null, lastFocus = null;
  function ensureDialog() {
    if (dlg) return dlg;
    dlg = el("dialog", "post-dlg");
    dlg.setAttribute("aria-labelledby", "post-dlg-title");
    dlg.innerHTML = '<div class="post-dlg-in"><button type="button" class="post-dlg-x" aria-label="">×</button>' +
      '<img class="post-dlg-img" alt="" hidden><div class="meta"><span class="date"></span></div>' +
      '<h3 id="post-dlg-title"></h3><div class="post-dlg-text"></div></div>';
    document.body.appendChild(dlg);
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
    dlg.querySelector(".post-dlg-x").addEventListener("click", function () { dlg.close(); });
    dlg.addEventListener("close", function () { document.body.classList.remove("dlg-open"); if (lastFocus) lastFocus.focus(); });
    return dlg;
  }
  function openPost(item, trigger) {
    var d = ensureDialog();
    lastFocus = trigger;
    d.querySelector(".post-dlg-x").setAttribute("aria-label", UI[lang()].close);
    d.querySelector(".date").textContent = fmtDate(item.date);
    d.querySelector(".date").hidden = !item.date;
    d.querySelector("h3").textContent = L(item.title);
    var img = d.querySelector(".post-dlg-img");
    if (item.img) { img.src = item.img; img.hidden = false; img.onerror = function () { img.hidden = true; }; } else img.hidden = true;
    var box = d.querySelector(".post-dlg-text");
    box.textContent = "";
    L(item.text).split(/\n{2,}/).forEach(function (p) { if (p.trim()) box.appendChild(el("p", null, p.trim())); });
    document.body.classList.add("dlg-open");
    if (d.showModal) d.showModal(); else d.setAttribute("open", "");
  }

  /* ---------- Yangilik / natija kartalari ---------- */
  function renderPosts(ul, items) {
    if (!ul) return;
    if (!items || !items.length) return;           // bo'sh bo'lsa, HTML dagi izoh va "yo'q" matni qoladi
    ul.textContent = "";
    items.forEach(function (it) {
      var li = el("li"), card = el("article", "card post");
      if (it.img) {
        var im = el("img", "post-img"); im.src = it.img; im.alt = ""; im.loading = "lazy";
        im.onerror = function () { im.remove(); };
        card.appendChild(im);
      }
      if (it.date) { var meta = el("div", "meta"); meta.appendChild(el("span", "date", fmtDate(it.date))); card.appendChild(meta); }
      card.appendChild(el("h3", null, L(it.title)));
      var body = L(it.text).split(/\n{2,}/)[0];
      card.appendChild(el("p", "post-sum", body));
      var btn = el("button", "btn btn-sm post-more", UI[lang()].more);
      btn.type = "button";
      btn.addEventListener("click", function () { openPost(it, btn); });
      card.appendChild(btn);
      li.appendChild(card);
      ul.appendChild(li);
    });
  }

  /* ---------- Pedagoglar: bosh harf + rasm (rasm yuklanmasa, harf qoladi) ---------- */
  function renderStaff(ul, items) {
    if (!ul || !items || !items.length) return;
    ul.textContent = "";
    items.forEach(function (p) {
      var li = el("li", "card person");
      var av = el("span", "avatar", initials(p.name));
      av.setAttribute("aria-hidden", "true");
      if (p.photo) {
        var im = el("img"); im.src = p.photo; im.alt = ""; im.loading = "lazy";
        im.onload = function () { av.classList.add("has-img"); };
        im.onerror = function () { im.remove(); };
        av.appendChild(im);
      }
      var box = el("div");
      box.appendChild(el("h3", null, p.name));
      box.appendChild(el("p", "role", L(p.role)));
      li.appendChild(av); li.appendChild(box);
      ul.appendChild(li);
    });
  }

  function renderAll() {
    renderPosts(document.querySelector("#yangiliklar .news"), D.news);
    renderPosts(document.querySelector("#natijalar .news"), D.results);
    renderStaff(document.querySelector("#pedagoglar .staff"), D.staff);
    var intro = document.querySelector('#pedagoglar [data-i="staff_intro"]');
    if (intro && D.staff && D.staff.length) { intro.removeAttribute("data-i"); intro.textContent = ""; intro.hidden = true; }
  }

  renderAll();
  /* Til o'zgarganda (script.js <html lang> ni almashtiradi) qayta chizamiz */
  var last = lang();
  new MutationObserver(function () {
    if (lang() !== last) { last = lang(); renderAll(); if (dlg && dlg.open) dlg.close(); }
  }).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
})();
