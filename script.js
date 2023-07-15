window.addEventListener('DOMContentLoaded', function() {
    const scroller = document.querySelector('.scroller');
    const sections = document.querySelectorAll('.content');
    
    function fadeIn(section) {
        section.classList.add('fade-in');
    }
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }
    
    function handleScroll() {
        sections.forEach(function(section) {
            if (isElementInViewport(section)) { fadeIn(section);}
        });
    }
    
    scroller.addEventListener('scroll', handleScroll);
    handleScroll();
});