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

// const API_KEY = '1c5c067e324c39f9223ad13ef9891a0a';

// async function fetchTrending(page) {
//   try {
//     const URL = 'https://api.themoviedb.org/3/trending/movie/week';

//     const response = await fetch(`${URL}?api_key=${API_KEY}&page=${page}`);
//     return response.json();
//   } catch (error) {
//     // обработка ошибки получения данных с бэкэнда
//     console.error(error);
//   }
// }

// async function fetchTrailerById(filmId) {
//   try {
//     // console.log(filmId);
//     const URL = 'https://api.themoviedb.org/3/movie/';

//     const response = await fetch(`${URL}${filmId}/videos?api_key=${API_KEY}`);
//     return response.json();
//   } catch (error) {
//     // обработка ошибки получения данных с бэкэнда
//     console.error(error);
//   }
// }

// fetchTrending(1).then(result => {
//   // console.log(result);
// });

// fetchTrailerById(894205).then(result => {
//   // console.log(result.results[0]);
// });

// const bodyEl = document.querySelector('body');

// let link = `<iframe width="440" height="240" src='https://www.youtube.com/embed/QjrWxvhDE7I'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="trailer_video"></iframe>`;

// bodyEl.insertAdjacentHTML('afterend', link);

// Задача 1

function solution(str, ending) {
  if (str.endsWith(ending)) {
    return true;
  }
  return false;
}

// console.log(solution('abc', 'bc'));
// console.log(solution('abc', 'd'));

// Задача 2

function maskify(cc) {
  const newArray = [];
  if (cc.length > 4) {
    const replaceNumbers = cc.slice(0, cc.length - 4);
    const numbersArray = replaceNumbers.split('');
    for (let i = 0; i < numbersArray.length; i += 1) {
      const newNumbers = numbersArray[i].replace(numbersArray[i], '#');
      newArray.push(newNumbers);
    }
    const str = newArray.join('');
    const notReplaceStr = cc.slice(cc.length - 4, cc.length);
    return str + notReplaceStr;
  }
  return cc;
}

// console.log(maskify('4556364607935616'));
// console.log(maskify('1'));
// console.log(maskify('11111'));

// Задача 3

function findOdd(A) {
  const obj = {};
  for (let i = 0; i < A.length; i += 1) {
    let num = A[i];
    if (obj[num]) {
      obj[num] = obj[num] + 1;
    } else {
      obj[num] = 1;
    }
  }
  let r = null;
  for (let prop in obj) {
    if (obj[prop] % 2 !== 0) {
      r = prop;
    }
  }
  return Number(r);
}

// console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
// console.log(findOdd([0, 1, 0, 1, 0]));
// console.log(findOdd([0]));

// Задача 4
String.prototype.toJadenCase = function (str) {
  const arr = str.split(' ');
  const newArr = arr.map(word => word.replace(word[0], word[0].toUpperCase()));
  return newArr.join(' ');
};

// console.log(
//   String.prototype.toJadenCase(
//     "How can mirrors be real if our eyes aren't real"
//   )
// );

// Задача 5

function findEvenIndex(arr) {
  let index = -1;
  for (var i = 0; i < arr.length; i++) {
    let start = arr.slice(0, i + 1).reduce((a, b) => a + b, 0);
    let end = arr.slice(i).reduce((a, b) => a + b, 0);
    console.log(end);
    if (start === end) {
      index = i;
    }
    if (start === 0 && end === 0) {
      index = 4;
    }
  }
  return index;
}

// console.log('result', findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));
// console.log(findEvenIndex([0, 0, 0, 0, 0]));

// Задача 6

function filter_list(l) {
  const arr = [];
  for (el of l) {
    if (typeof el === 'number') {
      arr.push(el);
    }
  }
  return arr;
}

// console.log(filter_list([1, 2, 'a', 'b']));
// console.log(filter_list([1, 'a', 'b', 0, 15]));
// console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));

// Задача 7

