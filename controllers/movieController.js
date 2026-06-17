const Movie=require("../models/Movie")

// Create Movie
const addMovie=async(req,res)=>{
    try{
        const movie =await Movie.create({
            name:req.body.name,
            cast:req.body.cast,
            genre:req.body.genre,
            language:req.body.language,
            year:req.body.year
        })
        res.status(201).json({
            message:"Movie added successfully",
            movie
        });
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

const getallMovies=async (req,res)=>{
    try{
        const movie=await Movie.find()
        res.status(201).json(
            {
                message:"All Movies"
            }
        );
    }
    catch(err){
        res.status(500).json({
            message:err.message
        });
    }
};

//get movoie by id
const getMoviebyID=async (req,res)=>{
    try{
        const movie=await Movie.findOne(req.params.id);
        res.status(201).json(
            {
                message:"Movie Details"
            }
        );
    }
    catch(err){
        res.status(500).json({
            message:err.message
        });
    }
};

// update movie

const updateMovie=async (req,res)=>{
    try{
        const movie=await Movie.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true,
                runValidators:true
            }
        );
        res.status(201).json(
            {
                message:"Movie Updated successfully",
                movie
            }
        );
    }
    catch(err){
        res.status(500).json({
            message:err.message
        });
    }
}

// delete movie
const deleteMovie=async (req,res)=>{
    try{
        const movie=await Movie.findByIdAndDelete(req.params.id);
        res.status(201).json(
            {   
                message:"Movie deleted successfully",
                movie
            }
        );
    }
    catch(err){
        res.status(500).json({
            message:err.message
        });
    }
}
module.exports= {
    addMovie,
    getallMovies,
    getMoviebyID,
    updateMovie,
    deleteMovie
};
