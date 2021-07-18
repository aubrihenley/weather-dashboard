// // https://openweathermap.org/api/one-call-api   APIKey 5c5a571775e8eded1b0f694bee36a7b4
// //https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// // search by city name api.openweathermp.org/daata/2.5/weather?q={city name}&appid={API key}

// var APIKey ='5c5a571775e8eded1b0f694bee36a7b4';
// var userCityInput =document.getElementById('searchCity');

// var currentWeather = document.getElementById('current-city-weather');
// var fetchButton = document.getElementById('searchBtn');

// function getApi() {
//     var userInput =userCityInput.Value.trim();
//   // fetch request gets gets local forecast based on user input.
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


function getApi() {
    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=asheboro&appid=5c5a571775e8eded1b0f694bee36a7b4';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
      });
    }

    getApi();