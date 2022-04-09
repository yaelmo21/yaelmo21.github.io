import Typewriter from 'typewriter-effect/dist/core';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import elements from './js/elements';
import englishText from './js/language/en';
import spanishText from './js/language/es';
import createSkillsList from './js/skills';
import './styles.scss';
UIkit.use(Icons);

const userLang = navigator.language || navigator.userLanguage;
elements.year.innerText = new Date().getFullYear();
createSkillsList();

if (userLang.includes('es')) {
    spanishText();
} else {
    englishText();
}


elements.spanishLang.addEventListener('click', (e) => {
    e.preventDefault();
    spanishText();
});

elements.englishLang.addEventListener('click', (e) => {
    e.preventDefault();
    englishText();
});

const profession = new Typewriter('#profession', {
    cursorClassName: 'text-primary'
});
profession.typeString('<span class="uk-text-danger" uk-icon="chevron-left" ratio="2"></span> Full Stack Developer <span class="uk-text-danger" uk-icon="chevron-right" ratio="2"></span>');
profession.start();