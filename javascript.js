  let sketchpad=document.querySelector(".sketchpad");
   let numberOfSquares=+prompt('no of squares on each edge');

function addDivs(number)
{
   for(let i=0;i<number**2;i++)
   {   let square=document.createElement('div');
       square.style["width"]=`${(800/number-2)}px`;
       square.style["height"]=`${(800/number-2)}px`;
       sketchpad.appendChild(square);
   }
}
function toggleGrid(state)
{
    let divsList=document.querySelectorAll('.sketchpad>div');
    if(state==='off')
    {
      showGrid();
    }
    else
    {
      removeGrid();
    }
    function showGrid()
    {
      divsList.forEach(div=>div.classList.add('gridon'));
      state='on';
    }
    function removeGrid()
    {
      divsList.forEach(div=>div.classList.remove('gridon'));
      state='off';
    }
    return state;
}
function addEvents()
{
let button=document.querySelector('.toggleGrid');
button.addEventListener('click',()=>{state=toggleGrid(state);});
}
addDivs(numberOfSquares);
