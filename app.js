const express = require("express");
const app = express();
const port = 5000;

// Middleware pour analyser les corps des requêtes JSON
app.use(express.json());

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

// Importation des gestionnaires et des middlewares
const movieHandlers = require("./movieHandlers");
const userHandlers = require("./userHandlers");
const { verifyPassword, verifyToken } = require("./auth");

// Routes publiques
app.get("/api/movies", movieHandlers.getMovies);
app.get("/api/movies/:id", movieHandlers.getMovieById);
app.post("/api/users", userHandlers.postUser); // route d'enregistrement
app.post(
  "/api/login",
  userHandlers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
); // route de connexion

// Mur d'authentification: toutes les routes après cette ligne nécessiteront une authentification
app.use(verifyToken);

// Routes protégées
app.post("/api/movies", movieHandlers.postMovie);
app.put("/api/movies/:id", movieHandlers.updateMovie);
app.delete("/api/movies/:id", movieHandlers.deleteMovie);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened", err);
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
