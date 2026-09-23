var cityname="Hyderabad";
var API_KEY="4d6bd0e4c4acbc88b524e1e49761b06f"
function loadweather(){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}&units=metric`)
.then(function(response){
    return response.json();
})
.then(function(data){
    document.getElementById("lblcity").innerHTML=data.name;
    document.getElementById("lbltemp").innerHTML=`${data.main.temp.toFixed(0)}&deg;C`;
    document.getElementById("lbldescription").innerHTML=data.weather[0].description.toUpperCase();
    document.getElementById("lblspeed").innerHTML=`${data.wind.speed.toLocaleString('en-in',{style:'unit', unit:'kilometer-per-hour'})}<span class="bi bi-wind"></span>`;
    document.getElementById("lblhumidity").innerHTML = `${data.main.humidity} <span class="bi bi-thermometer"></span>`
})


}
function searchclick(){
    cityname=document.getElementById("txtcity").value;
    loadweather();
}
function cityweather(cityName){
cityname=cityName;
loadweather();
}