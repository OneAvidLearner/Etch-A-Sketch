const container = document.querySelector('#container');



let cell = [];

function makeGrid(rows){
container.style.setProperty('--grid-rows', rows);
container.style.setProperty('--grid-cols', rows);
for (let i = 0; i <rows*rows; i++){
    cell[i] =  document.createElement('div'); 
    cell[i].classList.add('box');
    cell[i].addEventListener('mouseover',() => cell[i].style.backgroundColor = '#f9faf8' )
    container.appendChild(cell[i]);  
}

    
}
const reset = document.querySelector('#Reset');
reset.addEventListener('click', rstfunc);

function rstfunc(){
    cell.forEach(element => {element.style.backgroundColor='rgb(26, 7, 94)'
        
    });
    
    
    
}

const resize = document.querySelector('#Resize');
resize.addEventListener('click',resizefunc);

function resizefunc(){
    let check = true;
    let newRows = 1
    while(check){
        newRows = prompt("Enter a new Grid Size",'1-100');
        console.log(typeof(newRows))
        if(newRows > 100){
            alert('That value is too high');
            continue;
        }
        else if (newRows < 1){
            alert('That value is too low');
            continue;
        }
        else check = false;

    }
    cell.forEach(element => {container.removeChild(element)
        
    });
    makeGrid(newRows);
        
  
}

makeGrid(16);





