function toggleSection(sectionId, button) {
  // Hide all English and Arabic sections except experts
  document.querySelectorAll('.section-content, .arabic-content').forEach(s => {
    if (!s.classList.contains('doctor-section')) {
      s.classList.remove('active');
    }
  });

  // Remove toggled class from all buttons
  document.querySelectorAll('.section-button').forEach(btn => btn.classList.remove('toggled'));

  // Show selected section
  const section = document.getElementById(sectionId);
  if (section) {
    section.classList.add('active');
  }

  // Highlight button
  button.classList.add('toggled');
}
