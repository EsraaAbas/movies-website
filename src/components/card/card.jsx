import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdOutlineStarRate } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import style from './card.module.css';
import { useNavigate } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import {  useDispatch } from 'react-redux'; 
import { addMovie, removeMovie } from '../../store/slice/movieSlice'; 

const posterURL = 'https://image.tmdb.org/t/p/w500/';

function MovieCard({ movie , isfill}) {

    const navigate = useNavigate();
    const [isFilled, setIsFilled] = useState(isfill);

    const dispatch = useDispatch(); 

    const handleFavoriteToggle = () => {
        setIsFilled(!isFilled);
        if (!isFilled) {
            dispatch(addMovie(movie));
        } else {
            dispatch(removeMovie(movie));
        }
    };

    return (
        <>
            <Card style={{ width: '16rem' }} className='m-2'>
                {movie.poster_path === null ? (
                    <div className='fs-2 text-warning'> NO IMAGE LOADED ! </div>
                ) : (
                    <Card.Img className={style.img} variant="top" src={`${posterURL}${movie.poster_path}`} />
                )}
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <div> <MdOutlineStarRate /> {movie.vote_average}</div>
                    <div><BsPeople /> {movie.popularity}</div>
                    <div className='d-flex justify-content-between'>
                        <Button variant="primary mt-2" onClick={() => { navigate(`/detailes/${movie.id}`) }}>
                            Go To Show
                        </Button>
                        <span onClick={handleFavoriteToggle} style={{ cursor: "pointer" }}>
                            {isFilled ?
                            (
                                <FaStar className="fs-2 mt-2 text-warning"/>
                            ) 
                            : 
                            (
                                <FaRegStar className="fs-2 mt-2 text-warning"/>
                            )}
                        </span>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}

export default MovieCard;