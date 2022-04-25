// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


//http://img.omdbapi.com/?apikey=cb68f94f
//http://www.omdbapi.com/?i=tt3896198&apikey=cb68f94f

let movie_div = document.getElementById("movies");
let id;

async function searchMovies() {

    try {
        const query = document.getElementById("query").value;
        console.log(query);

        const res = await fetch(`http://www.omdbapi.com/?apikey=cb68f94f&s=${query}`)

        const data = await res.json();

        const movies = data.Search;
        
        appendMovies(movies);
    } catch (err) {
        console.log("err:", err)
    }
}

function appendMovies() {
    if(data === undefined){
        return false;
    }

    movie_div.innerHTML = null;
    data.forEach(function (el){
        let p = document.createElement("p");

        p.innerText = el.Title;

        movie_div.append(p);
        console.log(movie_div);
    })
}

async function main() {
    let data = await searchMovies();
console.log(data)
    if(data === undefined)
    return false;

    appendMovies(data);
}

function debounce(func, delay) {
    if(id) {
        clearInterval(id);
    }

    id = setTimeout(function (){
        func();

    }, delay)
}

