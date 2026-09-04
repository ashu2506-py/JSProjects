document.addEventListener("DOMContentLoaded",()=>{
    const cityInput=document.getElementById("city-input")
    const getWeatherBtn=document.getElementById("get-weather-btn");
    const weatherInfo=document.getElementById("weather-info")
    const cityName=document.getElementById("city-name")
    const temperature=document.getElementById("temperature")
    const descriptions=document.getElementById("description")
    const errorMessage=document.getElementById("error-message")
    const API_Key="700bd3a1cb59eb84ed1b7b776b72aec7"

    getWeatherBtn.addEventListener("click",async ()=>{
        const city=cityInput.value.trim()
        if (!city) return;

        try {
            const weatherData= await fetchWeatherData(city);
            displayWeatherData(weatherData)
            
        } catch (error) {
           errorMessag();
        }

    })

    async function fetchWeatherData(city){
        const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_Key}`
        const response=await fetch(url);
        console.log(response)
        if (!response.ok){
            throw new Error ("CITY NOT FOUND");
        }
        const data=await response.json();
        return data;
    }

    function displayWeatherData(data){
        console.log(data)
        const {name,main,weather}=data;
        cityName.textContent=name
        temperature.textContent=`Temperature : ${main.temp}`;
        descriptions.textContent=`Weather : ${weather[0].description}`
        weatherInfo.classList.remove("hidden")
        errorMessage.classList.add("hidden")
    }

    function errorMessag(){
        errorMessage.classList.add("hidden")
        weatherInfo.classList.remove("hidden")
        
    }
})