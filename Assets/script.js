let searchBar = document.querySelector("#searchBar");
let searchButton = document.querySelector("#searchButton");
let movieReview = document.querySelector("#movieReview");
const imdbKey = 'k_r35hmdo3';
let imdbId; 
let streamingDataEl = document.querySelector("#streamingData");
console.log(streamingDataEl);
let watchmodeKey = "RnlyvnUUMGtLIR0G4HawMh6rI5tprrcGonEYHw4c";
let castEl = document.querySelector("#cast");
let reviewEl = document.querySelector("#reviewEl");
let searchInput = searchBar.value;
let movieList = JSON.parse(localStorage.getItem("movie")) || [];
let recentlySearched = document.querySelector("#recentlySearched");
// .then(function(searchData){
//     let searchList = searchData.movie.title;
//     console.log(searchList);



searchButton.addEventListener("click", function(){
    
    if (castEl != ""){
        castEl.textContent = ""
    }

    if (streamingDataEl != ""){
        streamingDataEl.textContent = ""
    }

    if (reviewEl != ""){
        reviewEl.textContent = ""
    }
    
    console.log(searchBar.value);
    movieList.push(searchBar.value);
    renderBtn();
    localStorage.setItem("movie", JSON.stringify(movieList));
    
    // SEARCH MOVIE AND REVIEW
    fetch(`https://imdb-api.com/en/API/SearchMovie/${imdbKey}/` + searchBar.value)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        console.log(data.results[0].id)
        imdbId = data.results[0].id;
        getMovieData(imdbId)
    })
    
    function getMovieData(imdbId){
        fetch (`https://api.watchmode.com/v1/title/${imdbId}/sources/?apiKey=${watchmodeKey}`)
        .then(function (response) {
            
            return response.json();
            
        })
        
        .then(function(streamingData){
            let tempArray = [];
            for (let i = 0; i < streamingData.length; i++) {
                let streamingList = streamingData[i].name + ": " + streamingData[i].type;
                if (!tempArray.includes(streamingList)){
                    tempArray.push(streamingList)
                    console.log(streamingList); 
                    let streamingSource = document.createElement("li");
                    streamingSource.textContent = streamingList;
                    console.log(streamingSource);
                    streamingDataEl.append(streamingSource);
                }
            }
            
            //    tt1375666/
        })
        
        // TRAILER FETCH
        // need to make sure this is plugged into the input
        fetch (`https://imdb-api.com/en/API/Trailer/${imdbKey}/${imdbId}`)
        .then(function (response) {
            
            return response.json();
            
        })
        
        .then(function(trailerData){
            
            console.log(trailerData); 
            let trailerVideo = trailerData.link;
            let linkArray = trailerVideo.split("")
            console.log(linkArray, "after split")
            // linkArray.splice(27, 20);
            // console.log(linkArray, "after splice")
            trailerVideo = linkArray.join("");
            console.log(trailerVideo);
            document.querySelector("#trailer").href = trailerVideo;
            
        })
        
        
        fetch(`https://imdb-api.com/API/FullCast/${imdbKey}/${imdbId}`)
        .then(response => response.json())
        .then(function(castData){
            let castList = castData.actors;
            for (let i = 0; i < 10; i++) {
                const actorList = castList[i];
                console.log(actorList.name);
                let actorName = actorList.name;
                let castMember = document.createElement("li");
                castMember.textContent = actorName;
                castEl.append(castMember);
            }
        })
        
        fetch(`https://imdb-api.com/API/Reviews/${imdbKey}/${imdbId}/`)
        .then(response => response.json())
        .then(function(reviewData){
            console.log(reviewData)
            let reviewList = reviewData.items;
            for (let i = 0; i < 2; i++) {
                const itemsList = reviewList[i];
                console.log(itemsList.content);
                let reviewItems = itemsList.content;
                let movieReview = document.createElement("li");
                movieReview.textContent = reviewItems;
                reviewEl.append(movieReview);
                
                
                
                
            }
            
            searchBar.value = "";
        })
        
    }
    
})

function renderBtn(){
    recentlySearched.innerHTML = "";
    for (let i = 0; i < movieList.length; i++) {
        const movie = movieList[i];
        let newSearchBtn = document.createElement("button");
        newSearchBtn.textContent = movie;
        recentlySearched.append(newSearchBtn);
        newSearchBtn.classList.add("searchHistoryBtn");
    }
    
}
renderBtn();

recentlySearched.addEventListener("click", function(event){
    if(event.target.matches("button")) {
        getMovieData(event.target.textContent)
        


    }
})


// fetch ("https://imdb-api.com/en/API/Trailer/k_r35hmdo3/tt0110413")
// .then(function (response) {
    
    //     return response.json();
    
    // })
    
    // .then(function(trailerData){
    
//     console.log(trailerData); 
//     let trailerVideo = trailerData.link;
//     let linkArray = trailerVideo.split("")
//     linkArray.splice(27, 20);
//     trailerVideo = linkArray.join("");
//     console.log(trailerVideo);
//     document.querySelector("#trailer").href = trailerVideo;
    
// })


// fetch('https://imdb-api.com/API/FullCast/k_usqngafa/tt0110413')
// .then(response => response.json())
// .then(function(castData){
//     console.log(castData)
//     let castList = castData.actors;
//     console.log(castList)
    
//     for (let i = 0; i < castList.length; i++) {
//         const actorList = castList[i];
//         console.log(actorList.name)
        
//     }
// })
// .then(function(searchData){
//     let searchList = searchData.movie.title;
//     console.log(searchList);

// .then(function(movieReview){
//     fetch('https://imdb-api.com/API/Reviews/k_dl1tf84m/tt1375666/' + movieReview.value)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
    
// })

// searchButton.addEventListener("click", function(){
//     console.log(searchBar.value);
    
    // fetch('https://imdb-api.com/en/API/SearchMovie/k_dl1tf84m/' + searchBar.value)
    // .then((response) => response.json())
    // .then((data) => console.log(data));


// })

