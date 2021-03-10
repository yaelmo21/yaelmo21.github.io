AOS.init();

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

window.addEventListener('load', function() {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (darkMode) {
        document.body.classList.add("dark-mode");
        document.getElementById("dark_mode").checked = true;
    } else {
        document.body.classList.remove("dark-mode");
    }
});


function closeNav() {
    const menuToggle = document.getElementById('navbarNavAltMarkup');
    const bsCollapse = new bootstrap.Collapse(menuToggle);
    bsCollapse.toggle()
}

function darkMode(value) {
    if (value) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
    closeNav();
}


window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                const element = document.getElementById(`nav_${id}`);
                element.classList.add('active');
            } else {
                const element = document.getElementById(`nav_${id}`);
                element.classList.remove('active');
            }
        });
    });

    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });

});

let myCollapsible = document.getElementById('moreSkills');
myCollapsible.addEventListener('shown.bs.collapse', function() {
    let collapseButton = document.getElementById('moreSkillsbtn');
    collapseButton.textContent = "Ocultar";
});
myCollapsible.addEventListener('hide.bs.collapse', function() {
    let collapseButton = document.getElementById('moreSkillsbtn');
    collapseButton.textContent = "Mostrar más";
});

function openModal(file) {
    console.log(file);
    const imgPath = 'img';
    const img = document.getElementById('img_zoom');
    img.src = `${imgPath}/${file}`;
    const myModal = new bootstrap.Modal(document.getElementById('modalView'), {});
    myModal.show();
}