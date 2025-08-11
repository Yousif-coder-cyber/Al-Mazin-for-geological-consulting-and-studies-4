function toggleSection(sectionId, button) {
  document.querySelectorAll('.section-content, .arabic-content').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.section-button').forEach(btn => btn.classList.remove('toggled'));
  const section = document.getElementById(sectionId);
  if (section) section.classList.add('active');
  button.classList.add('toggled');
}


document.querySelectorAll('.products-gallery img').forEach(img => {
  img.addEventListener('click', () => {
    img.classList.toggle('enlarged');
  });
});
