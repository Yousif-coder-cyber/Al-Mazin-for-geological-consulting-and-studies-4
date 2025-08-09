function toggleSection(sectionId, button) {
  // Hide all English and Arabic sections
  document.querySelectorAll('.section-content, .arabic-content').forEach(section => {
    section.classList.remove('active');
  });

  // Remove toggled style from all buttons
  document.querySelectorAll('.section-button').forEach(btn => {
    btn.classList.remove('toggled');
  });

  // Show selected section
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add('active');
  }

  // Highlight clicked button
  button.classList.add('toggled');
}

document.addEventListener('DOMContentLoaded', () => {
  // Show default English and Arabic sections
  const englishButtons = document.querySelectorAll('.about-container:first-child .section-button');
  if (englishButtons.length > 0) {
    toggleSection('about', englishButtons[0]);
  }

  const arabicButtons = document.querySelectorAll('.about-container:nth-child(2) .section-button');
  if (arabicButtons.length > 0) {
    toggleSection('arabic-about', arabicButtons[0]);
  }
});
