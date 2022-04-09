import elements from "../elements"

export const spanishText = () => {
    elements.navhome.innerText = "Inicio";
    elements.navAbout.innerText = "Sobre mi";
    elements.navSkills.innerText = "Habilidades";
    elements.navCertifications.innerText = "Certificaciones";
    elements.navLatestProyects.innerText = "Últimos proyectos";
    elements.navContact.innerText = "Contáctame";

    elements.aboutTitle.innerText = "Sobre mi";
    elements.description.innerText = "Originario de la ciudad de Xalapa, Veracruz, México, inicie en el mundo del desarrollo de software en el año 2015, especializándome en el desarrollo web. Dentro de la industria he trabajado en sectores como finanzas y ciencias de la salud, también me he desempeñado como maestro/mentor compartiendo mis conocimientos y experiencias en el mundo de la tecnología. Enseñar y programar más allá de ser mi trabajo, son mis grandes pasiones.";
    elements.skillTitle.innerText = "Habilidades";
    elements.lastesProyectsTitle.innerText = "Últimos proyectos";
    elements.certificationTitle.innerText = 'Certificaciones';
    elements.contacTitle.innerText = "Contáctame";
    elements.teleimmDescription.innerText = 'Red social medica';
    elements.linkTeleimm.innerText = 'Ir a Teleimm';
    elements.donwloadCv.href = './assets/cv/YaelRuiz_CV_ES.pdf';
    elements.microsoftDescription.innerText = "Microsoft Azure es una plataforma compuesta por más de 200 productos y servicios en la nube diseñada para incorporar nuevas soluciones que puedan resolver las dificultades actuales."
    elements.spanishLangItem.classList.add('uk-active');
    elements.englishLangItem.classList.remove('uk-active');
}

export default spanishText;