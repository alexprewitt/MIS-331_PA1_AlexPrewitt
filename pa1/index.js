let movies = [
  { id: 1, title: "Inception", rating: 8.8, date: "2010", isFav: false },
  { id: 2, title: "The Matrix", rating: 8.7, date: "1999", isFav: true },
  { id: 3, title: "Interstellar", rating: 8.6, date: "2014", isFav: true }
];
let movieId = 4;
displayMovies(movies);

function readData(){
  const titleInput = document.getElementById("title");
  const ratingInput = document.getElementById("rating");
  const releaseYearInput = document.getElementById("releaseYear");
  let input = {
    id: movieId,
    title: titleInput.value,
    rating: ratingInput.value,
    date: releaseYearInput.value,
    isFav: false
  }
  if(input.title == "" || input.rating == "" || input.date == "") {
    alert("Please fill in all fields");
    return;
  }else{
    addMovie(input);
  }
}

function sortArray(arr) {}

function addMovie(movie) {
  movies.push(movie);
  movieId++;
  displayMovies(movies);
}

function favMovie(id) {
  movies.forEach(movie => {
    if(movie.id == id) {
      movie.isFav = true;
    }
  });
}

function deleteMovie() {
  const idInput = document.getElementById("movieID");
  movies.forEach(movie => {
    if(movie.id == idInput.value) {
      const index = movies.indexOf(movie);  //indexOf(movie) returns the index of the movie being deleted
      if(index > -1){
        movies.splice(index, 1);            //splice(index, 1) removes the movie at that index or returns -1 if not found
      }              
    }
  });
}

function displayMovies() {
  
  let html = "<table class=\"table-bordered\"> <tr><th>Movie ID</th><th>Title</th><th>Rating</th><th>Release Year</th><th>Favorited</th></tr>";

  movies.forEach(movie => {
    html += `<tr>
          <td>${movie.id}</td>
          <td>${movie.title}</td>
          <td>${movie.rating}</td>
          <td>${movie.date}</td>
          <td>${movie.isFav ? "Yes" : "No"}</td>
        </tr>`;
  });
  html += "</table>";
  document.getElementById("movieTable").innerHTML = html;
}
