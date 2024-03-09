// icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');


menuIcon.onclick =() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};






// scroll section link

let section = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');


window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlink.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

// sticky navbar

     let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

// remove toggle

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');


};

