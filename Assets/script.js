let searchBar = document.querySelector("#searchBar");
let movieSearch = document.querySelector("#movieSearch");












// fetch('https://imdb-api.com/API/Reviews/k_dl1tf84m/tt1375666')
// .then((response) => response.json())
// .then((data) => console.log(data));
movieSearch.addEventListener("click", function(){
    console.log(searchBar.value);
    
    fetch('https://imdb-api.com/en/API/SearchMovie/k_dl1tf84m/' + searchBar.value)
    .then((response) => response.json())
    .then((data) => console.log(data));

})