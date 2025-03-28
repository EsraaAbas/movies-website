import React, { useState, useEffect } from "react";
import MovieCard from "../../components/card/card.jsx";
import { useSelector } from "react-redux";

const FavMovies = () => {
    const [movies, setMovies] = useState([]);

    const favMovies = useSelector((state) => state.favoriteMovies.movies);

    useEffect(() => {
        setMovies(favMovies);
        console.log(favMovies);
    }, [favMovies]);

    return (
        <>
        {favMovies.length === 0 && (
            <div className="container mt-5 text-center">
                <h2 className="text-warning  fs-1">No Favorite Movies Added yet !</h2>
                
                </div>)}
            <div className="container">
                <div className="row">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} isfill={true} />
                    ))}
                   
                </div>
            </div>

        </>
    );
};

export default FavMovies;