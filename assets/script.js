// // https://openweathermap.org/api/one-call-api   APIKey 5c5a571775e8eded1b0f694bee36a7b4
// //https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// // search by city name api.openweathermp.org/daata/2.5/weather?q={city name}&appid={API key}

var APIKey ='5c5a571775e8eded1b0f694bee36a7b4';

//search bar selectors
var userCityInputEl =$('#searchCity');
var searchButtonEl = $('#searchBtn');
var searchCityEl =$('#search-form');
var searchHistoryEl = $('#addBtnSearch');

//current weather selectors
var currentWeather = $('#current-city-weather');
var cityEl = $('#currentCityName');
var currentTempEl = $('#currentTemp');
var currentWindEl = $('#currentWindSpeed');
var currentHumidityEl = $('#currentHumidity') ;
var currentUviEl = $('#currentUVI');
var currentIcon = $('#currentWeatherIcon');

//5-day Forecast selectors
var forecastDateEl = $('#forecast-date');
var forecastIconEl = $('.forecast-icon');
var forecastTempEl = $('#forecast-temp');
var forecastTempEl = $('#forecast-wind');
var forecastHumidityEl = $('#forecast-humidity');

var today = moment();
$("#currentDate").text(today.format("MMM Do, YYYY"));

localStorage.setItem("city", userCityInputEl);

function getApi() {
  // var userInput = userCityInputEl.Value.trim();
  var userInput = 'Asheboro'
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&units=imperial&appid=' + APIKey;
    console.log(requestUrl)
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data){
      console.log(data);
      console.log("data type", typeof data);
      
      cityEl.text(data.name);
      
      var cityLat = (data.coord.lat);
      var cityLong =(data.coord.lon);
      var oneCallURL = 'https://api.openweathermap.org/data/2.5/onecall?lat='+ cityLat +'&lon=' + cityLong + '&units=imperial&exclude=hourly,minutely,alerts&appid=' + APIKey;

    fetch(oneCallURL)
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        console.log(data);

        currentTempEl.text(data.current.temp +'\xB0' + 'F');
        currentWindEl.text(data.current.wind_speed);
        currentHumidityEl.text(data.current.humidity);
        currentUviEl.text(data.current.uvi);

      })
    });
}
getApi();

// function getApi() {
//     var userInput =userCityInput.Value.trim();
//   // fetch request gets gets Latitude and longitude based on user input.
//   var requestUrl = 'https://api.openweathermp.org/daata/2.5/weather?q=' + userInput +'&appid=' + APIKey ;
// console.log(requestUrl);
//   fetch(requestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data)

//   })
//   .on('click', getApi)
// }
// // create buttons for previously searched city

// var searchCityEl =$('#search-form');
// var searchHistoryEl = $('#addBtnSearch')

// function handleCitySubmit(event) {
//     event.preventDefault();

//     var searchedCity = $('input[name="searchCityInput"]').val();

//     // if (!searchedCity) {
//     //     console.log('Please enter a city!');
//     //     return;
//     // }

//     searchHistoryEl.append('<button type="button" class="btn btn-primary">' + searchedCity + '</button>');

//     // clears input element
//     $('input[name="searchCityInput"]').val('');
//  }

// searchCityEl.on('click', handleCitySubmit)






    // var requestOneCall = 'https://api.openweathermap.org/data/2.5/onecall?lat='+ latitude +'&lon=' + longitude + '&units=imperial&exclude=hourly,minutely,alerts&appid=5c5a571775e8eded1b0f694bee36a7b4'