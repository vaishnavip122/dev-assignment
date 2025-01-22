   
const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
  item.addEventListener('click', () => {
    // Remove 'active' class from all accordion item
    items.forEach(i => {
      // console.log(i.classList)
      i.classList.remove('active')
    });

    // Add 'active' class to the clicked item
    item.classList.add('active');

    // Find the button inside the clicked item and hide it
    const accordionButton = item.querySelector('.accordion-button');
    if (accordionButton) {
      accordionButton.classList.add('hidden');
    }
  });
});

  document.addEventListener("DOMContentLoaded", function () {
    // Get all navbar links
    const navbarLinks = document.querySelectorAll('.navbar__link');
    
    // Listen for clicks on the navbar links
    navbarLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();  // Prevent the default anchor behavior
        
        // Get the target accordion item ID
        const targetAccordion = document.querySelector(link.getAttribute('href'));

        // Collapse all accordion items first
        document.querySelectorAll('.accordion-item').forEach(item => {
          item.classList.remove('active');
        });

        // Expand the target accordion item
        targetAccordion.classList.add('active');
      });
    });
  });


