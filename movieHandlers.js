const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    colors: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    colors: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

const getMovies = (req, res) => {
  res.json(movies);
};

const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);
  const movie = movies.find((movie) => movie.id === id);

  if (movie != null) {
    res.json(movie);
  } else {
    res.status(404).send("Not Found");
  }
};

const postMovie = (req, res) => {
  const newMovie = req.body;
  newMovie.id = movies.length + 1; // Assign a new ID
  movies.push(newMovie);
  res.status(201).json(newMovie);
};

const deleteMovie = (req, res) => {
    const id = parseInt(req.params.id);
    const movieIndex = movies.findIndex((movie) => movie.id === id);

    if (movieIndex === -1) {
        return res.status(404).send("Movie not found");
    }

    movies.splice(movieIndex, 1);
    res.status(200).send("Movie deleted successfully");
};

const updateMovie = (req, res) => {
  const id = parseInt(req.params.id);
  const movieIndex = movies.findIndex((movie) => movie.id === id);

  if (movieIndex === -1) {
      return res.status(404).send("Movie not found");
  }

  const updatedMovie = {
      ...movies[movieIndex],
      ...req.body
  };

  movies[movieIndex] = updatedMovie;
  res.status(200).json(updatedMovie);
};

module.exports = {
    getMovies,
    getMovieById,
    postMovie,
    deleteMovie,
    updateMovie, 
};
