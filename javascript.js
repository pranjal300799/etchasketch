
   let sketchpad=document.querySelector(".sketchpad");
   let numberOfSquares=+prompt('no of squares on each edge');
   addDivs(numberOfSquares);
function addDivs(number)
{
   for(let i=0;i<number**2;i++)
   {   let square=document.createElement('div');
       square.style["width"]=`${(800/number-2)}px`;
       square.style["height"]=`${(800/number-2)}px`;
       sketchpad.appendChild(square);
   }
}
function showGrid()
{
    square.style.border=" 1px solid black";
}