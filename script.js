function createGrid(size) {
  
}


const grid = document.querySelector('.grid');
let slider = document.querySelector('input');
let slidervalue = document.querySelector('.slidervalue')

slidervalue.textContent = `${slider.value} x ${slider.value}`;
slider.oninput = () => {
  slidervalue.textContent = `${slider.value} x ${slider.value}`;
}