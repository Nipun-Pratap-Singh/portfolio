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


const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
        // reseting the captcha to intial 
        if (typeof hcaptcha !== 'undefined') {
            hcaptcha.reset();
        }
});