
//Needed to listen for 'submit'
const sizePicker = document.querySelector('#sizePicker');

//Needed to draw:
const pixelCanvas = document.querySelector('#pixelCanvas');
// When size is submitted by the user, call makeGrid()

//Draw the grid:
function makeGrid(columnCount, rowCount){
  //removes any previously made grid to start fresh:
  while (pixelCanvas.firstChild){
    pixelCanvas.removeChild(pixelCanvas.firstChild);
  }
  //creates rows based on user input:
  for (let x = 1; x <= rowCount; x++){
    const gridRows = document.createElement('tr');
    pixelCanvas.appendChild(gridRows);
    //creates cells based on user input:
      for (let y = 1; y <= columnCount; y++){
        const gridCells = document.createElement('td');
        gridRows.appendChild(gridCells);
        //adds listener to prompt color
        gridCells.addEventListener('click', function(){
          const chosenColor = document.querySelector('#colorPicker').value;
          this.style.backgroundColor = chosenColor;
      })
    }
  }
}


//call function using arbitrary defaults:
makeGrid(10, 10);
//prevent defaults in favor of user settings,
//add listener for user setting submission
sizePicker.addEventListener('submit', function(sbmt){
  sbmt.preventDefault();
  //Get user selections:
  //How many columns/How wide:
  const columnCount = document.querySelector('#inputWidth').value;
  //How many rows/How tall:
  const rowCount = document.querySelector('#inputHeight').value;
  makeGrid(columnCount, rowCount);
});
