import elements from './elements';
import skills from './skills-items';
import { capitalize } from './utils';


const containerSkills = elements.skillList;

const createSkillsList = () => {
    skills.forEach(skill => containerSkills.insertAdjacentHTML('beforeend', cardSkill(skill.name, skill.img)));
}

const cardSkill = (name, img) => (`
    <div class="container-zoom">
        <div class="uk-card uk-card-default uk-card-body bg-primary-border uk-box-shadow-large uk-padding rounded">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
                <div class="uk-width-auto">
                    <img  width="70" height="70" src="${img}" >
                </div>
                <div class="uk-width-expand uk-text-center">
                    <h3 class="uk-card-title uk-margin-remove-bottom">${capitalize(name)}</h3>
                </div>
            </div>
        </div>
    </div>
`);


export default createSkillsList;