(async function(e){try{const t="https://api.themoviedb.org/3/trending/movie/week";return(await fetch(`${t}?api_key=1c5c067e324c39f9223ad13ef9891a0a&page=${e}`)).json()}catch(e){console.error(e)}})(1).then((e=>{})),async function(e){try{const t="https://api.themoviedb.org/3/movie/";return(await fetch(`${t}${e}/videos?api_key=1c5c067e324c39f9223ad13ef9891a0a`)).json()}catch(e){console.error(e)}}(894205).then((e=>{}));document.querySelector("body").insertAdjacentHTML("afterend",'<iframe width="440" height="240" src=\'https://www.youtube.com/embed/QjrWxvhDE7I\'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="trailer_video"></iframe>'),String.prototype.toJadenCase=function(e){return e.split(" ").map((e=>e.replace(e[0],e[0].toUpperCase()))).join(" ")};function e(e){return e.find((t=>e.indexOf(t)===e.lastIndexOf(t)))}console.log(e([1,1,2])),console.log(e([1,2,1])),console.log(e([2,1,1]));
//# sourceMappingURL=index.9492a7eb.js.map