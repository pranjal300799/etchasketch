let state='off';
let ink=document.querySelector('#color').value;
function addDivs(number)
{
   for(let i=0;i<number**2;i++)
   {   const sketchpad=document.querySelector('.sketchpad');
       let square=document.createElement('div');
       square.style["width"]=`${(800/number)}px`;
       square.style["height"]=`${(800/number)}px`;
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
   let sketchpad=document.querySelector(".sketchpad");
   sketchpad.addEventListener('mousedown',activateColoring);
   let clear=document.querySelector('.clear');
   clear.addEventListener('click',resetSketchpad);
   let squaresButton=document.querySelector('.containerforinput>button');
   squaresButton.addEventListener('click',getInput);
   let colorInput=document.querySelector('#color');
   colorInput.addEventListener('input',changeInk);
}
function activateColoring()
{
  let divsList=document.querySelectorAll('.sketchpad>div');
  divsList.forEach(div=>div.addEventListener('mouseover',changeColor));
}
function changeColor(e)
{
   e.target.classList.add('alter');
}
function resetSketchpad()
{
  let divsList=document.querySelectorAll('.sketchpad>div');
  divsList.forEach(div=>div.classList.remove('alter'));
}
addDivs(10);
addEvents();  
function getInput()
{
  let input=document.querySelector('#squares');
  let number=input.value;
  if(verifyInput(number))
  {
     clear();
     addDivs(number);
  } 
  else
  {
     prompt('hey');
  }
}
function clear()
{
   let parent=document.querySelector('.sketchpad');
   let nodesList=document.querySelectorAll('.sketchpad>div');
   nodesList.forEach(div=>parent.removeChild(div));
}
function verifyInput(input)
{
    return (input>=1&&input<=100);
}