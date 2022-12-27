window.addEventListener("scroll", (event) => {
    let span = document.querySelectorAll('.animate');
    let scroll = this.scrollY;

    console.log(scroll)

    if (scroll > 200 && scroll < 700) {
        span[0].classList.add('animate-init');
    }else {
        span[0].classList.remove('animate-init');
    }
    if (scroll > 250 && scroll < 750) {
        span[1].classList.add('animate-init');
    }else {
        span[1].classList.remove('animate-init');
    }

    if (scroll > 300 && scroll < 800 ) {
        span[2].classList.add('animate-init');
    }else {
        span[2].classList.remove('animate-init');
    }

    if (scroll > 350 && scroll < 850) {
        span[3].classList.add('animate-init');
    }else {
        span[3].classList.remove('animate-init');
    }
});