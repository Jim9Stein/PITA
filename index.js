// `http://www.omdbapi.com/?apikey=[ed16eeb8]&`
// `http://img.omdbapi.com/?apikey=[ed16eeb8]&`


// const moviesImg = fetch(`http://img.omdbapi.com/?apikey=ed16eeb8&`)



const searchBtn = document.querySelector('.search__btn');
const searchInput = document.querySelector('.search-bar');
const resultsContainer = document.querySelector('.results__container');
const form = document.querySelector('.search-bar__wrapper')
const apiKey = 'd0e2373f';
const filterEl = document.getElementById("filter")
let movies = []

function openMenu() {
  document.body.classList += " menu--open";
  console.log("hello")
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

function renderMovies() {
  movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        movieCard.innerHTML = `
          <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150x220?text=No+Image'}" alt="${movie.Title}">
          <h3>${movie.Title}</h3>
          <p>${movie.Year}</p>
        `;

        resultsContainer.appendChild(movieCard);
      });
}

