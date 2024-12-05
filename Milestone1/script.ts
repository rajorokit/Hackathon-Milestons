// Get references to the button and the skills section
const toggleskillsButton = document.getElementById("toggle-skills") as HTMLButtonElement;
const skills = document.getElementById("skills") as HTMLElement;

// Ensure both elements exist before adding event listeners
if (toggleSkillsButton && skillsSection) {
    toggleSkillsButton.addEventListener("click", () => {
        // Toggle visibility of the skills section
        if (skills.style.display === "none") {
            skills.style.display = "block";
        } else {
            skills.style.display = "none";
        }
    });
} else {
    console.error("Error: Button or skills section not found.");
}
