document.addEventListener('DOMContentLoaded',function(){

// console.log(movieData)
function renderMovies(movieArray) {
  let movieHTML = movieArray.map(function(currentMovie){
    return `
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 mt-3">
            <div class="card-deck">
              <div class="card" style="width: 50px;">
                <img class="card-img-top" src="${currentMovie.Poster}" alt="Movie Poster">
                <div class="card-body">
                  <h5 class="card-title">${currentMovie.Title}</h5>
                  <p class="card-text">${currentMovie.Year}</p>
                  <a href="#" class="btn btn-primary">Add</a>
                </div>
              </div>	
            </div>
          </div>
        </div>
      </div>`
  })
  return movieHTML.join("")
}
var movieContainer = document.getElementById('movie')
movieContainer.innerHTML = renderMovies(movieData)
})