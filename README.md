# 51-sonli maktab sayti

Nukus shahri, Boz Awil. To‘rt tilda: o‘zbek, qoraqalpoq, rus, ingliz.

## Fayllar

- `index.html` – sahifa tuzilishi
- `style.css` – dizayn va ranglar
- `script.js` – tillar, dars jadvali, menyu

Bitta papkada, bir xil nom bilan turishi kerak.

## GitHub Pages’ga qo‘yish

1. GitHub’da yangi repository oching (masalan `maktab51`), turi **Public**.
2. **Add file → Upload files** bosing, to‘rtala faylni yuklang, **Commit changes**.
3. **Settings → Pages** ga kiring. **Source:** Deploy from a branch. **Branch:** `main`, papka `/ (root)`. **Save**.
4. 1–2 daqiqadan keyin sayt `https://<username>.github.io/<repository>/` manzilida ochiladi.

## Nimani qayerda o‘zgartirish mumkin

Qator raqamlari shu versiya uchun. Fayl o‘zgargach siljishi mumkin.

- Qo‘ng‘iroq vaqtlari: `script.js`, 185-qator (`BELLS`)
- Dars jadvali (fanlar): `script.js`, 186-qator (`PLAN`)
- Barcha matnlar va tarjimalar: `script.js`, 3-qatordan boshlanadi (`STR`). O‘zbekcha `uz`, qoraqalpoqcha `qq` (47-qator), ruscha `ru` (90-qator), inglizcha `en` (133-qator)
- Telefon, pochta, ish vaqti: `script.js`, `c_tel_v`, `c_mail_v`, `c_hours_v`. Har til uchun alohida: 42, 85, 128, 171-qatorlar atrofida
- Ijtimoiy tarmoq havolalari: `index.html`, 95-qator (`<ul class="socials">`). Har bir `<li class="soc">` ni `<a class="soc" href="HAVOLA">` ga almashtiring
- Ranglar: `style.css`, 10-qator atrofidagi `:root`

Sahifadagi matn `index.html` da ham yozilgan (o‘zbekcha). Matnni o‘zgartirsangiz, `script.js` dagi `uz` bo‘limini ham bir xil o‘zgartiring.

## Eslatma

- Yangiliklar, jadval va pedagoglar hozircha namuna.
- Qoraqalpoq tilidagi matnni ona tilida so‘zlashuvchi odam tekshirib chiqishi kerak.
- 
