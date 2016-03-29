var mlsec = 0; 
var sec = 0;  
var mins = 0;  

function changeButn(){
var a=document.getElementById('butn').value;  
if(a=='Start'){
document.getElementById('butn').value='Pause';  
}
else if(a=='Pause'){
document.getElementById('butn').value='Start';  
}
stopwatch(); 
}

function stopwatch(){
var x=document.getElementById('butn').value; 
if (x=='Pause'){  
   mlsec++; 
  if (mlsec == 9) {
   mlsec = 0;
   sec = sec + 1; 
}
  else {
   sec = sec;
}  
  if (sec == 60) {
   sec = 0; 
   mins += 1; 
} 

 var display=document.getElementById('display');

 display.innerHTML= ((mins<=9) ? "0"+mins : mins) + " : " + ((sec<=9) ? "0" + sec : sec) + " : " + mlsec+"0"; 

timer=window.setTimeout("stopwatch();", 100);
}  
}  

function reset(){   //ф-я сброса
var display=document.getElementById('display');  
mlsec = 0;
sec = 0;
mins = 0; 
display.innerHTML='00 : 00 : 00';
changeButn();
}