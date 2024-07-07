document.querySelectorAll('.car-model').forEach(carModel => {
  carModel.addEventListener('mouseenter', function() {
      const color = this.getAttribute('data-color');
      this.querySelector('img').style.filter = 'brightness(70%)';
      this.style.backgroundColor = color;
  });
  carModel.addEventListener('mouseleave', function() {
      this.querySelector('img').style.filter = 'brightness(100%)';
      this.style.backgroundColor = 'transparent';
  });
});
