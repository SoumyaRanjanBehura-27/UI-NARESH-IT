function btnclick() {
   var mass = parseFloat(document.getElementById("weightinput").value);
   var height = parseFloat(document.getElementById("heightinput").value);
   var age =parseFloat(document.getElementById("ageinput").value);
   
   var BMI = (mass/(height*height)*10000);
   document.getElementById("result").innerHTML=BMI;
}