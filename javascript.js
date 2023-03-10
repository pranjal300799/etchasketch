let rainbowSwitch='off';
let ink=document.querySelector('#color').value;
let penState='off';
function addDivs(number)
{
   for(let i=0;i<number**2;i++)
   {   const sketchpad=document.querySelector('.sketchpad');
       let square=document.createElement('div');
       square.style["width"]=`${(600/number)}px`;
       square.style["height"]=`${(600/number)}px`;
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
   colorInput.addEventListener('input',(e)=>{alertUser();changeInk(e);});
   let rainbow=document.querySelector('.rainbow>button');
   rainbow.addEventListener('click',updateSwitchStatus);
}
function togglePenState()
{  let penBlinker=document.querySelector('.penstatus>div');
   let state=document.querySelector('.penstatus>div>span');
  if(penState==='off')
  { 
    state.textContent='ON';
    penBlinker.style['background-color']='green';
    activateColoring();
    penState='on';
  }
  else
  {  
     state.textContent='OFF';
     penBlinker.style['background-color']='red';
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
     alert('Enter a no. between 1 and 100');
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
  let color=document.querySelector('.rainbow>div');
  let updateText=document.querySelector('.rainbow>div>span');
  if(rainbowSwitch==='on')
  { 
    color.style.backgroundColor='red';
    updateText.textContent='OFF';
    rainbowSwitch='off';
    resetInkColor();
  }
  else
  {
    color.style.backgroundColor='green';
    updateText.textContent='ON';
    rainbowSwitch='on';
  }
}
function resetInkColor()
{
   ink=document.querySelector('#color').value;
}
function alertUser()
{
   if(rainbowSwitch==='on')
   {
    alert('First Switch off the rainbow mode');
   }
}
addDivs(10);
addEvents();  