var number = function (busStops) {
  let bus = 0;
  for (let i = 0; i < busStops.length; i += 1) {
    bus += busStops[i][0] - busStops[i][1];
  }
  return bus;
};

// console.log(
//   number([
//     [10, 0],
//     [3, 5],
//     [5, 8],
//   ])
// );

// Задача 8

function high(x) {
  let al = `abcdefghijklmnopqrstuvwxyz`.split('');
  let words = x.split(' ');
  let out = words.map(word => {
    let score = 0;
    let letters = word.split('');
    letters.map(c => {
      let point = al.indexOf(c) + 1;
      score += point;
    });
    return [word, score];
  });
  console.log(out);
  out = out.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    else if (a[1] < b[1]) return 1;
    else return 0;
  });

  return out[0][0];
}
// console.log(high('man i need a taxi up to ubud'));
// console.log(high('what time are we climbing up the volcano'));
// console.log(high('aa b'));

// Задача 9

function solution(str) {
  const arr = str.split('');
  let begin = -2;
  let end = 0;
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    begin += 2;
    end += 2;
    const newArr = arr.slice(begin, end);
    if (newArr.length === 1) {
      newArr[1] = '_';
    }
    if (newArr.length === 2) {
      result.push(newArr.join(''));
    }
  }
  return result;
}

// console.log(solution('abcdef'));
// console.log(solution('abcdefg'));

// Задача 10

function minMinMax(array) {
  const min = Math.min.apply(null, array);
  const max = Math.max.apply(null, array);
  const arr = array.sort((a, b) => b - a).reverse();
  let num = null;
  for (let i = 0; i < arr.length; i += 1) {
    if (!arr.includes(arr[i] + 1)) {
      num = arr[i] + 1;
      break;
    }
  }
  return [min, num, max];
}

// console.log(minMinMax([-1, 4, 5, -23, 24]));
// console.log(minMinMax([1, 3, -3, -2, 8, -1]));
// console.log(minMinMax([2, -4, 8, -5, 9, 7]));

// Задача 11

function stray(numbers) {
  const result = numbers.find(
    number => numbers.indexOf(number) === numbers.lastIndexOf(number)
  );
  return result;
}

// console.log(stray([1, 1, 2]));
// console.log(stray([1, 2, 1]));
// console.log(stray([2, 1, 1]));

const obj = {
  viktor: ['apple', 'grape', 'orange', 'apple', 'banana'],
  kate: ['grape', 'orange', 'apple', 'grape', 'banana'],
};

// function calc(data) {
//   //получаем значения массивов
//   const countArray = arr =>
//     arr.reduce((acc, val) => {
//       const obj = { ...acc, [val]: (acc[val] || 0) + 1 };
//       return obj;
//     }, {});
//   //получаем значение ключей
//   const countKeys = o =>
//     Object.keys(o).reduce(
//       (acc, key) => ({ ...acc, [key]: countArray(o[key]) }),
//       {}
//     );
//   return countKeys(data);
// }

// console.log(calc(obj));
//result of calc method should be equal to
// {
//     viktor: {
//         apple: 2,
//         grape: 1,
//         orange: 1,
//         banana: 1,
//     },
//     kate: {
//         apple: 1,
//         grape: 2,
//         orange: 1,
//         banana: 1,
//     },
// }

// Задача 12

function tribonacci(signature, n) {
  let arr = [...signature];
  for (let i = 0; i < n - 3; i += 1) {
    arr = [
      ...arr,
      arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 3],
    ];
  }
  if (n === 1) {
    return [arr[0]];
  }
  if (n === 2) {
    return [arr[0], arr[1]];
  }
  if (n === 0) {
    return [];
  }
  return arr;
}

// console.log(tribonacci([1, 1, 1], 10));

const arr = [1, 4, 6, [43, 54, [543, 4, 5, [8, 7, [12]]]]];

function flat(arr) {
  const arr1 = arr.flatMap(number => number);
  for (const number of arr1) {
    if (typeof number === 'object') {
      return flat(arr1);
    }
  }
  return arr1;
}

// console.log(flat(arr));
