$(function() {
    var prefix = "https://cors-anywhere.herokuapp.com/";
    var url = 'https://restcountries.eu/rest/v1/name/';
    var countriesList = $('#countries');
    $('#search').click(searchCountries);
    $.ajaxSetup({ cache: false });
    function getCountryName() {
       $.getJSON(prefix + url, searchCountries); 
    }
    function searchCountries(input) {
        var countryName = $('#country-name').val();
        if(!countryName.length) countryName = 'Poland';
        $.ajax({
            url: url + countryName,
            method: 'GET',
            success: showCountriesList
        });
    };
    function showCountriesList(resp) {
        countriesList.empty();
        resp.forEach(function(item){
   	        $('<li>').text(item.name).appendTo(countriesList);
        });
    };
})