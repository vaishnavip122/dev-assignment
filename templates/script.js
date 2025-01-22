// const items = document.querySelectorAll('.accordion-item');

//     items.forEach(item => {
//       item.addEventListener('click', () => {
//         items.forEach(i => 
//           console.log (i.classList.remove('active')));
//         item.classList.add('active');
        
//       });
//     });
   
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




// const items = document.querySelectorAll('.accordion-item');

// items.forEach(item => {
//   const button = item.querySelector('.accordion-button'); // Find the button inside the accordion item
  
//   item.addEventListener('click', () => {
//     // Remove 'active' from all accordion items and buttons
//     items.forEach(i => {
//       i.classList.remove('active');
//       i.querySelector('.accordion-button').classList.remove('hidden'); // Remove 'hidden' class from all buttons
//     });

//     // Add 'active' to the clicked accordion item
//     item.classList.add('active');
    
//     // Add 'hidden' class to the button of the active item
//     button.classList.add('hidden');
//   });
// });

// // Get the accordion item and its button
// const accordionItem = document.getElementById('accordion-item-active');
// const accordionButton = accordionItem.querySelector('.accordion-button');

// // Add event listener to the accordion button
// accordionButton.addEventListener('click', function() {
//     // Check if the accordion content is currently visible (active)
//     const isActive = accordionItem.classList.contains('show');

//     // Toggle the display of the accordion item
//     if (isActive) {
//         accordionItem.style.display = 'none';  // Hide the entire accordion item
//     } else {
//         accordionItem.style.display = 'block'; // Show the entire accordion item
//     }
// });
