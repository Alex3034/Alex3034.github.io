console.log("¡Bienvenido a mi portafolio!");
document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.proyecto-slider');
    const dots = document.querySelectorAll('.dot');

    scrollContainer.addEventListener('scroll', () => {
        const scrollLeft = scrollContainer.scrollLeft;
        const containerWidth = scrollContainer.clientWidth;
        const itemWidth = scrollContainer.querySelector('.proyecto').clientWidth + 20; // adding gap

        const itemIndex = Math.round(scrollLeft / itemWidth);

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === itemIndex);
        });
    });

    // Optional: Add click event to dots for smooth scrolling
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const itemWidth = scrollContainer.querySelector('.proyecto').clientWidth + 20; // adding gap
            scrollContainer.scrollTo({
                left: index * itemWidth,
                behavior: 'smooth'
            });
        });
    });
});