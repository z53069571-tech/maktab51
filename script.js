(function () {
  // ---------- Tarjimalar: uz, qq (qoraqalpoq), ru, en ----------
  var STR = {
    uz: {
      code: "UZ", htmllang: "uz", datefmt: "{d}-{m}",
      days_full: ["Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba","Yakshanba"],
      days_short: ["Du","Se","Ch","Pa","Ju","Sh","Ya"],
      months: ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentabr","oktabr","noyabr","dekabr"],
      brand_name: "51-sonli maktab", brand_sub: "Nukus · Boz Awil", brand_home: "51-sonli maktab, bosh sahifa",
      nav_home: "Bosh sahifa", nav_news: "Yangiliklar", nav_about: "Maktab haqida", nav_tt: "Dars jadvali", nav_staff: "Pedagoglar", nav_contact: "Aloqa",
      lang_label: "Til", bigtext: "Katta shrift", menu_open: "Menyuni ochish", menu_close: "Menyuni yopish", menu_title: "Menyu", sections_label: "Bo‘limlar",
      soc_label: "Ijtimoiy tarmoqlar (havolalar keyin qo‘shiladi)", subjects_label: "O‘qitiladigan fanlar", days_label: "Hafta kunlari",
      pl_top: "Nukus", pl_bot: "Boz Awil",
      hero_copy: "Nukus shahri, Boz Awil. Yangiliklar, dars jadvali va aloqa ma’lumotlari bir joyda: o‘quvchilar va ota-onalar maktab hayotidan xabardor bo‘lib turadi.",
      btn_tt: "Dars jadvali", btn_contact: "Aloqa", today: "Bugun",
      tile_news_sub: "Maktabdagi e’lonlar", tile_about_sub: "Umumiy ma’lumot", tile_tt_sub: "Kunlar va vaqtlar", tile_staff_sub: "Bizning jamoa", tile_contact_sub: "Manzil va telefon",
      tile_map: "Xarita", tile_map_sub: "Boz Awil, Nukus",
      badge: "Namuna",
      note_text: "Bu sayt boshlang‘ich holatda. Yangiliklar, jadval va pedagoglar ro‘yxati maktabning haqiqiy ma’lumotlari bilan almashtiriladi.",
      news_intro: "Maktab hayotidan so‘nggi e’lonlar.",
      n1_date: "Oktabr 2026", n1_title: "Birinchi chorak yakunlari", n1_text: "Chorak natijalarini sinf rahbarlari ota-onalarga taqdim etadi.",
      n2_date: "Noyabr 2026", n2_title: "Ota-onalar yig‘ilishi", n2_text: "Yig‘ilish sanasi va vaqti sinf rahbarlari orqali e’lon qilinadi.",
      n3_date: "Noyabr 2026", n3_title: "Sinflararo sport musobaqasi", n3_text: "Sinflar o‘rtasidagi musobaqa tartibi jismoniy tarbiya o‘qituvchilari tomonidan e’lon qilinadi.",
      about_intro: "O‘quvchilar, ota-onalar va pedagoglar uchun.",
      about_p1: "51-sonli maktab Nukus shahrining Boz Awil hududida joylashgan umumiy o‘rta ta’lim maktabi. Bu yerda o‘quvchilar bilim oladi, kitob o‘qiydi, sport bilan shug‘ullanadi va do‘st orttiradi.",
      about_p2: "Saytda dars jadvalini ko‘rish, yangiliklarni kuzatish va maktab bilan bog‘lanish mumkin.",
      s_lang: "Ona tili", s_lit: "Adabiyot", s_math: "Matematika", s_phys: "Fizika", s_chem: "Kimyo", s_bio: "Biologiya", s_hist: "Tarix", s_geo: "Geografiya",
      s_eng: "Ingliz tili", s_rus: "Rus tili", s_it: "Informatika", s_pe: "Jismoniy tarbiya", s_art: "Tasviriy san’at", s_music: "Musiqa",
      s_algebra: "Algebra", s_geometry: "Geometriya", s_tech: "Texnologiya", s_classhour: "Sinf soati",
      f_school: "Maktab", f_school_v: "51-sonli", f_addr: "Manzil", f_addr_v: "Nukus shahri, Boz Awil",
      f_type: "Ta’lim turi", f_type_v: "Umumiy o‘rta ta’lim", f_year: "O‘quv yili",
      tt_intro: "Kunni tanlang. Sariq nuqta bugungi kunni, sariq qator davom etayotgan darsni bildiradi.",
      tt_cap: "7-sinf · namuna jadval", th_lesson: "Dars", th_time: "Vaqt", th_subject: "Fan", badge_now: "Hozir",
      st_rest: "Bugun dam olish kuni. Darslar dushanba kuni boshlanadi.",
      st_before: "Darslar {t} da boshlanadi.",
      st_break: "Tanaffus. {n}-dars {t} da boshlanadi.",
      st_lesson: "{n}-dars davom etmoqda, {t} gacha. Fan: {s}.",
      st_done: "Bugungi darslar tugagan.",
      staff_intro: "Namuna: ism-sharif va suratlar keyin qo‘shiladi.",
      r_dir: "Maktab direktori", r_prim: "Boshlang‘ich sinflar", r_lang: "Ona tili va adabiyot", ph_name: "Ism-sharif kiritiladi",
      c_intro: "Maktab bilan bog‘lanish uchun ma’lumotlar.",
      c_tel: "Telefon", c_tel_v: "Raqam kiritiladi", c_mail: "Elektron pochta", c_mail_v: "Manzil kiritiladi",
      c_hours: "Ish vaqti", c_hours_v: "Dushanba–Shanba, 08:00–17:00 (namuna)",
      copy: "Nusxalash", copied: "Nusxalandi", selected: "Belgilandi", btn_map: "Xaritada ochish",
      foot: "© 2026 51-sonli maktab · Nukus shahri, Boz Awil"
    },
    qq: {
      code: "QQ", htmllang: "kaa", datefmt: "{d}-{m}",
      days_full: ["Dúyshembi","Siyshembi","Sárshembi","Piyshembi","Juma","Shembi","Ekshembi"],
      days_short: ["Dú","Si","Sá","Pi","Ju","Sh","Ek"],
      months: ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr"],
      brand_name: "51-sanlı mektep", brand_sub: "Nókis · Boz awıl", brand_home: "51-sanlı mektep, bas bet",
      nav_home: "Bas bet", nav_news: "Jańalıqlar", nav_about: "Mektep haqqında", nav_tt: "Sabaq kestesi", nav_staff: "Pedagoglar", nav_contact: "Baylanıs",
      lang_label: "Til", bigtext: "Úlken háripler", menu_open: "Menyudı ashıw", menu_close: "Menyudı jabıw", menu_title: "Menyu", sections_label: "Bólimler",
      soc_label: "Sociallıq tarmaqlar (siltemeler keyin qosıladı)", subjects_label: "Oqıtılatuǵın pánler", days_label: "Hápte kúnleri",
      pl_top: "Nókis", pl_bot: "Boz awıl",
      hero_copy: "Nókis qalası, Boz awıl. Jańalıqlar, sabaq kestesi hám baylanıs maǵlıwmatları bir jerde: oqıwshılar hám ata-analar mektep turmısınan xabardar bolıp turadı.",
      btn_tt: "Sabaq kestesi", btn_contact: "Baylanıs", today: "Búgin",
      tile_news_sub: "Mektepdegi xabarlar", tile_about_sub: "Ulıwma maǵlıwmat", tile_tt_sub: "Kúnler hám waqıtlar", tile_staff_sub: "Bizdiń kollektiv", tile_contact_sub: "Mánzil hám telefon",
      tile_map: "Karta", tile_map_sub: "Boz awıl, Nókis",
      badge: "Úlgi",
      note_text: "Bul sayt dáslepki jaǵdayda. Jańalıqlar, keste hám pedagoglar dizimi mekteptiń haqıyqıy maǵlıwmatları menen almastırıladı.",
      news_intro: "Mektep turmısınan sońǵı xabarlar.",
      n1_date: "Oktyabr 2026", n1_title: "Birinshi shiyrek juwmaqları", n1_text: "Shiyrek nátiyjelerin klass basshıları ata-analarǵa usınadı.",
      n2_date: "Noyabr 2026", n2_title: "Ata-analar jıynalısı", n2_text: "Jıynalıs sanası hám waqtı klass basshıları arqalı járiyalanadı.",
      n3_date: "Noyabr 2026", n3_title: "Klasslar aralıq sport jarısı", n3_text: "Klasslar arasındaǵı jarıs tártibin denetárbiya muǵallimleri járiyalaydı.",
      about_intro: "Oqıwshılar, ata-analar hám pedagoglar ushın.",
      about_p1: "51-sanlı mektep Nókis qalasınıń Boz awıl aymaǵında jaylasqan ulıwma orta bilim beriw mektebi. Bul jerde oqıwshılar bilim aladı, kitap oqıydı, sport penen shuǵıllanadı hám dos ortıradı.",
      about_p2: "Saytta sabaq kestesin kóriw, jańalıqlardı baqlaw hám mektep penen baylanısıw múmkin.",
      s_lang: "Ana tili", s_lit: "Ádebiyat", s_math: "Matematika", s_phys: "Fizika", s_chem: "Ximiya", s_bio: "Biologiya", s_hist: "Tariyx", s_geo: "Geografiya",
      s_eng: "Inglis tili", s_rus: "Rus tili", s_it: "Informatika", s_pe: "Denetárbiya", s_art: "Súwretlew óneri", s_music: "Muzıka",
      s_algebra: "Algebra", s_geometry: "Geometriya", s_tech: "Texnologiya", s_classhour: "Klass saatı",
      f_school: "Mektep", f_school_v: "51-sanlı", f_addr: "Mánzil", f_addr_v: "Nókis qalası, Boz awıl",
      f_type: "Bilim beriw túri", f_type_v: "Ulıwma orta bilim", f_year: "Oqıw jılı",
      tt_intro: "Kúndi tańlań. Sarı noqat búgingi kúndi, sarı qatar dawam etip atırǵan sabaqtı bildiredi.",
      tt_cap: "7-klass · úlgi keste", th_lesson: "Sabaq", th_time: "Waqıt", th_subject: "Pán", badge_now: "Házir",
      st_rest: "Búgin dem alıs kúni. Sabaqlar dúyshembi kúni baslanadı.",
      st_before: "Sabaqlar baslanıwı: {t}.",
      st_break: "Úzilis. Keyingi sabaq ({n}-sabaq): {t}.",
      st_lesson: "{n}-sabaq ketip atır. Pán: {s}. Tamamlanıwı: {t}.",
      st_done: "Búgingi sabaqlar tamamlanǵan.",
      staff_intro: "Úlgi: atı-jóni hám suwretler keyin qosıladı.",
      r_dir: "Mektep direktorı", r_prim: "Baslanǵısh klasslar", r_lang: "Ana tili hám ádebiyat", ph_name: "Atı-jóni kiritiledi",
      c_intro: "Mektep penen baylanısıw ushın maǵlıwmatlar.",
      c_tel: "Telefon", c_tel_v: "Nomer kiritiledi", c_mail: "Elektron pochta", c_mail_v: "Mánzil kiritiledi",
      c_hours: "Jumıs waqtı", c_hours_v: "Dúyshembi–Shembi, 08:00–17:00 (úlgi)",
      copy: "Kóshirip alıw", copied: "Kóshirildi", selected: "Belgilendi", btn_map: "Kartada ashıw",
      foot: "© 2026 51-sanlı mektep · Nókis qalası, Boz awıl"
    },
    ru: {
      code: "RU", htmllang: "ru", datefmt: "{d} {m}",
      days_full: ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"],
      days_short: ["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],
      months: ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],
      brand_name: "Школа № 51", brand_sub: "Нукус · Боз Авил", brand_home: "Школа № 51, главная страница",
      nav_home: "Главная", nav_news: "Новости", nav_about: "О школе", nav_tt: "Расписание", nav_staff: "Педагоги", nav_contact: "Контакты",
      lang_label: "Язык", bigtext: "Крупный шрифт", menu_open: "Открыть меню", menu_close: "Закрыть меню", menu_title: "Меню", sections_label: "Разделы",
      soc_label: "Социальные сети (ссылки будут добавлены позже)", subjects_label: "Изучаемые предметы", days_label: "Дни недели",
      pl_top: "Нукус", pl_bot: "Боз Авил",
      hero_copy: "Город Нукус, Боз Авил. Новости, расписание уроков и контакты в одном месте: ученики и родители всегда в курсе школьной жизни.",
      btn_tt: "Расписание", btn_contact: "Контакты", today: "Сегодня",
      tile_news_sub: "Объявления школы", tile_about_sub: "Общая информация", tile_tt_sub: "Дни и время", tile_staff_sub: "Наш коллектив", tile_contact_sub: "Адрес и телефон",
      tile_map: "Карта", tile_map_sub: "Боз Авил, Нукус",
      badge: "Образец",
      note_text: "Сайт пока в начальном виде. Новости, расписание и список педагогов будут заменены реальными данными школы.",
      news_intro: "Последние объявления из жизни школы.",
      n1_date: "Октябрь 2026", n1_title: "Итоги первой четверти", n1_text: "Классные руководители сообщат родителям результаты четверти.",
      n2_date: "Ноябрь 2026", n2_title: "Родительское собрание", n2_text: "Дата и время собрания будут объявлены через классных руководителей.",
      n3_date: "Ноябрь 2026", n3_title: "Спортивные соревнования между классами", n3_text: "Порядок соревнований между классами объявят учителя физкультуры.",
      about_intro: "Для учеников, родителей и педагогов.",
      about_p1: "Школа № 51 — общеобразовательная школа, расположенная в районе Боз Авил города Нукус. Здесь ученики получают знания, читают книги, занимаются спортом и находят друзей.",
      about_p2: "На сайте можно посмотреть расписание, следить за новостями и связаться со школой.",
      s_lang: "Родной язык", s_lit: "Литература", s_math: "Математика", s_phys: "Физика", s_chem: "Химия", s_bio: "Биология", s_hist: "История", s_geo: "География",
      s_eng: "Английский язык", s_rus: "Русский язык", s_it: "Информатика", s_pe: "Физкультура", s_art: "Изобразительное искусство", s_music: "Музыка",
      s_algebra: "Алгебра", s_geometry: "Геометрия", s_tech: "Технология", s_classhour: "Классный час",
      f_school: "Школа", f_school_v: "№ 51", f_addr: "Адрес", f_addr_v: "г. Нукус, Боз Авил",
      f_type: "Тип образования", f_type_v: "Общее среднее образование", f_year: "Учебный год",
      tt_intro: "Выберите день. Жёлтая точка — сегодняшний день, жёлтая строка — идущий урок.",
      tt_cap: "7 класс · образец расписания", th_lesson: "Урок", th_time: "Время", th_subject: "Предмет", badge_now: "Сейчас",
      st_rest: "Сегодня выходной. Уроки начнутся в понедельник.",
      st_before: "Уроки начнутся в {t}.",
      st_break: "Перемена. {n}-й урок начнётся в {t}.",
      st_lesson: "Идёт {n}-й урок, до {t}. Предмет: {s}.",
      st_done: "Сегодняшние уроки закончились.",
      staff_intro: "Образец: имена и фотографии будут добавлены позже.",
      r_dir: "Директор школы", r_prim: "Начальные классы", r_lang: "Родной язык и литература", ph_name: "Имя будет добавлено",
      c_intro: "Данные для связи со школой.",
      c_tel: "Телефон", c_tel_v: "Номер будет добавлен", c_mail: "Эл. почта", c_mail_v: "Адрес будет добавлен",
      c_hours: "Часы работы", c_hours_v: "Пн–Сб, 08:00–17:00 (образец)",
      copy: "Копировать", copied: "Скопировано", selected: "Выделено", btn_map: "Открыть на карте",
      foot: "© 2026 Школа № 51 · г. Нукус, Боз Авил"
    },
    en: {
      code: "EN", htmllang: "en", datefmt: "{d} {m}",
      days_full: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      days_short: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      months: ["January","February","March","April","May","June","July","August","September","October","November","December"],
      brand_name: "School No. 51", brand_sub: "Nukus · Boz Awil", brand_home: "School No. 51, home page",
      nav_home: "Home", nav_news: "News", nav_about: "About", nav_tt: "Timetable", nav_staff: "Teachers", nav_contact: "Contact",
      lang_label: "Language", bigtext: "Large text", menu_open: "Open menu", menu_close: "Close menu", menu_title: "Menu", sections_label: "Sections",
      soc_label: "Social networks (links will be added later)", subjects_label: "Subjects taught", days_label: "Weekdays",
      pl_top: "Nukus", pl_bot: "Boz Awil",
      hero_copy: "Nukus city, Boz Awil. News, lesson timetable and contact details in one place, so students and parents stay up to date with school life.",
      btn_tt: "Timetable", btn_contact: "Contact", today: "Today",
      tile_news_sub: "School announcements", tile_about_sub: "General information", tile_tt_sub: "Days and times", tile_staff_sub: "Our team", tile_contact_sub: "Address and phone",
      tile_map: "Map", tile_map_sub: "Boz Awil, Nukus",
      badge: "Sample",
      note_text: "This site is a starter version. News, the timetable and the teacher list will be replaced with the school’s real information.",
      news_intro: "Latest announcements from school life.",
      n1_date: "October 2026", n1_title: "First quarter results", n1_text: "Class teachers will share the quarter results with parents.",
      n2_date: "November 2026", n2_title: "Parents’ meeting", n2_text: "The date and time will be announced by class teachers.",
      n3_date: "November 2026", n3_title: "Inter-class sports competition", n3_text: "Physical education teachers will announce the competition schedule.",
      about_intro: "For students, parents and teachers.",
      about_p1: "School No. 51 is a general secondary school in the Boz Awil area of Nukus city. Students here learn, read, play sports and make friends.",
      about_p2: "On this site you can check the timetable, follow the news and get in touch with the school.",
      s_lang: "Native language", s_lit: "Literature", s_math: "Mathematics", s_phys: "Physics", s_chem: "Chemistry", s_bio: "Biology", s_hist: "History", s_geo: "Geography",
      s_eng: "English", s_rus: "Russian", s_it: "Computer science", s_pe: "Physical education", s_art: "Art", s_music: "Music",
      s_algebra: "Algebra", s_geometry: "Geometry", s_tech: "Technology", s_classhour: "Class hour",
      f_school: "School", f_school_v: "No. 51", f_addr: "Address", f_addr_v: "Nukus city, Boz Awil",
      f_type: "Education type", f_type_v: "General secondary education", f_year: "School year",
      tt_intro: "Choose a day. The yellow dot marks today, the yellow row marks the lesson in progress.",
      tt_cap: "Grade 7 · sample timetable", th_lesson: "Lesson", th_time: "Time", th_subject: "Subject", badge_now: "Now",
      st_rest: "Today is a day off. Lessons start on Monday.",
      st_before: "Lessons start at {t}.",
      st_break: "Break. Lesson {n} starts at {t}.",
      st_lesson: "Lesson {n} is in progress until {t}. Subject: {s}.",
      st_done: "Today’s lessons are over.",
      staff_intro: "Sample: names and photos will be added later.",
      r_dir: "School principal", r_prim: "Primary grades", r_lang: "Native language and literature", ph_name: "Name to be added",
      c_intro: "Details for contacting the school.",
      c_tel: "Phone", c_tel_v: "Number to be added", c_mail: "Email", c_mail_v: "Address to be added",
      c_hours: "Opening hours", c_hours_v: "Mon–Sat, 08:00–17:00 (sample)",
      copy: "Copy", copied: "Copied", selected: "Selected", btn_map: "Open on map",
      foot: "© 2026 School No. 51 · Nukus city, Boz Awil"
    }
  };
  var lang = "uz";
  function t(key) {
    var L = STR[lang];
    return (L && L[key] != null) ? L[key] : STR.uz[key];
  }
  function fmt(s, o) { return s.replace(/\{(\w+)\}/g, function (_, k) { return o[k]; }); }

  // ---------- Namuna jadval ----------
  var BELLS = [["08:00","08:45"],["08:55","09:40"],["09:50","10:35"],["10:55","11:40"],["11:50","12:35"],["12:45","13:30"],["13:40","14:25"]];
  var PLAN = [
    ["s_lang","s_math","s_eng","s_phys","s_hist","s_pe"],
    ["s_algebra","s_lit","s_bio","s_eng","s_it","s_geo"],
    ["s_lang","s_geometry","s_rus","s_hist","s_tech"],
    ["s_math","s_phys","s_lit","s_eng","s_music","s_pe"],
    ["s_algebra","s_lang","s_geo","s_bio","s_it","s_art"],
    ["s_geometry","s_rus","s_lit","s_hist","s_classhour"]
  ];

  function toMin(s) { var a = s.split(":"); return parseInt(a[0], 10) * 60 + parseInt(a[1], 10); }

  function nowTZ() {
    try {
      var parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Tashkent", weekday: "short", day: "numeric", month: "numeric",
        hour: "2-digit", minute: "2-digit", hourCycle: "h23"
      }).formatToParts(new Date());
      var o = {};
      parts.forEach(function (x) { o[x.type] = x.value; });
      var map = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6 };
      return {
        day: map[o.weekday], dom: parseInt(o.day, 10), mon: parseInt(o.month, 10) - 1,
        min: parseInt(o.hour, 10) * 60 + parseInt(o.minute, 10)
      };
    } catch (e) {
      var d = new Date();
      return { day: (d.getDay() + 6) % 7, dom: d.getDate(), mon: d.getMonth(), min: d.getHours() * 60 + d.getMinutes() };
    }
  }

  function lessonState(day, min) {
    if (day > 5) return { t: "rest" };
    var n = PLAN[day].length;
    for (var i = 0; i < n; i++) {
      var s = toMin(BELLS[i][0]), e = toMin(BELLS[i][1]);
      if (min < s) return { t: i === 0 ? "before" : "break", next: i };
      if (min < e) return { t: "lesson", i: i };
    }
    return { t: "done" };
  }

  function statusText(n, st) {
    if (st.t === "rest") return t("st_rest");
    if (st.t === "before") return fmt(t("st_before"), { t: BELLS[0][0] });
    if (st.t === "break") return fmt(t("st_break"), { n: st.next + 1, t: BELLS[st.next][0] });
    if (st.t === "lesson") return fmt(t("st_lesson"), { n: st.i + 1, t: BELLS[st.i][1], s: t(PLAN[n.day][st.i]) });
    return t("st_done");
  }

  function dateText(n) { return fmt(t("datefmt"), { d: n.dom, m: t("months")[n.mon] }); }

  var tabsEl = document.getElementById("tabs");
  var bodyEl = document.getElementById("tt-body");
  var first = nowTZ();
  var sel = first.day > 5 ? 0 : first.day;
  var tabBtns = [];

  function renderTable(n) {
    var st = lessonState(n.day, n.min);
    var html = "";
    PLAN[sel].forEach(function (key, i) {
      var live = sel === n.day && st.t === "lesson" && st.i === i;
      html += '<tr' + (live ? ' class="is-now"' : '') + '><th scope="row">' + (i + 1) + '</th><td>' +
        BELLS[i][0] + '–' + BELLS[i][1] + '</td><td>' + t(key) +
        (live ? '<span class="badge">' + t("badge_now") + '</span>' : '') + '</td></tr>';
    });
    bodyEl.innerHTML = html;
    document.getElementById("tt-cap").textContent = t("tt_cap");
    document.getElementById("tt-day").textContent = t("days_full")[sel];
  }

  function select(i, focus) {
    sel = i;
    tabBtns.forEach(function (b, k) {
      b.setAttribute("aria-selected", k === i ? "true" : "false");
      b.setAttribute("tabindex", k === i ? "0" : "-1");
    });
    if (focus) tabBtns[i].focus();
    renderTable(nowTZ());
  }

  for (var di = 0; di < 6; di++) {
    (function (i) {
      var b = document.createElement("button");
      b.type = "button";
      b.id = "tab-" + i;
      b.className = "tab" + (i === first.day ? " is-today" : "");
      b.setAttribute("role", "tab");
      b.innerHTML = '<span class="d-short"></span><span class="d-full"></span>';
      b.addEventListener("click", function () { select(i, false); });
      tabsEl.appendChild(b);
      tabBtns.push(b);
    })(di);
  }
  tabsEl.addEventListener("keydown", function (e) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    var step = e.key === "ArrowRight" ? 1 : -1;
    select((sel + step + 6) % 6, true);
    e.preventDefault();
  });

  function tick() {
    var n = nowTZ();
    document.getElementById("today-date").textContent = t("today") + " · " + t("days_full")[n.day] + ", " + dateText(n);
    document.getElementById("now-text").textContent = statusText(n, lessonState(n.day, n.min));
    renderTable(n);
  }

  // ---------- Til almashtirish ----------
  function applyLang(code) {
    if (!STR[code]) code = "uz";
    lang = code;
    document.documentElement.setAttribute("lang", t("htmllang"));
    Array.prototype.forEach.call(document.querySelectorAll("[data-i]"), function (el) {
      el.textContent = t(el.getAttribute("data-i"));
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-i-aria]"), function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i-aria")));
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-i-title]"), function (el) {
      el.setAttribute("title", t(el.getAttribute("data-i-title")));
    });
    Array.prototype.forEach.call(document.querySelectorAll(".person"), function (p) {
      var h = p.querySelector("h3"), av = p.querySelector(".avatar");
      if (h && av) av.textContent = h.textContent.trim().charAt(0).toUpperCase();
    });
    tabBtns.forEach(function (b, i) {
      b.querySelector(".d-short").textContent = t("days_short")[i];
      b.querySelector(".d-full").textContent = t("days_full")[i];
      b.setAttribute("aria-label", t("days_full")[i]);
    });
    Array.prototype.forEach.call(document.querySelectorAll(".lang-code"), function (el) { el.textContent = t("code"); });
    Array.prototype.forEach.call(document.querySelectorAll(".lang-list [data-lang]"), function (b) {
      b.setAttribute("aria-current", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
    tick();
    try { localStorage.setItem("lang51", lang); } catch (err) { /* hech narsa */ }
  }

  function closeLangs() {
    Array.prototype.forEach.call(document.querySelectorAll(".langbox"), function (box) {
      box.querySelector(".lang-list").hidden = true;
      box.querySelector(".lang-btn").setAttribute("aria-expanded", "false");
    });
  }
  function anyLangOpen() {
    return Array.prototype.some.call(document.querySelectorAll(".lang-list"), function (l) { return !l.hidden; });
  }
  Array.prototype.forEach.call(document.querySelectorAll(".langbox"), function (box) {
    var btn = box.querySelector(".lang-btn");
    var list = box.querySelector(".lang-list");
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var wasClosed = list.hidden;
      closeLangs();
      if (wasClosed) {
        list.hidden = false;
        btn.setAttribute("aria-expanded", "true");
        var cur = list.querySelector('[aria-current="true"]') || list.querySelector("button");
        if (cur) cur.focus();
      }
    });
    list.addEventListener("click", function (e) {
      var b = e.target.closest("[data-lang]");
      if (!b) return;
      applyLang(b.getAttribute("data-lang"));
      closeLangs();
      btn.focus();
    });
  });
  document.addEventListener("click", closeLangs);

  // ---------- Menyu ----------
  var menu = document.getElementById("menu");
  var burger = document.getElementById("burger");
  var closeBtn = document.getElementById("menu-close");
  function setMenu(open, refocus) {
    menu.hidden = !open;
    document.body.classList.toggle("menu-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    closeLangs();
    if (open) closeBtn.focus();
    else if (refocus) burger.focus();
  }
  burger.addEventListener("click", function () { setMenu(true, false); });
  closeBtn.addEventListener("click", function () { setMenu(false, true); });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (anyLangOpen()) { closeLangs(); return; }
    if (!menu.hidden) setMenu(false, true);
  });
  window.addEventListener("resize", function () {
    if (!menu.hidden && window.innerWidth >= 960) setMenu(false, false);
  });

  // ---------- Bo‘limlar: har biri alohida oynada ochiladi ----------
  var views = Array.prototype.slice.call(document.querySelectorAll("[data-view]"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav a, .menu-list a"));
  var IDS = ["bosh", "yangiliklar", "haqida", "jadval", "pedagoglar", "aloqa"];
  function show(id, scroll) {
    if (IDS.indexOf(id) < 0) id = "bosh";
    views.forEach(function (v) { v.hidden = v.getAttribute("data-view") !== id; });
    navLinks.forEach(function (a) {
      if (a.getAttribute("href") === "#" + id) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    document.body.classList.toggle("on-home", id === "bosh");
    if (!menu.hidden) setMenu(false, false);
    if (scroll) window.scrollTo(0, 0);
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute("href").slice(1);
    if (IDS.indexOf(id) < 0) return;
    e.preventDefault();
    show(id, true);
    try { history.replaceState(null, "", "#" + id); } catch (err) { /* hech narsa */ }
  });
  window.addEventListener("hashchange", function () { show(location.hash.slice(1), true); });
  show(location.hash.slice(1), false);

  // ---------- Katta shrift ----------
  var bigBtn = document.getElementById("bigtext");
  function setBig(on) {
    document.documentElement.classList.toggle("big", on);
    bigBtn.setAttribute("aria-pressed", on ? "true" : "false");
    try { localStorage.setItem("big51", on ? "1" : "0"); } catch (err) { /* hech narsa */ }
  }
  try { if (localStorage.getItem("big51") === "1") setBig(true); } catch (err) { /* hech narsa */ }
  bigBtn.addEventListener("click", function () {
    setBig(!document.documentElement.classList.contains("big"));
  });

  // ---------- Nusxalash ----------
  Array.prototype.forEach.call(document.querySelectorAll("[data-copy]"), function (btn) {
    btn.addEventListener("click", function () {
      var el = document.getElementById(btn.getAttribute("data-copy"));
      var txt = el.textContent.trim();
      function done(key) {
        var lbl = btn.querySelector(".lbl");
        lbl.textContent = t(key);
        setTimeout(function () { lbl.textContent = t("copy"); }, 1800);
      }
      function fallback() {
        try {
          var r = document.createRange();
          r.selectNodeContents(el);
          var s = window.getSelection();
          s.removeAllRanges();
          s.addRange(r);
          done("selected");
        } catch (err) { /* hech narsa */ }
      }
      try {
        navigator.clipboard.writeText(txt).then(function () { done("copied"); }, fallback);
      } catch (err) { fallback(); }
    });
  });

  // ---------- Ishga tushirish ----------
  select(sel, false);
  var saved = "uz";
  try { saved = localStorage.getItem("lang51") || "uz"; } catch (err) { /* hech narsa */ }
  applyLang(saved);
  setInterval(tick, 30000);
})();
      
