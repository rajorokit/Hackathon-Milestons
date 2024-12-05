// Get references to the button and the skills section
var toggleSkillsButton = document.getElementById("toggle-skills");
var skillsSection = document.getElementById("skills");
// Ensure both elements exist before adding event listeners
if (toggleSkillsButton && skillsSection) {
    toggleSkillsButton.addEventListener("click", function () {
        // Toggle visibility of the skills section
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block";
        }
        else {
            skillsSection.style.display = "none";
        }
    });
}
else {
    console.error("Error: Button or skills section not found.");
}
