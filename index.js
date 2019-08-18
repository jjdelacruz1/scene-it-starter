
// console.log(movieData)
function renderMovies(movieArray) {
  let movieHTML = movieArray.map(function(currentMovie){
    return `
              <div class="card cardStyle">
                <img class="card-img-top" src="${currentMovie.Poster}" alt="Movie Poster">
                <div class="card-body">
                  <h5 class="card-title">${currentMovie.Title}</h5>
                  <p class="card-text">${currentMovie.Year}</p>
                  <button type="button" id="addBtn" data-movieid="${currentMovie.imdbID}" class="btn btn-primary btn-block add-movie-btn">Add</a>
                </div>
              </div>`
  })
  return movieHTML.join("")
}

// function saveToWatchlist(imdbID){
//   console.log("save to watchlist clicked!", imdbID)
// }

function clickMoviesContainer (evt) {
  // only do something when they click on a .add-movie-btn
  const targetEl = evt.target
  if (!targetEl.classList.contains('add-movie-btn')) return

  // make sure the btn has a data-movieid attribute
  const movieId = targetEl.dataset.movieid
  if (typeof movieId !== 'string') return

  console.log('you clicked on movie id: ', movieId)

}

function addEvents() {
  byId('search-form').addEventListener('submit', function(e){
    e.preventDefault();
    var movieContainer = document.getElementById('movies-container')
    movieContainer.innerHTML = renderMovies(movieData)
  })
  byId('movies-container').addEventListener('click', clickMoviesContainer)
}

function byId (id) {
  return document.getElementById(id)
}

function init () {
  addEvents()
}

document.addEventListener('DOMContentLoaded', init)