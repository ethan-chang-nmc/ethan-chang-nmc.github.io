window.addEventListener('scroll', function() {
    const content = document.querySelector('.hero-section .content');
    const scrollPosition = window.scrollY;

    // Hide the hero section text when scrolling down
    if (scrollPosition > 100) { // Adjust the value as needed
        content.style.opacity = '0';
    } else {
        content.style.opacity = '1';
    }
});

function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax-section');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Calculate when the parallax section is in view
    if (scrollPosition + windowHeight > parallax.offsetTop && scrollPosition < parallax.offsetTop + parallax.offsetHeight) {
        parallax.style.opacity = '1'; // Fade in
    } else {
        parallax.style.opacity = '0'; // Fade out
    }
});

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    const parallaxSection = document.querySelector('.parallax-section');
    const quote = document.querySelector('.parallax-section .quote');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Check if the parallax section is in view
    if (scrollPosition + windowHeight > parallaxSection.offsetTop && scrollPosition < parallaxSection.offsetTop + parallaxSection.offsetHeight) {
        quote.classList.add('active'); // Add the 'active' class to start the animation
    } else {
        quote.classList.remove('active'); // Remove the 'active' class to reset the animation
        quote.querySelectorAll('span').forEach((span, index) => {
            span.style.animation = ''; // Clear any existing animation
            span.style.opacity = '0'; // Reset opacity
            span.style.filter = 'blur(4px)'; // Reset blur
            // Reapply the animation with the correct delay
            setTimeout(() => {
                span.style.animation = `fade-in 0.8s ${0.1 * (index + 1)}s forwards cubic-bezier(0.11, 0, 0.5, 0)`;
            }, 50);
        });
    }
});

