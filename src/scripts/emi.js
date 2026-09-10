function calEmi(){
var p=parseInt(document.getElementById("txtamount").value);
var r=parseInt(document.getElementById("txtrate").value)/12/100;
var n=parseInt(document.getElementById("txtyear").value)*12;

var emi = p*r*(Math.pow(1+r,n))/(Math.pow(1+r,n))-1;
document.getElementById("result").innerHTML=emi.toLocaleString('en-in',{style:'currency',currency:'INR',minimumFractionDigits:0,maximumFractionDigits:0});
} 
function amountchange(){
    document.getElementById("txtamount").value =document.getElementById("rangeamount").value;
}
function yearchange(){
    document.getElementById("txtyear").value = document.getElementById("rangeyear").value;
}
function ratechange(){
    document.getElementById("txtrate").value = document.getElementById("rangerate").value;
}