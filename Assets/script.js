let searchBar = document.querySelector("#searchBar");
let searchButton = document.querySelector("#searchButton");
let movieReview = document.querySelector("#movieReview")
const imdbKey = 'k_r35hmdo3'
let imdbId 



searchButton.addEventListener("click", function(){
    console.log(searchBar.value);
    
    fetch('https://imdb-api.com/en/API/SearchMovie/k_dl1tf84m/' + searchBar.value)
    .then((response) => response.json())
    .then((data) => console.log(data));
})

fetch("https://imdb-api.com/en/API/Trailer/k_r35hmdo3/tt0110413").then(response=> response.json()).then(data => console.log(data));

fetch ("https://imdb-api.com/en/API/Trailer/k_r35hmdo3/tt0110413")
.then(function (response) {
        
    return response.json();

})
    
.then(function(trailerData){
    
   console.log(trailerData); 
   let trailerVideo = trailerData.link;
   let linkArray = trailerVideo.split("")
   linkArray.splice(27, 20);
   trailerVideo = linkArray.join("");
   console.log(trailerVideo);
   document.querySelector("#trailer").href = trailerVideo;

})


// .then(function(searchData){
//     let searchList = searchData.movie.title;
//     console.log(searchList);

// .then(function(movieReview){
//     fetch('https://imdb-api.com/API/Reviews/k_dl1tf84m/tt1375666/' + movieReview.value)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
    
// })


