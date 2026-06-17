const {
    addMovie,
    getallMovies,
    getMoviebyID,
    updateMovie,
    deleteMovie
}= require('../controllers/movieController');
const express = require("express")
const router = express.Router()

router.post("/movies", addMovie);
router.get("/movies", getallMovies);
router.get("/movies/:id", getMoviebyID);
router.put("/movies/:id", updateMovie);
router.delete("/movies/:id", deleteMovie);

module.exports = router;
