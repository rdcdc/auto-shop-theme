document.addEventListener('DOMContentLoaded', function () {
  const openMenuButton = document.getElementById('open-menu');
  const closeMenuButton = document.getElementById('close-menu');
  const overlayMenu = document.getElementById('overlay-menu');

  // Gracefully handle missing menu elements
  if (!openMenuButton || !closeMenuButton || !overlayMenu) {
      // Menu elements not found - silently fail without disrupting the page
      return;
  }

  // Add event listener for opening the menu
  openMenuButton.addEventListener('click', function () {
      if (overlayMenu.classList.contains('hidden')) {
          overlayMenu.classList.remove('hidden');
          overlayMenu.classList.add('visible');
          openMenuButton.style.display = 'none'; // Hide open button
      } 
  });

  // Add event listener for closing the menu
  closeMenuButton.addEventListener('click', function () {
      if (overlayMenu.classList.contains('visible')) {
          overlayMenu.classList.remove('visible');
          overlayMenu.classList.add('hidden');
          openMenuButton.style.display = ''; // Reset display property (default state)
      }
  });

  // Optional: Close the menu when clicking outside it
  document.addEventListener('click', function (event) {
      if (!overlayMenu.contains(event.target) && !openMenuButton.contains(event.target)) {
          if (overlayMenu.classList.contains('visible')) {
              overlayMenu.classList.remove('visible');
              overlayMenu.classList.add('hidden');
              openMenuButton.style.display = ''; // Reset display property
          }
      }
  });

  document.getElementById('open-menu').addEventListener('click', function () {
      document.body.classList.add('overlay-active');
  });
   
  document.getElementById('close-menu').addEventListener('click', function () {
      document.body.classList.remove('overlay-active');
  });

});
