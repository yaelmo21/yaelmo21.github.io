if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js');
}


AOS.init();

const swiper = new Swiper(".mySwiper", {
  zoom: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperClients = new Swiper(".mySwiperClients", {
  zoom: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperCard = new Swiper(".mySwiperCard", {
  effect: "cards",
  enabled: false,
  grabCursor: true,
});

const myOffcanvas = document.getElementById("offcanvasNavbar");
const bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);

const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

const es = document.getElementById("es");
const en = document.getElementById("en");
let selectLanguage = "es";

const userLang = navigator.language || navigator.userLanguage;
if (!userLang.includes("es")) {
  this.languageEN();
} else {
  this.languageES();
}

function languageEN() {
  selectLanguage = "en";
  const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (darkMode) {
    en.classList.add("active", "text-white");
    es.classList.remove("active", "text-white");
  } else {
    en.classList.add("active");
    es.classList.remove("active");
  }
  const greetings = document.getElementById("greetings");
  const name = document.getElementById("name");
  const specialty = document.getElementById("specialty");
  const aboutTitle = document.getElementById("about-title");
  const whoAm = document.getElementById("who-am");
  const description = document.getElementById("description");
  const history = document.getElementById("history");
  const activities = document.getElementById("activities");
  const skillTitle = document.getElementById("skills-title");
  const lastesProyectsTitle = document.getElementById("lastes-proyects-title");
  const descriptionTeleimagenologia = document.getElementById(
    "description-teleimm"
  );
  const shows = document.getElementsByClassName("show-img");
  const goSite = document.getElementsByClassName("go-site");
  const descriptionSc = document.getElementById("description-sc");
  const comming = document.getElementsByClassName("coming");
  const contactTitle = document.getElementById("contac-title");
  const cvHref = document.getElementById("donwload-cv");
  const cvText = document.getElementById("text-cv");

  const navHome = document.getElementById("nav_home");
  const navAbout = document.getElementById("nav_about");
  const navContact = document.getElementById("nav_contact");
  const latestProyect = document.getElementById("nav_latest_proyects");
  const navCertification = document.getElementById("nav_certifications");
  const certificationsTitle = document.getElementById("certification-title");
  const navSkills = document.getElementById("nav_skills");

  navHome.innerHTML = '<i class="fas fa-home"></i> Home';
  navAbout.innerHTML = '<i class="fas fa-user"></i> About Me';
  navSkills.innerHTML = '<i class="fas fa-box-open"></i> Skills';
  navCertification.innerHTML = '<i class="fas fa-award"></i> Certifications';
  latestProyect.innerHTML =
    '<i class="fas fa-clipboard-list"></i> Latest Projects';
  navContact.innerHTML = '<i class="fas fa-mail-bulk"></i> Contact me';
  greetings.innerHTML = "Hi !";
  name.innerHTML = "I am Yael Ruiz Pucheta";
  specialty.innerHTML = "Web Developer";
  aboutTitle.innerHTML = "About Me";
  whoAm.innerHTML = "Who am I?";
  description.innerHTML =
    "I am Yael Ruiz Pucheta a Web Developer and a passionate for technology.";
  history.innerHTML =
    "I Work as a freelance in Xalapa Veracruz,Mexico. I began programming in <strong>2015.</strong>";
  activities.innerHTML =
    "I create customised solutions for small business and entrepreneurs that whant to join to digital world, to bring their products and services to innovation era.";
  skillTitle.innerHTML = "Skills";
  lastesProyectsTitle.innerHTML = "Latest Projects";
  descriptionTeleimagenologia.innerHTML = "A social network medical";
  descriptionSc.innerHTML = "Manager System  of customer for accountant public";
  cvHref.href = "YaelRuiz_CV_EN.pdf";
  cvText.innerHTML = "Download CV";
  certificationsTitle.innerHTML = "Certifications";

  contactTitle.innerHTML = "Contact me";
  for (let item of shows) {
    item.innerHTML = "Show";
  }

  for (let item of goSite) {
    item.innerHTML = "Go site";
  }

  for (let item of comming) {
    item.innerHTML = "Coming soon";
  }
}

function languageES() {
  selectLanguage = "es";
  const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (darkMode) {
    en.classList.remove("active", "text-white");
    es.classList.add("active", "text-white");
  } else {
    en.classList.remove("active");
    es.classList.add("active");
  }
  const greetings = document.getElementById("greetings");
  const name = document.getElementById("name");
  const specialty = document.getElementById("specialty");
  const aboutTitle = document.getElementById("about-title");
  const whoAm = document.getElementById("who-am");
  const description = document.getElementById("description");
  const history = document.getElementById("history");
  const activities = document.getElementById("activities");
  const skillTitle = document.getElementById("skills-title");
  const lastesProyectsTitle = document.getElementById("lastes-proyects-title");
  const descriptionTeleimagenologia = document.getElementById(
    "description-teleimm"
  );
  const shows = document.getElementsByClassName("show-img");
  const goSite = document.getElementsByClassName("go-site");
  const descriptionSc = document.getElementById("description-sc");
  const comming = document.getElementsByClassName("coming");
  const contactTitle = document.getElementById("contac-title");
  const cvHref = document.getElementById("donwload-cv");
  const cvText = document.getElementById("text-cv");

  const navHome = document.getElementById("nav_home");
  const navAbout = document.getElementById("nav_about");
  const navContact = document.getElementById("nav_contact");
  const latestProyect = document.getElementById("nav_latest_proyects");
  const navCertification = document.getElementById("nav_certifications");
  const navSkills = document.getElementById("nav_skills");
  const certificationsTitle = document.getElementById("certification-title");

  navHome.innerHTML = '<i class="fas fa-home"></i> Inicio';
  navAbout.innerHTML = '<i class="fas fa-user"></i> Sobre mi';
  navSkills.innerHTML = '<i class="fas fa-box-open"></i> Habilidades';
  navCertification.innerHTML = '<i class="fas fa-award"></i> Certificaciones';
  latestProyect.innerHTML =
    '<i class="fas fa-clipboard-list"></i> Últimos Proyectos';
  navContact.innerHTML = '<i class="fas fa-mail-bulk"></i> Contáctame';
  greetings.innerHTML = "Hola !";
  name.innerHTML = "Soy Yael Ruiz Pucheta";
  specialty.innerHTML = "Desarrollador Web";
  aboutTitle.innerHTML = "Sobre mi";
  whoAm.innerHTML = "¿Quien soy?";
  description.innerHTML =
    "Soy Yael Ruiz Pucheta un apasionado por la tecnología y un Web Developer.";
  history.innerHTML =
    "Trabajo como Freelance en la ciudad de Xalapa, Veracruz, México. Inicie en el mundo de la programación en el año <strong>2015.</strong>";
  activities.innerHTML =
    "Realizo soluciones tecnológicas a pequeñas empresas y emprendedores que desean unirse al mundo digital, convirtiendo su visión en un gran producto o servicio.";
  skillTitle.innerHTML = "Habilidades";
  lastesProyectsTitle.innerHTML = "Últimos proyectos";
  descriptionTeleimagenologia.innerHTML = "Red social médica.";
  descriptionSc.innerHTML =
    "Sistema manejador de cartera de clientes para contadores públicos";
  cvHref.href = "YaelRuiz_CV_ES.pdf";
  cvText.innerHTML = "Descargar CV";
  certificationsTitle.innerHTML = "Certificaciones";

  contactTitle.innerHTML = "Contáctame";
  for (let item of shows) {
    item.innerHTML = "Ver";
  }

  for (let item of goSite) {
    item.innerHTML = "Ir al sitio";
  }

  for (let item of comming) {
    item.innerHTML = "Próximamente";
  }
}

function closeNav() {
  setTimeout(() => {
    bsOffcanvas.hide();
  }, 400);
}

function darkMode(value) {
  if (value) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
  closeNav();
}



function openModalTeleimm(index) {
  const myModal = new bootstrap.Modal(document.getElementById("modalViewTeleimm"), {});
  myModal.show();
  swiper.slideTo(index);
}

function openModalClients(index) {
  const myModal = new bootstrap.Modal(document.getElementById("modalViewClients"), {});
  myModal.show();
  swiperClients.slideTo(index);
}