//menu button

let navbar = document.querySelector('.navbar')
document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.toggle('active')
};


//search box

let search = document.querySelector('.search-box')
document.querySelector('#search-btn').onclick = ()=>{
    search.classList.toggle('active')
}


//loader

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 2000);
}

window.onload = fadeOut;




let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('.header .navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.header .navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};




//initialize swiper

const swiper = new Swiper('.slider-wrapper', {

    loop: true,
    grabCursor:true,
    spaceBetween:20,

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  
    },

    breakpoints: {

        0: {
            slidesPerView:1
        },
        768: {
            slidesPerView:2
        },
        1024: {
            slidesPerView:3
        }
    }
  });
  