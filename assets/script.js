let currentCity = document.querySelector('#currentCity')
let currentDate = document.querySelector('#currentDate')
let todayTemp = document.querySelector('#todayTemp')
let todayHumid = document.querySelector('#todayHumid')
let todayWind = document.querySelector('#todayWind')

let day1Forecast = document.querySelector('#day1Forecast');
let day2Forecast = document.querySelector('#day2Forecast');
let day3Forecast = document.querySelector('#day3Forecast');
let day4Forecast = document.querySelector('#day4Forecast');
let day5Forecast = document.querySelector('#day5Forecast');

let day1Temp = document.querySelector('#day1Temp')
let day2Temp = document.querySelector('#day2Temp')
let day3Temp = document.querySelector('#day3Temp')
let day4Temp = document.querySelector('#day4Temp')
let day5Temp = document.querySelector('#day5Temp')

let day1Wind = document.querySelector('#day1Wind')
let day2Wind = document.querySelector('#day2Wind')
let day3Wind = document.querySelector('#day3Wind')
let day4Wind = document.querySelector('#day4Wind')
let day5Wind = document.querySelector('#day5Wind')

let day1Humid = document.querySelector('#day1Humid')
let day2Humid = document.querySelector('#day2Humid')
let day3Humid = document.querySelector('#day3Humid')
let day4Humid = document.querySelector('#day4Humid')
let day5Humid = document.querySelector('#day5Humid')

let submitBtn = document.querySelector('#submitBtn')
// let inputCity = document.querySelector('#inputCity')


let apiKey = "fa2c3cfe8bd2e87e7cafad8a2079cf35";
let cityName = "dallas";
let cityData;
let latLonData;
let cityNM;

// flashes in the log for a millisecond then refreshes
submitBtn.addEventListener('click', function(){
    cityNM = document.querySelector('#inputCity').value
    
})
console.log(cityNM)


fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`)
    .then(function (response) {

        return response.json()

    })
    .then(function (cityData) {


        console.log(cityData[0].lat);
        console.log(cityData[0].lon);

        return { lat: cityData[0].lat, lon: cityData[0].lon }

    })
    .then(function (latLonData) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latLonData.lat}&lon=${latLonData.lon}&appid=${apiKey}&units=imperial`)
            .then(function (response) {

                return response.json()

            })
            .then(function (currentCast) {
                currentCity.textContent = currentCast.name
                todayTemp.textContent = currentCast.main.temp
                todayHumid.textContent = currentCast.main.humidity
                todayWind.textContent = currentCast.wind.speed

                // console.log(currentCast);
            })
    })


fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`)
    .then(function (response) {

        return response.json()

    })
    .then(function (cityData) {


        // console.log(cityData[0].lat);
        // console.log(cityData[0].lon);

        return { lat: cityData[0].lat, lon: cityData[0].lon }

    })
    .then(function (latLonData) {
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latLonData.lat}&lon=${latLonData.lon}&appid=${apiKey}&units=imperial`)
            .then(function (response) {

                return response.json()

            })
            .then(function (foreCast) {
                day1Temp.textContent = foreCast.list[0].main.temp
                day2Temp.textContent = foreCast.list[8].main.temp
                day3Temp.textContent = foreCast.list[16].main.temp
                day4Temp.textContent = foreCast.list[24].main.temp
                day5Temp.textContent = foreCast.list[39].main.temp

                day1Wind.textContent = foreCast.list[0].wind.speed
                day2Wind.textContent = foreCast.list[8].wind.speed
                day3Wind.textContent = foreCast.list[16].wind.speed
                day4Wind.textContent = foreCast.list[24].wind.speed
                day5Wind.textContent = foreCast.list[39].wind.speed

                day1Humid.textContent = foreCast.list[0].main.humidity
                day2Humid.textContent = foreCast.list[8].main.humidity
                day3Humid.textContent = foreCast.list[16].main.humidity
                day4Humid.textContent = foreCast.list[24].main.humidity
                day5Humid.textContent = foreCast.list[39].main.humidity

                // console.log(foreCast);
            })
    })







