// Check if dark mode is set in localStorage
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const projectBoxes = document.querySelectorAll('.project-box');
const profileName = document.getElementById('profile-name'); 

// Check localStorage for saved theme preference on page load
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    header.classList.add('dark-mode');
    footer.classList.add('dark-mode');
    projectBoxes.forEach(box => box.classList.add('dark-mode'));
    profileName.classList.add('dark-mode');
    themeToggle.checked = true;  // Keep the toggle state synchronized
}

// Event listener for theme toggle
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        // Add dark mode and save preference
        body.classList.add('dark-mode');
        header.classList.add('dark-mode');
        footer.classList.add('dark-mode');
        projectBoxes.forEach(box => box.classList.add('dark-mode'));
        profileName.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        // Remove dark mode and save preference
        body.classList.remove('dark-mode');
        header.classList.remove('dark-mode');
        footer.classList.remove('dark-mode');
        projectBoxes.forEach(box => box.classList.remove('dark-mode'));
        profileName.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Get the "Back to Top" button
const backToTopButton = document.querySelector(".button");

// When the user scrolls down more than 150px, show the button with a fade-in effect
window.onscroll = function() {
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        backToTopButton.classList.add("visible"); // Show button with fade-in
    } else {
        backToTopButton.classList.remove("visible"); // Hide button with fade-out
    }
};

// Scroll to top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Text carousel functionality
const languages = [
    "Java Developer",
    "Python Enthusiast",
    "JavaScript & Web Developer",
    "HTML & CSS",
    "SQL Database Management"
    // Add more languages/skills as needed
];

let currentIndex = 0;
const carouselText = document.querySelector('.carousel-text');

function updateCarouselText() {
    // Remove visible class with current text
    carouselText.classList.remove('visible');
    
    // After the fade out, update text and fade in
    setTimeout(() => {
        carouselText.textContent = languages[currentIndex];
        carouselText.classList.add('visible');
        
        // Update index for next iteration
        currentIndex = (currentIndex + 1) % languages.length;
    }, 500); // This timeout should match the CSS transition time
}

// Initial text display
if (carouselText) {
    carouselText.textContent = languages[0];
    carouselText.classList.add('visible');
    
    // Start the carousel
    setInterval(updateCarouselText, 3000); // Changes text every 3 seconds
}