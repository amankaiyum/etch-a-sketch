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

function colorBox(color) {
  let boxes = document.querySelectorAll('.box');
  boxes.forEach((div) => {
    div.addEventListener('mouseover', function (e) {
    e.target.style.background = color;
    });
  });
}

function colorRainbow() {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue',   'indigo', 'violet']
  let randomNumber = Math.floor(Math.random() * 7); 
  let randomColor = colors[randomNumber];

  let boxes = document.querySelectorAll('.box');
  boxes.forEach((div) => {
    div.addEventListener('mouseover', function (e) {
    e.target.style.background = randomColor;
    });
  });  
}

function intervalTrigger() {                  //toggle rainbow mode
  if (!trigger) {
    trigger = window.setInterval(colorRainbow, 50);
  }
  else {
    window.clearInterval(trigger);
    trigger = null;
  }
}

let trigger;
const grid = document.querySelector('.grid');
let width = grid.offsetWidth;
let height = grid.offsetHeight;
let slider = document.querySelector('.slider');
let slidervalue = document.querySelector('.slidervalue');
let colorpicker = document.querySelector('.colorpicker');

slidervalue.textContent = `${slider.value} x ${slider.value}`;
createGrid(slider.value);
colorBox(colorpicker.value);

colorpicker.oninput = () => {
  colorBox(colorpicker.value);
};

slider.oninput = () => {
  slidervalue.textContent = `${slider.value} x ${slider.value}`;
  resetGrid();
  createGrid(slider.value);
  colorBox(colorpicker.value);
};

const eraser = document.querySelector('.eraser');
const clear = document.querySelector('.clear');
const rainbow = document.querySelector('.rainbow');

eraser.addEventListener('click', () => {       //toggle eraser button
  if (eraser.classList.contains('active')) {      
    colorBox(colorpicker.value);
  }
  else if (rainbow.classList.contains('active')) {
    rainbow.classList.toggle('active');
    intervalTrigger();
    colorBox('whitesmoke')
  }
  else {
    colorBox('whitesmoke');
  }
  eraser.classList.toggle('active');
});

clear.addEventListener('click', () => {     //clear button
  resetGrid();
  createGrid(slider.value);
  colorBox(colorpicker.value);
  if (eraser.classList.contains('active')) {
    eraser.classList.toggle('active');
  }
  if (rainbow.classList.contains('active')) {
    rainbow.classList.toggle('active');
    intervalTrigger();
  }
});

rainbow.addEventListener('click', () => {       //rainbow mode
  if (rainbow.classList.contains('active')) {
    colorBox(colorpicker.value);
  }
  if (eraser.classList.contains('active')) {
    eraser.classList.toggle('active');
  }
  rainbow.classList.toggle('active');
  intervalTrigger();
  
});