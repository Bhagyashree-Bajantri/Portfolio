// Select all links in the navbar
const navLinks = document.querySelectorAll('nav ul li a');

// Function to handle active link on scroll
function activateNavLink() {
    let currentSection = '';

    // Loop through sections to get which one is currently in the viewport
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            currentSection = section.getAttribute('id');
        }
    });

    // Remove active class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
        // Add active class to the link of the current section
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', activateNavLink);
