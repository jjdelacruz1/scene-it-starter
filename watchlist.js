document.addEventListener('DOMContentLoaded', populateMovies)

 var watchListJSON = localStorage.getItem('watchlist');
 var watchList = JSON.parse(watchListJSON);

 console.log(watchList)

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

function populateMovies(){
  var movieContainer = document.getElementById('movies-container')
  movieContainer.innerHTML = renderMovies(watchList)
}


