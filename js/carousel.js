document.addEventListener('DOMContentLoaded', function () {
    // Select relevant DOM elements
    const carouselContent = document.querySelector('.carousel-content');
    const images = document.querySelectorAll('.guideline-image');
    const downloadLink = document.getElementById('download-link');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentIndex = 0;
    const totalImages = images.length;

    // Function to update the carousel and download link
    function updateCarousel() {
        carouselContent.style.transform = `translateX(-${currentIndex * 100}%)`;
        const currentImageSrc = images[currentIndex].getAttribute('src');
        downloadLink.setAttribute('href', currentImageSrc);
        downloadLink.setAttribute('download', currentImageSrc.split('/').pop());
    }

    // Event listeners for navigation buttons
    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    // Initialize carousel on page load
    updateCarousel();
});