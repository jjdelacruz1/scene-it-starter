document.addEventListener('DOMContentLoaded',function(){

// console.log(movieData)
function renderMovies(movieArray) {
  let movieHTML = movieArray.map(function(currentMovie){
    return `<div class="card-deck">
    <div class="card">
      <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${currentMovie.Title}</h5>
        <p class="card-text">${currentMovie.Year}</p>
        <a href="#" class="btn btn-primary">Add</a>
      </div>
    </div>	
  </div>`
  })
  return movieHTML.join("")
}
var movieContainer = document.getElementById('movie')
movieContainer.innerHTML = renderMovies(movieData)
})