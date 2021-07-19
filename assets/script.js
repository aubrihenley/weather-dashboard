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

//5-day Forecast selectors
var forecastDateEl = $('#forecast-date');
var forecastIconEl = $('.forecast-icon');
var forecastTempEl = $('#forecast-temp');
var forecastTempEl = $('#forecast-wind');
var forecastHumidityEl = $('#forecast-humidity');

var today = moment();
$("#currentDate").text(today.format("MMM Do, YYYY"));


function getApi() {
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=asheboro&units=imperial&appid=' + APIKey;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data){
      console.log(data)
      for (var i = 0; i < data.length; i++) {
      
      console.log(data[i].main.name);


      }
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


// function getApi() {
//     // fetch request gets a list of all the repos for the node.js organization
//     var requestUrlLatLon = 'https://api.openweathermap.org/data/2.5/weather?q=asheboro&units=imperial&appid=' + APIKey;
  
//     fetch(requestUrlLatLon)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log('longitude & latitude \n----------') 
//         for (var i = 0; i < data.length; i++) {
//           console.log(data[i].coord.lat);
//           console.log(data[i]);
//       };
//     });
// }
    

//     getApi();

    // var requestOneCall = 'https://api.openweathermap.org/data/2.5/onecall?lat='+ latitude +'&lon=' + longitude + '&units=imperial&exclude=hourly,minutely,alerts&appid=5c5a571775e8eded1b0f694bee36a7b4'