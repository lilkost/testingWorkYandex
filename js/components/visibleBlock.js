export const isVisibleBlock = () => {
    const visibleBlocks = document.querySelectorAll(".animate-block");

    if(!visibleBlocks) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(window.innerWidth < 1201) return;
            if (entry.isIntersecting) {
                const block = entry?.target;

                if(!block) return;

                block.classList.add('is-visible');
                observer.unobserve(block);
            }
        });
    }, {
        threshold: 0.7
    });

    visibleBlocks.forEach(item=>{
        observer.observe(item);
    });
}