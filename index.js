document.addEventListener('DOMContentLoaded',function(){

// console.log(movieData)
function renderMovies(movieArray) {
  let movieHTML = movieArray.map(renderMovie)
  return movieHTML.join("")
}

function renderMovie(currentMovie) {
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
}



$('.movie').html = renderMovies(movieData)
})