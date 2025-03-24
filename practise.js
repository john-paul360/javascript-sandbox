// const movies = [
//   { id: 1, title: "Die Hard", director: "Bruce Willis", rating: 3.4 },
//   { id: 2, title: "Mission Impossible 1", director: "Tom Cruise", rating: 4.5 },
//   { id: 3, title: "Little Miss forest", director: "John Doe", rating: 4.1 },
//   { id: 4, title: "Mission Impossible 2", director: "Tom Cruise", rating: 4.4 },
// ];

// //get movies rated 4.0 and above

// get me movies directed by tom cruise

// get the movie that has an id of 3

// get movies that are rated less than 4

//write a function searchMovie that takes a searchTerm as a parameter
//return the movie if it is in the array and returns no movie found if the
// searchTerm is not in the array

// const searchMovie = (searchteam)

// const ratedAbove = movies.filter((movie) => movie.rating >= 4.0);
// console.log(ratedAbove);

// const directedTom = movies.filter((movie) => {
//     return movie.director === "Tom Cruise"
// });
// console.log(directedTom);

// const idThree = movies.find((movie) => movie.id === 3);


const movies = [
  { id: 1, title: "Die Hard", director: "Bruce Willis", rating: 3.4 },
  { id: 2, title: "Mission Impossible 1", director: "Tom Cruise", rating: 4.5 },
  { id: 3, title: "Little Miss forest", director: "John Doe", rating: 4.1 },
  { id: 4, title: "Mission Impossible 2", director: "Tom Cruise", rating: 4.4 },
];
// mission
// miss
//get movies rated 4.0 and above
//4.0 and above
const topRatedMovies = movies.filter((movie) => movie.rating >= 4);

console.log(topRatedMovies);

// get me movies directed by tom cruise
const moviesDirectedByTom = movies.filter(
  (movie) => movie.director.toLowerCase() === "tOm cRuiSE".toLowerCase()
);
console.log(moviesDirectedByTom);

// get the movie that has an id of 3
const moviesWithId3 = movies.find((movie) => movie.id === 3);
console.log(moviesWithId3);

// get movies that are rated less than 4

const lessRatedMovies = movies.filter((movie) => movie.rating < 4);

//write a function searchMovie that takes a searchTerm as a parameter
//return the movie if it is in the array and returns no movie found if the
// searchTerm is not in the array

const searchMovie = (searchTerm) => {
  const convertedSearchTerm = searchTerm.toLowerCase();
  const search = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(convertedSearchTerm);
  });
  if (search.length > 0) {
    return search;
  } else {
    return "No movies Found";
  }
};

console.log(searchMovie("hell boy"));
