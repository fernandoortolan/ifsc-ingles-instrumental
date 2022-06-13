ScrollReveal({
    origin: 'top',
    distance: '32px',
    duration: 800,
}).reveal(`
    #section-01 .content,
    #section-02 .content,
    #section-03 .content,
    #section-04 .content,
    #section-05 .content,
    #section-06 .content,
    #section-07 .content,
    #section-08 .content,
    #section-09 .content,
    #section-10 .content,
    #section-11 .content,
    #section-12 .content,
    #section-13 .content`
);

let theme = 1;

function changeTheme() {

    const body = document.querySelector('body');
    const focus = document.querySelectorAll('.focus');

    theme++;

    if (theme > 4) {
        theme = 1;
    }

    if (theme === 1) {
        body.style.backgroundColor = '#96acea';
        body.style.color = '#183664';
        for (let i = 0; i < focus.length; i++) {
            focus[i].style.backgroundColor = '#183664';
            focus[i].style.color = '#96acea';
        }
    } else if (theme === 2) {
        body.style.backgroundColor = '#d4ffde';
        body.style.color = '#181c0e';
        for (let i = 0; i < focus.length; i++) {
            focus[i].style.backgroundColor = '#181c0e';
            focus[i].style.color = '#d4ffde';
        }
    } else if (theme === 3) {
        body.style.backgroundColor = '#e1e1e1';
        body.style.color = '#7830ff';
        for (let i = 0; i < focus.length; i++) {
            focus[i].style.backgroundColor = '#7830ff';
            focus[i].style.color = '#e1e1e1';
        }
    } else {
        body.style.backgroundColor = '#f4f4f4';
        body.style.color = '#0b0b0b';
        for (let i = 0; i < focus.length; i++) {
            focus[i].style.backgroundColor = '#0b0b0b';
            focus[i].style.color = '#f4f4f4';
        }
    }
}

let btChangeTheme = document.getElementById('btChangeTheme');
btChangeTheme.addEventListener('click', changeTheme);
