

let grid = [];
let container = document.querySelector('#container')
let newRow;




for (let i=0; i < 16; i++){
  
  newRow = document.createElement('div')
  newRow.classList.add('row');

  function turnOrange(x) {
    x.style.backgroundColor= "orange"
  
  }

  for (let j=0; j < 16; j++){
    let newSquare = document.createElement('div');
    newSquare.textContent = `[ ${i} . ${j} ]`;
    newSquare.setAttribute('id', `${i}-${j}`);
    newSquare.classList.add('square');
    newSquare.setAttribute('onmouseover', 'turnOrange(this)');
    newRow.appendChild(newSquare);
    console.log(`${newSquare.getAttribute(`id`)} created`)
  }
  container.appendChild(newRow)
}