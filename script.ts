// Define function to toggle visibility of the Skills section
function toggleSkills() {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        } else {
            skillsSection.style.display = 'none';
        }
    }
}

// Attach the function to the button
document.getElementById('toggle-skills')?.addEventListener('click', toggleSkills);