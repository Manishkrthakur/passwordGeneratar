let inputSlider=document.getElementById("inputSlider");
let sliderValue =document.getElementById("sliderValue");
let lowercase=document.getElementById("lowercase");
let passBox=document.getElementById("passBox");
let Uppercase=document.getElementById("Uppercase");
let Number=document.getElementById("Number");
let Symbol=document.getElementById("Symbol");
let genBtn=document.getElementById("genBtn");
let copyIcon=document.getElementById("copyIcon");



sliderValue.textContent=inputSlider.value;

inputSlider.addEventListener('input',()=>{
    sliderValue.textContent=inputSlider.value;

})

genBtn.addEventListener("click",()=>{
    passBox.value=generaterPassword();
})

let upperchar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerchar="abcdefghijklmnopqrstuvwxyz";
let allNumbers="0123456789";
let symbols="@~!#$%^&*-+/?";

function generaterPassword(){
    let pasgenerat="";
    let allChar=""
    allChar += lowercase.checked ? lowerchar : "";
    allChar += Uppercase.checked ? upperchar : "";
    allChar += Number.checked ? allNumbers : "";
    allChar += Symbol.checked ? symbols : "";

  let i=1;
  while(i <= inputSlider.value){
    pasgenerat +=  allChar.charAt(Math.floor(Math.random()* allChar.length));
          i++;
      }

    return pasgenerat;

}
copyIcon.addEventListener("click",()=>{
    navigator.clipboard.writeText(passBox.value);
})