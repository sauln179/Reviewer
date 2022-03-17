var searchEl = document.getElementById("search-input");
var buttonEle = document.getElementById("m-button");
var outputEl = document.getElementById("output");

var mediaSearch = function(){
    var movie = searchEl.value;
    var input = movie.replaceAll(" ", '+');
    
    var requestUrl = 'https://api.themoviedb.org/3/search/movie?api_key=039516e5ffedf8edd44caa8482c60cda&language=en-US&query='+input+'&page=1&include_adult=false';
    console.log(requestUrl);
}
buttonEl.addEventListener("click", mediaSearch);