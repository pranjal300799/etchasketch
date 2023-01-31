let rainbowSwitch='off';
let ink=document.querySelector('#color').value;
let penState='off';
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
function addEvents()
{
   let sketchpad=document.querySelector(".sketchpad");
   sketchpad.addEventListener('mousedown',togglePenState);
   let clear=document.querySelector('.clear');
   clear.addEventListener('click',resetSketchpad);
   let squaresButton=document.querySelector('.containerforinput>button');
   squaresButton.addEventListener('click',getInput);
   let colorInput=document.querySelector('#color');
   colorInput.addEventListener('input',changeInk);
   let rainbow=document.querySelector('.rainbow>button');
   rainbow.addEventListener('click',updateSwitchStatus);
}
function togglePenState()
{  let penBlinker=document.querySelector('.penstatus>div');
   
  if(penState==='off')
  { penBlinker.style['background-color']='green';
    activateColoring();
    penState='on';
  }
  else
  {  penBlinker.style['background-color']='red';
     deactivateColoring();
     penState='off';
  }
}
function activateColoring()
{
  let divsList=document.querySelectorAll('.sketchpad>div');
  divsList.forEach(div=>div.addEventListener('mouseover',changeColor));
}  
function deactivateColoring()
{
  let divsList=document.querySelectorAll('.sketchpad>div');
  divsList.forEach(div=>div.removeEventListener('mouseover',changeColor));
}                      
function changeColor(e)
{ //color is changed only if the div is not already colored prevent overwriting previous sketch
  if(rainbowSwitch==='on')
  {
    changeInk();
  }
  if(e.target.style['background-color']==='')
   {
      e.target.style['background-color']=ink;
   }
}
function resetSketchpad()
{
  let divsList=document.querySelectorAll('.sketchpad>div');
  divsList.forEach(div=>div.style['background-color']='');
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
function changeInk(e)
{  
  if(rainbowSwitch=='on')
  {
    ink=randomColorGenerator();
    return;
  }
   let color=e.target.value;
   ink=color;
}
function randomColorGenerator()
{
  let color="#";
  let colorString="0123456789abcdef";
  for(let i=0;i<6;i++)
  {
    color+=colorString.charAt(Math.floor((Math.random()*100))%15);
  }
  return color;
}
function updateSwitchStatus()
{
  if(rainbowSwitch==='on')
  {
    rainbowSwitch='off';
    resetInkColor();
  }
  else
  {
    rainbowSwitch='on';
  }
}
function resetInkColor()
{
   ink=document.querySelector('#color').value;
}
