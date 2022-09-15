const imdbKey = 'k_r35hmdo3'
let imdbId 

fetch('https://imdb-api.com/API/FullCast/k_usqngafa/tt0110413')
.then(response => response.json())
.then(function(castData){
   console.log(castData)
   console.log(castList)
   let castList = castData.actors;

  for (let i = 0; i < castList.length; i++) {
      const actorList = castList[i];
      console.log(actorList.name)
  }
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









   


 
 
 
 
 
 
 


  
