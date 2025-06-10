document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.content-section, .conclusion');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(section);
  });

  const header = document.querySelector('header');
  header.style.opacity = "0";
  header.style.transform = "translateY(-20px)";
  header.style.transition = "opacity 1s ease, transform 1s ease";

  setTimeout(() => {
    header.style.opacity = "1";
    header.style.transform = "translateY(0)";
  }, 300);
});
