// Slider khusus section kuliner (misalnya)
const wrapperFood = document.getElementById('wrapper-food');
const slidesFood = wrapperFood.querySelectorAll('.slideFood');
const prevBtnFood = document.getElementById('prevSlideFood');
const nextBtnFood = document.getElementById('nextSlideFood');

let indexFood = 0;

nextBtnFood.addEventListener('click', () => {
  indexFood = (indexFood + 1) % slidesFood.length;
  updateSliderFood();
});

prevBtnFood.addEventListener('click', () => {
  indexFood = (indexFood - 1 + slidesFood.length) % slidesFood.length;
  updateSliderFood();
});

function updateSliderFood() {
  wrapperFood.style.transform = `translateX(-${indexFood * 100}%)`;
}
