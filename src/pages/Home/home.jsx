import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../../components/card/card.jsx";
import Button from "react-bootstrap/Button";
import { movieThunk } from "../../store/slice/moviesReduxThunk.js";
import style from "./home.module.css";
function Home() {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.movies);

    useEffect(() => {
        dispatch(movieThunk(page)); 
    }, [page, dispatch]); 


    const goToNewPage = () => {
        setPage(page + 1);
    };

    const goToPrePage = () => {
        if (page > 1) setPage(page - 1); 
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
                <div className={style.button_div}>
                    <Button onClick={goToPrePage} variant="dark fs-4">{"<<"}</Button>
                    <Button onClick={goToNewPage} variant="dark fs-4">{">>"}</Button>
                </div>
            </div>
        </>
    );
}

export default Home;
