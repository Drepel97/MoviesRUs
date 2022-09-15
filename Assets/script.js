const imdbKey = 'k_r35hmdo3'
let imdbId 


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

fetch ("https://api.watchmode.com/v1/title/tt0110413/sources/?apiKey=RnlyvnUUMGtLIR0G4HawMh6rI5tprrcGonEYHw4c")
.then(function (response) {

    return response.json();

})

.then(function(streamingData){

    console.log(streamingData);

})