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
