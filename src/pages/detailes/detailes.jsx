import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import insrance from '../../ApiConfg/instance'
import Card from 'react-bootstrap/Card';

function Detailes() {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async () => {
        try {
            const movie = await insrance.get(`movie/${id}?`);
            console.log(movie.data);
            setMovie(movie.data)
        }
        catch (err) {
            console.log(err);

        }
    }

    getMovie();

    return (
        <>
            {movie ?

                <Card className="bg-dark text-white">
                    <div className='contanier'></div>
                    <Card.Img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Card image" />
                    <Card.ImgOverlay>

                    </Card.ImgOverlay>

                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        {movie.overview}
                    </Card.Text>
                    <Card.Text>runtime : {movie.runtime}</Card.Text>
                </Card>
                : "lodaing"
            }


        </>
    );
}

export default Detailes