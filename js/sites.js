document.addEventListener('DOMContentLoaded', function() {
  const photos = document.querySelectorAll('.site_photo');

  photos.forEach(photo => {
    photo.addEventListener('mouseover', function() {
      photos.forEach(p => p.classList.remove('hovered', 'not-hovered'));
      photo.classList.add('hovered');
      photos.forEach(p => {
        if (p !== photo) {
          p.classList.add('not-hovered');
        }
      });
    });

    photo.addEventListener('mouseout', function() {
      photos.forEach(p => p.classList.remove('hovered', 'not-hovered'));
    });
  });
});