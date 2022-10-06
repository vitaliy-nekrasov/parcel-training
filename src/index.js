const API_KEY = '1c308592d719c7668d47adc63622f209';
const optionsTrending = `trending/movie/week`;
const BASE_URL = `https://api.themoviedb.org/3/${optionsTrending}?api_key=${API_KEY}`;

const result = fetch(BASE_URL)
  .then(response => {
    return response.json();
  })
  .then(({ results }) => {
    return results;
  });

const imgEl = document.querySelector('img');
const nameEl = document.querySelector('.name');
const filmEl = document.querySelector('.film');
const numberEl = document.querySelector('.number');
const headerEl = document.querySelector('header');

// result
//   .then(result => {
//     const id = result[0].id;
//     return id;
//   })
//   .then(id => {
//     fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         console.log(data);
//         imgEl.setAttribute(
//           'src',
//           `https://image.tmdb.org/t/p/w400${data.poster_path}`
//         );
//         nameEl.textContent = `${data.original_title}`;
//         const genres = data.genres;
//         const array = [];
//         genres.forEach(element => {
//           array.push(element.name);
//         });
//         const string = array.join(', ');
//         const year = data.release_date;
//         filmEl.textContent = string + ' ' + year.slice(0, 4);
//         const vote = data.vote_average;
//         numberEl.textContent = vote.toFixed(1);
//       });
//   });

// function createMarkup(array) {
//   const markup = array.map(film => {
//     const markupString = `<img src="https://image.tmdb.org/t/p/w400${film.poster_path}" alt="" width="395" height="574" />
// <p class="name">${film.original_title}</p>
// <p class="film"></p>
// <p class="number">${film.vote_average}</p>`;
//     return markupString;
//   });
//   return markup.join(' ');
// }

result.then(result => {
  result.map(film =>
    fetch(`https://api.themoviedb.org/3/movie/${film.id}?api_key=${API_KEY}`)
      .then(response => {
        return response.json();
      })
      .then(film => {
        mark(film);
      })
  );
});

function mark(film) {
  const genres = film.genres;
  const array = [];
  genres.forEach(element => {
    array.push(element.name);
  });
  const string = array.join(', ');
  const year = film.release_date.slice(0, 4);
  const markupString = `<img src="https://image.tmdb.org/t/p/w400${
    film.poster_path
  }" alt="" width="395" height="574" />
<p class="name">${film.original_title}</p>
<p class="film">${string} ${year}</p>
<p class="number">${film.vote_average.toFixed(1)}</p>`;
  console.log(markupString);
  headerEl.insertAdjacentHTML('beforeend', markupString);
}
