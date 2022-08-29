var searchFormEl = document.querySelector('#search-form');


function handleSearchFormSubmit(event) {
  event.preventDefault();
  var searchInput = document.querySelector("#search-input");
  var formatInput = document.querySelector("#format-input");

  var searchInputVal = searchInput.value;
  var formatInputVal = formatInput.value;

  var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;
  console.log(queryString);
  location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
