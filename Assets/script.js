
   


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
