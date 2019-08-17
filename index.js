document.addEventListener('DOMContentLoaded',function(){

// console.log(movieData)
function renderMovies(movieArray) {
  let movieHTML = movieArray.map(function(currentMovie){
    return `
              <div class="card cardStyle">
                <img class="card-img-top" src="${currentMovie.Poster}" alt="Movie Poster">
                <div class="card-body">
                  <h5 class="card-title">${currentMovie.Title}</h5>
                  <p class="card-text">${currentMovie.Year}</p>
                  <a href="#" class="btn btn-primary">Add</a>
                </div>
              </div>`
  })
  return movieHTML.join("")
}
var movieContainer = document.getElementById('movies-container')
movieContainer.innerHTML = renderMovies(movieData)
})