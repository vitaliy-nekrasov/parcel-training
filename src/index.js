// const API_KEY = '1c308592d719c7668d47adc63622f209';
// const optionsTrending = `trending/movie/week`;
// const BASE_URL = `https://api.themoviedb.org/3/${optionsTrending}?api_key=${API_KEY}`;

// const result = fetch(BASE_URL)
//   .then(response => {
//     return response.json();
//   })
//   .then(({ results }) => {
//     return results;
//   });

// const imgEl = document.querySelector('img');
// const nameEl = document.querySelector('.name');
// const filmEl = document.querySelector('.film');
// const numberEl = document.querySelector('.number');
// const headerEl = document.querySelector('header');

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

// result.then(result => {
//   result.map(film =>
//     fetch(`https://api.themoviedb.org/3/movie/${film.id}?api_key=${API_KEY}`)
//       .then(response => {
//         return response.json();
//       })
//       .then(film => {
//         mark(film);
//       })
//   );
// });

// function mark(film) {
//   const genres = film.genres;
//   const array = [];
//   genres.forEach(element => {
//     array.push(element.name);
//   });
//   const string = array.join(', ');
//   const year = film.release_date.slice(0, 4);
//   const markupString = `<img src="https://image.tmdb.org/t/p/w400${
//     film.poster_path
//   }" alt="" width="395" height="574" />
// <p class="name">${film.original_title}</p>
// <p class="film">${string} ${year}</p>
// <p class="number">${film.vote_average.toFixed(1)}</p>`;
//   console.log(markupString);
//   headerEl.insertAdjacentHTML('beforeend', markupString);
// }

// const API_KEY = '1c5c067e324c39f9223ad13ef9891a0a';

// async function fetchTrending(page) {
//   try {
//     const URL = 'https://www.googleapis.com/youtube/v3';

//     const response = await fetch(`${URL}`);
//     return response.json();
//   } catch (error) {
//     // обработка ошибки получения данных с бэкэнда
//     console.error(error);
//   }
// }

// fetchTrending(2).then(result => {
//   console.log(result.results[0].video);
// });

const API_KEY = '1c5c067e324c39f9223ad13ef9891a0a';

async function fetchTrending(page) {
  try {
    const URL = 'https://api.themoviedb.org/3/trending/movie/week';

    const response = await fetch(`${URL}?api_key=${API_KEY}&page=${page}`);
    return response.json();
  } catch (error) {
    // обработка ошибки получения данных с бэкэнда
    console.error(error);
  }
}

async function fetchTrailerById(filmId) {
  try {
    console.log(filmId);
    const URL = 'https://api.themoviedb.org/3/movie/';

    const response = await fetch(`${URL}${filmId}/videos?api_key=${API_KEY}`);
    return response.json();
  } catch (error) {
    // обработка ошибки получения данных с бэкэнда
    console.error(error);
  }
}

fetchTrending(1).then(result => {
  console.log(result);
});

fetchTrailerById(894205).then(result => {
  console.log(result.results[0]);
});

const bodyEl = document.querySelector('body');

let link = `<iframe width="440" height="240" src='https://www.youtube.com/embed/QjrWxvhDE7I'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="trailer_video"></iframe>`;

bodyEl.insertAdjacentHTML('afterend', link);
