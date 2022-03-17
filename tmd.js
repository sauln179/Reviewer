var searchEl = document.getElementById("search-input");
var buttonEle = document.getElementById("m-button");
var outputEl = document.getElementById("output");

var mediaSearch = function(){
    var movie = searchEl.value;
    var input = movie.replaceAll(" ", '%');
    
    var requestUrl = 'https://api.themoviedb.org/3/search/movie?api_key=039516e5ffedf8edd44caa8482c60cda&language=en-US&query='+input+'&page=1&include_adult=false';
    console.log(requestUrl);


fetch(requestUrl)
        .then(function(response) {
        return response.json();
    })
        .then(function(data) {
        // Checks if something is already in the output zone
        while (outputEl.firstChild) {
            outputEl.removeChild(outputEl.firstChild);
        }

        console.log(data);

        var date = [];
        var title = [];
        
        
        for (i = 0; i < 9; i++) {
            if (typeof data.docs[i].release_date !== 'undefined') {
                date.push(data.docs[i].release_date);
            }
            else {
                date.push('Unknown');
            }

            if (typeof data.docs[i].original_title !== 'undefined') {
                title.push(data.docs[i].title + ':' + data.docs[i].original_title);
            }
            else {
                title.push(data.docs[i].title);
            }

            // entire div box, containing the book and elements within
            var mediaBox = document.createElement('div');
            mediaBox.className = 'container px-6 py-20 bg-gray-100 m-2 shadow w-full min-w-xl';

            // Book Title and the Author's name
            var header = document.createElement('h2');
            header.className = 'text-2xl font-bold text-center text-gray-800 mb-8'
            header.textContent = title[i] + ' released on' + date[i];

            mediaBox.appendChild(header);
            outputEl.appendChild(mediaBox);

        }

        })
}
buttonEle.addEventListener("click", mediaSearch);
