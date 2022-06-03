import './styles/main.scss'
import navi from './assets/navi.jpeg'

const naviImg = document.getElementById('navi')
naviImg.src = navi

document.getElementById("on-click").addEventListener("click", onclick);

function onclick(){
    reset();
    var inputValue = document.getElementById("searchText").value;
    getMovies(inputValue);
}

let article = document.createElement("article");
let h3 = document.createElement("h3");
let h4 = document.createElement("h4");
let img = document.createElement("img");

async function getMovies(text){
    let responsefromAPI = await fetch(`http://www.omdbapi.com/?s=${text}&apikey=f84c9e9b`);
    let movies = await responsefromAPI.json();
    let movieList = movies.Search;
    
    movieList.forEach(movie => {    
        let movieId = document.querySelector("#movies");
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.innerHTML = movie.Title;
        let h4 = document.createElement("h4");
        h4.innerHTML = movie.Year;
        let img = document.createElement("img");
        img.setAttribute("src", movie.Poster);
        img.setAttribute("alt", movie.Title);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(img);
        movieId.appendChild(article);
    });
}

function reset(){
    let what = document.querySelector("#movies");
    document.querySelector("#movies").innerHTML = '';
}

