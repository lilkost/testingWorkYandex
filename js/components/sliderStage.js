export const sliderStageCreate = () => {
    const track = document.querySelector('.stage__slider-wrapper');
    const slides = document.querySelectorAll('.stage__slide-mobile');
    const prevBtn = document.querySelector('.stage__btn-prev');
    const nextBtn = document.querySelector('.stage__btn-next');
    const pagination = document.querySelector('.stage__pagination');

    let index = 0;
    const totalSlides = slides.length;
    let bullets = [];

    function initSlider() {
        if (window.innerWidth < 481) {
            pagination.innerHTML = "";
            for (let i = 0; i < totalSlides; i++) {
                const bullet = document.createElement('span');
                bullet.classList.add('bullet');
                if (i === 0) bullet.classList.add('active');
                bullet.addEventListener('click', () => goToSlide(i));
                pagination.appendChild(bullet);
            }
            bullets = document.querySelectorAll('.bullet');


            updateSlider();
        } else {
            track.style.transform = "none";
            pagination.innerHTML = "";
        }
    }

    function updateSlider() {
        if (window.innerWidth > 480) return;
            const slideWidth = slides[0].offsetWidth + 10; 
            track.style.transform = `translateX(-${index * slideWidth}px)`;

            bullets.forEach(b => b.classList.remove('active'));
        if (bullets[index]) bullets[index].classList.add('active');

            prevBtn.disabled = index === 0;
            nextBtn.disabled = index === totalSlides - 1;
    }

    function nextSlide() {
        if (index < totalSlides - 1) {
            index++;
            updateSlider();
        }
    }

    function prevSlide() {
        if (index > 0) {
            index--;
            updateSlider();
        }
    }

    function goToSlide(i) {
        index = i;
        updateSlider();
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    window.addEventListener('resize', () => {
        index = 0;
        initSlider();
    });

    initSlider();
}