document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector('.about-image');
    const imageContainer = document.querySelector('.image-container');
  
    // Wait until the image is fully loaded
    image.onload = function () {
      const aspectRatio = image.naturalHeight / image.naturalWidth;
      const containerWidth = imageContainer.offsetWidth;
  
      // Calculate height based on the width of the container and aspect ratio
      const newHeight = containerWidth * aspectRatio;
      imageContainer.style.height = `${newHeight}px`;
    };
  });
  