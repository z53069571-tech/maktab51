/* data.js — saytning o'zgaruvchan ma'lumotlari. FAQAT shu faylni tahrirlang.
   Matn: oddiy qator (hamma tilda bir xil) yoki { uz:"", qq:"", ru:"", en:"" }.
   Tarjima yozilmagan til uchun o'zbekcha ko'rsatiladi.
   Sana: "2026-10-15" (yil-oy-kun).  Rasm: fayl nomi (masalan "img/yangilik1.jpg") yoki bo'sh qoldiring. */

window.SCHOOL_DATA = {

  /* ---------- DARS JADVALI ----------
     bells: qo'ng'iroq vaqtlari [boshlanishi, tugashi], 1-darsdan boshlab.
     grades: nechta sinf (1 dan shu raqamgacha).  letters: sinf harflari.
     classes: har sinf uchun 6 kun (dushanba...shanba), har kunda fanlar tartib bilan.
       Fan: tayyor kalit (s_math, s_lang, s_lit, s_algebra, s_geometry, s_phys, s_chem, s_bio, s_hist,
            s_geo, s_eng, s_rus, s_it, s_pe, s_art, s_music, s_tech, s_classhour)
            yoki oddiy matn ("Chizmachilik") yoki { uz:"", qq:"", ru:"", en:"" }.
       Dam olinadigan (darssiz) kun uchun [] yozing.
     Yangi sinf: "7-A" blokini nusxalab, nomini ("5-B") va fanlarini o'zgartiring.
     Jadvali yozilmagan sinfda "jadval hali kiritilmagan" chiqadi. */
  timetable: {
    bells: [["08:00","08:45"],["08:55","09:40"],["09:50","10:35"],["10:55","11:40"],["11:50","12:35"],["12:45","13:30"],["13:40","14:25"]],
    grades: 11,
    letters: ["A", "B", "D"],
    classes: {
      "7-A": [
        ["s_lang","s_math","s_eng","s_phys","s_hist","s_pe"],
        ["s_algebra","s_lit","s_bio","s_eng","s_it","s_geo"],
        ["s_lang","s_geometry","s_rus","s_hist","s_tech"],
        ["s_math","s_phys","s_lit","s_eng","s_music","s_pe"],
        ["s_algebra","s_lang","s_geo","s_bio","s_it","s_art"],
        ["s_geometry","s_rus","s_lit","s_hist","s_classhour"]
      ]
    }
  },

  /* ---------- YANGILIKLAR (eng yangisini tepaga yozing) ---------- */
  news: [
    {
      date: "2026-10-15",
      img: "",
      title: { uz: "Ustozlar kuni bayrami", qq: "Ustazlar kúni bayramı", ru: "Праздник Дня учителя", en: "Teachers’ Day celebration" },
      text:  {
        uz: "Maktabimizda Ustozlar kuni munosabati bilan bayram tadbiri o‘tkaziladi.\n\nO‘quvchilar pedagoglarga tabrik va sovg‘alar tayyorlaydi. Tadbir soat 10:00 da maktab zalida boshlanadi.",
        qq: "Mektebimizde Ustazlar kúni munasábeti menen bayram sharası ótkeriledi.\n\nOqıwshılar pedagoglarǵa quwanısh hám sawǵalar tayarlaydı. Shara saat 10:00 de mektep zalında baslanadı.",
        ru: "В нашей школе пройдёт праздничное мероприятие ко Дню учителя.\n\nУченики подготовят для педагогов поздравления и подарки. Начало в 10:00 в актовом зале.",
        en: "Our school will hold a celebration for Teachers’ Day.\n\nStudents will prepare greetings and gifts for their teachers. The event starts at 10:00 in the assembly hall."
      }
    },
    {
      date: "2026-10-01",
      img: "",
      title: { uz: "Yangi o‘quv yili davom etmoqda", qq: "Jańa oqıw jılı dawam etpekte", ru: "Новый учебный год продолжается", en: "The new school year is underway" },
      text:  {
        uz: "Yangi o‘quv yili boshlandi. Dars jadvali saytning “Dars jadvali” bo‘limida.",
        qq: "Jańa oqıw jılı baslandı. Sabaq kestesi saytıń «Sabaq kestesi» bóliminde.",
        ru: "Новый учебный год начался. Расписание уроков — в разделе «Расписание».",
        en: "The new school year has begun. The lesson timetable is in the “Timetable” section."
      }
    }
  ],

  /* ---------- NATIJALAR ---------- */
  results: [
    /* Namuna (kerak bo'lmasa o'chiring):
    {
      date: "2026-05-20",
      title: { uz: "Fan olimpiadasida 1-o‘rin", ru: "1 место на олимпиаде", en: "1st place at the olympiad" },
      text:  { uz: "9-sinf o‘quvchisi shahar olimpiadasida g‘olib bo‘ldi.", ru: "Ученик 9 класса победил на городской олимпиаде.", en: "A 9th-grade student won the city olympiad." }
    }
    */
  ],

  /* ---------- PEDAGOGLAR ----------
     name: ism-sharif.  role: lavozim/fan.  photo: rasm fayli (bo'sh bo'lsa — bosh harflar ko'rinadi). */
  staff: [
    { name: "Ism Familiya", role: { uz: "Maktab direktori",       qq: "Mektep direktorı",        ru: "Директор школы",            en: "School principal" }, photo: "" },
    { name: "Ism Familiya", role: { uz: "Boshlang‘ich sinflar",   qq: "Baslanǵısh klasslar",     ru: "Начальные классы",          en: "Primary grades" },    photo: "" },
    { name: "Ism Familiya", role: { uz: "Ona tili va adabiyot",   qq: "Ana tili hám ádebiyat",   ru: "Родной язык и литература",  en: "Native language and literature" }, photo: "" },
    { name: "Ism Familiya", role: { uz: "Matematika",             qq: "Matematika",              ru: "Математика",                en: "Mathematics" },       photo: "" },
    { name: "Ism Familiya", role: { uz: "Ingliz tili",            qq: "Inglis tili",             ru: "Английский язык",           en: "English" },           photo: "" },
    { name: "Ism Familiya", role: { uz: "Informatika",            qq: "Informatika",             ru: "Информатика",               en: "Computer science" },  photo: "" }
  ]
};
