
var code=document.getElementById("generateNumber")


code.addEventListener('click',()=>{
   var pin=Math.round(1000+Math.random()*9000)
   var randomNumber= document.getElementById("number");
   randomNumber.value=pin
})


var keyPad = document.getElementById("keyPadValue")
var randomNumber= document.getElementById("number");

function handleClick(e){
   form.display.value= form.display.value+e
 
}


function handleSubmit(){
    var match =document.getElementById("match");
    var notMatch =document.getElementById("notMatch"); 
    var mainvalue= keyPad.value
    var randomN=randomNumber.value
    
   if(randomN===mainvalue){
    console.log("mileche");
    match.style.display="block"
   }else{
    notMatch.style.display="block"
   }
   
   
 
}






function handleClear(){
    keyPad.value=''
}

function handleDelete(){
    keyPad.value=0
}