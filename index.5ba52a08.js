const e=fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=1c308592d719c7668d47adc63622f209").then((e=>e.json())).then((({results:e})=>e)),t=(document.querySelector("img"),document.querySelector(".name"),document.querySelector(".film"),document.querySelector(".number"),document.querySelector("header"));e.then((e=>{e.map((e=>fetch(`https://api.themoviedb.org/3/movie/${e.id}?api_key=1c308592d719c7668d47adc63622f209`).then((e=>e.json())).then((e=>{!function(e){const n=e.genres,o=[];n.forEach((e=>{o.push(e.name)}));const c=o.join(", "),r=e.release_date.slice(0,4),i=`<img src="https://image.tmdb.org/t/p/w400${e.poster_path}" alt="" width="395" height="574" />\n<p class="name">${e.original_title}</p>\n<p class="film">${c} ${r}</p>\n<p class="number">${e.vote_average.toFixed(1)}</p>`;console.log(i),t.insertAdjacentHTML("beforeend",i)}(e)}))))}));
//# sourceMappingURL=index.5ba52a08.js.map
