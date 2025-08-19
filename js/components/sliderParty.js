export const sliderPartyCreate = () => {
    const track = document.querySelector('.party__slider-wrapper');
    const slides = document.querySelectorAll('.party__slide');
    const prevBtn = document.querySelector('.party__btn-prev');
    const nextBtn = document.querySelector('.party__btn-next');
    const pagination = document.querySelector('.party__counts');

    let index = 0;
    let slidesToShow = getSlidesToShow();
    const totalSlides = slides.length;
    let autoPlayInterval;

    function getSlidesToShow() {
        if (window.innerWidth <= 690) return 1;
        if (window.innerWidth <= 992) return 2;
        return 3;
    }

    function updateSlider() {
        const slideWidth = slides[0].offsetWidth + 20;
        track.style.transform = `translateX(-${index * slideWidth}px)`;
        pagination.textContent = `${Math.floor(index / slidesToShow) + 1} / ${Math.ceil(totalSlides / slidesToShow)}`;
    }

    function nextSlide() {
        index += slidesToShow;
        if (index >= totalSlides) index = 0; 
        updateSlider();
    }

    function prevSlide() {
        index -= slidesToShow;
        if (index < 0) {

            index = (Math.ceil(totalSlides / slidesToShow) - 1) * slidesToShow;
        }
        updateSlider();
    }

    function startAutoplay() {
        autoPlayInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoplay() {
        clearInterval(autoPlayInterval);
    }

    nextBtn.addEventListener('click', () => {
        stopAutoplay();
        nextSlide();
        startAutoplay();
    });

    prevBtn.addEventListener('click', () => {
        stopAutoplay();
        prevSlide();
        startAutoplay();
    });

    window.addEventListener('resize', () => {
        slidesToShow = getSlidesToShow();
        index = 0; 
        updateSlider();
    });


    updateSlider();
    startAutoplay();
}