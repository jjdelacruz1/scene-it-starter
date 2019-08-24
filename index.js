var movies = null;
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

// var watchlist = [];

function clickMoviesContainer (evt) {
  // only do something when they click on a .add-movie-btn class
  const targetEl = evt.target
  // console.log(targetEl)
  const wasAddMovieBtnClicked = targetEl.classList.contains('add-movie-btn')
  if (!wasAddMovieBtnClicked) return

  // make sure the btn has a data-movieid attribute
  const movieId = targetEl.dataset.movieid
  
  if (typeof movieId !== 'string') return
  var movie = movies.find(function(currentMovie){
      if (currentMovie.imdbID == movieId) {
        return true;
      }  else {
        return false;
      }
  })
  
  var watchlistJSON = localStorage.getItem('watchlist')
  var watchlist = JSON.parse(watchlistJSON)
  
  if (watchlist === null) {
    watchlist = []
  } 
  watchlist.push(movie)
  // console.log(watchlist)
  watchlistJSON = JSON.stringify(watchlist)
  localStorage.setItem('watchlist', watchlistJSON)

}

function addEvents() {
  byId('search-form').addEventListener('submit', function(e){
    e.preventDefault();
    var searchString = document.getElementById('search-bar').value
    var urlEncodedSearchString = encodeURIComponent(searchString)
    axios.get("http://www.omdbapi.com/?apikey=3430a78&s=" + urlEncodedSearchString).then(function(response){
      console.log(response.data)
      var movieContainer = document.getElementById('movies-container')
      movies = response.data.Search;
      movieContainer.innerHTML = renderMovies(movies)
    })

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