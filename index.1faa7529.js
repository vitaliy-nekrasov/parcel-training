(async function(e){try{const o="https://api.themoviedb.org/3/trending/movie/week";return(await fetch(`${o}?api_key=1c5c067e324c39f9223ad13ef9891a0a&page=${e}`)).json()}catch(e){console.error(e)}})(1).then((e=>{console.log(e)})),async function(e){try{console.log(e);const o="https://api.themoviedb.org/3/movie/";return(await fetch(`${o}${e}/videos?api_key=1c5c067e324c39f9223ad13ef9891a0a`)).json()}catch(e){console.error(e)}}(894205).then((e=>{console.log(e.results[0])}));document.querySelector("body").insertAdjacentHTML("afterend",'<iframe width="440" height="240" src=\'https://www.youtube.com/embed/QjrWxvhDE7I\'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="trailer_video"></iframe>');
//# sourceMappingURL=index.1faa7529.js.map
