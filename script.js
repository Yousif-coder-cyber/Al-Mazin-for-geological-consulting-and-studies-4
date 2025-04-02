<script>
         function toggleSection(sectionId, button) {
             const sections = document.querySelectorAll('.section-content');
             sections.forEach(section => section.classList.remove('active'));
             const buttons = document.querySelectorAll('.about-container:first-child .section-button');
             buttons.forEach(btn => btn.classList.remove('toggled'));
 
             const selectedSection = document.getElementById(sectionId);
             if (selectedSection) {
                 selectedSection.classList.add('active');
                 button.classList.add('toggled');
             }
         }
 
         function toggleArabicSection(sectionId, button) {
             const sections = document.querySelectorAll('.arabic-content');
             sections.forEach(section => section.classList.remove('active'));
             const buttons = document.querySelectorAll('.about-container:nth-child(2) .section-button');
             buttons.forEach(btn => btn.classList.remove('toggled'));
 
             const selectedSection = document.getElementById(sectionId);
             if (selectedSection) {
                 selectedSection.classList.add('active');
                 button.classList.add('toggled');
             }
         }
 
         document.addEventListener('DOMContentLoaded', () => {
             const englishButtons = document.querySelectorAll('.about-container:first-child .section-button');
             if (englishButtons.length > 0) {
                 toggleSection('about', englishButtons[0]); // Show English About Us by default and toggle the button
             }
 
             const arabicButtons = document.querySelectorAll('.about-container:nth-child(2) .section-button');
             if (arabicButtons.length > 0) {
                 toggleArabicSection('arabic-about', arabicButtons[0]); // Show Arabic من نحن by default and toggle the button
             }
         });
     </script>
