const imdbKey = 'k_r35hmdo3'
let imdbId 


fetch("https://imdb-api.com/en/API/Trailer/k_r35hmdo3/tt1375666").then(response=> response.json()).then(data => console.log(data));

fetch ("https://imdb-api.com/en/API/Trailer/k_r35hmdo3/tt1375666")
.then(function (response) {
        
    return response.json();

})
    
.then(function(trailerData){
    
   console.log(trailerData); 
   let trailerVideo = trailerData.link;
   console.log(trailerVideo);
//    document.querySelector("#trailer").src = trailerVideo;


})