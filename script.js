document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
    const contents = document.querySelectorAll('.content');
  
    navLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        contents.forEach((content) => content.classList.remove('active'));
        target.classList.add('active');
      });
    });
  });
  