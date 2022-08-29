var resultTextEl = document.querySelector("#result-text");
var resultContentEl = document.querySelector("#result-content");
var searchFormEl = document.querySelector("#search-form");

function getParams() {
    /* Get the search params out of the URL (i.e. `?q=london&format=photo`) 
    and convert it to an array (i.e. ['?q=london', 'format=photo']) */
    var searchParamsArr = document.location.search.split("&");

    // Get the query and format values
    var query = searchParamsArr[0].split("=").pop();
    var format = searchParamsArr[1].split("=").pop();

    // console.log(query, format);

    searchApi(query, format);
}

function printResults(resultObj) {
    console.log(resultObj);

    // set up `<div>` to hold result content
    //resultContentEl

}


// add query and format to locQueryURL, fetch API, call printResults
// cors-anywhere.herokuapp.com/
function searchApi(query, format) {
    var locQueryUrl = "https://cors-anywhere.herokuapp.com/https://www.loc.gov/search/?fo=json&q=" + query + "&format=" + format;
    //var locQueryUrl = "https://www.loc.gov/search/?fo=json&q=civil%20war";
    console.log(locQueryUrl);

    fetch(locQueryUrl)
    .then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
    })
}

function handleSearchFormSubmit(event) {
    event.preventDefault();
    console.log("submit button has been pressed");
}

searchFormEl.addEventListener("submit", handleSearchFormSubmit);

getParams();
