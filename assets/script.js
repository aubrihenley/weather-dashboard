// https://openweathermap.org/api/one-call-api

// create buttons for previously searched city

var searchCityEl =$('#search-form');
var searchHistoryEl = $('#addBtnSearch')

function handleCitySubmit(event) {
    event.preventDefault();

    var searchedCity = $('input[name="searchCityInput"]').val();

    if (!searchedCity) {
        console.log('Please enter a city!');
        return;
    }

    searchHistoryEl.append('<button type="button" class="btn btn-primary">' + searchedCity + '</button>');

    // clears input element
    $('input[name="searchCityInput"]').val('');
}

searchCityEl.on('click', handleCitySubmit)
