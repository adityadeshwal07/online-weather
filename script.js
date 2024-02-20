const apikey = "79ae0a4b88f7be62899b6f3b4c9bbc28";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox =document.querySelector(".search input");
const searchBtn =document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city){
    const response= await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();
    
   
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds")
    {
        weatherIcon.scr = "clouds.png";
    }
    else if(data.weather[0].main == "Clear")
    {
        weatherIcon.scr = "clear.png";
    }
    else if(data.weather[0].main == "Rain")
    {
        weatherIcon.scr = "rain.png";
    }
    else if(data.weather[0].main == "Drizzle")
    {
        weatherIcon.scr = "drizzle.png";
    }
    else if(data.weather[0].main == "Mist")
    {
        weatherIcon.scr = "mist.png";
    }

    document.querySelector(".weather").style.display =" block";
    document.querySelector(".error").style.display = "none";
}
}
searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
})