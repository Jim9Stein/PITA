// `http://www.omdbapi.com/?apikey=[ed16eeb8]&`
// `http://img.omdbapi.com/?apikey=[ed16eeb8]&`


// const moviesImg = fetch(`http://img.omdbapi.com/?apikey=ed16eeb8&`)



const searchBtn = document.querySelector('.search__btn');
const searchInput = document.querySelector('.search-bar');
const resultsContainer = document.querySelector('.results__container');
const form = document.querySelector('.search-bar__wrapper')
const apiKey = 'ed16eeb8';
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

function filterMovies(filter) {
    if (filter === "New_To_Old") {
        movies.sort((a, b) => parseInt(b.Year) - parseInt(a. Year));
      } else if (filter === "Old_To_New") {
            movies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
        } else if (filter === "A-Z") {
            movies.sort((a, b) => a.Title.localeCompare(b.Title));
        } else if (filter === "Z-A") {
            movies.sort((a, b) => b.Title.localeCompare(a.Title));
        }

        resultsContainer.innerHTML = '';
        renderMovies();
}

filterEl.addEventListener("change", (e) => {
    filterMovies(e.target.value);
});

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const searchTerm = searchInput.value.trim();

    if(!searchTerm) {
        resultsContainer.innerHTML = '<p> Please enter search term.</p>';
        return;
    }

    resultsContainer.innerHTML = '<p>Loading...</p>';

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${ed16eeb8}&s=${encodeURIComponent(searchTerm)}`);
        const data = await response.json();
    }

}
