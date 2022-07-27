function createGrid(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let i = 0; i < size; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.width = `${width / size}px`;
      box.style.height = `${height / size}px`;
      row.appendChild(box);
    }
    grid.appendChild(row);
  }
}

function resetGrid() {
  while (grid.lastChild) {
    grid.removeChild(grid.lastChild);
  }
}


const grid = document.querySelector('.grid');
let width = grid.offsetWidth;
let height = grid.offsetHeight;
let slider = document.querySelector('input');
let slidervalue = document.querySelector('.slidervalue');

slidervalue.textContent = `${slider.value} x ${slider.value}`;
createGrid(slider.value);
slider.oninput = () => {
  slidervalue.textContent = `${slider.value} x ${slider.value}`;
  resetGrid();
  createGrid(slider.value);
};

