import elements from "../elements";

export const englishText = () => {
    elements.navhome.innerText = "Home";
    elements.navAbout.innerText = "About";
    elements.navSkills.innerText = "Skills";
    elements.navCertifications.innerText = "Certifications";
    elements.navLatestProyects.innerText = "Latest Proyects";
    elements.navContact.innerText = "Contact";

    elements.aboutTitle.innerText = "About me";
    elements.description.innerText = "I grew up in the city of Xalapa, Veracruz, Mexico, I started in the world of software development in 2015, specializing in web development. Within the industry I have worked in sectors such as finance and health sciences, I have also served as a teacher / mentor sharing my knowledge and experiences in the world of technology. Teaching and programming beyond being my job, are my great passions.";
    elements.skillTitle.innerText = "Skills";
    elements.lastesProyectsTitle.innerText = "Lastes projects";
    elements.certificationTitle.innerText = 'Certifications';
    elements.contacTitle.innerText = "Contact me";
    elements.teleimmDescription.innerText = 'Medical social network';
    elements.linkTeleimm.innerText = 'Go to Teleimm';
    elements.donwloadCv.href = './assets/cv/YaelRuiz_CV_EN.pdf';
    elements.englishLangItem.classList.add('uk-active');
    elements.spanishLangItem.classList.remove('uk-active');
    elements.microsoftDescription.innerText = "Microsoft Azure is a platform made up of more than 200 cloud products and services designed to incorporate new solutions that can solve today's challenges.";
}

export default englishText;