var _a;
// Define function to toggle visibility of the Skills section
function toggleSkills() {
    var skillsSection = document.getElementById('skills');
    if (skillsSection) {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    }
}
// Attach the function to the button
(_a = document.getElementById('toggle-skills')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', toggleSkills);
