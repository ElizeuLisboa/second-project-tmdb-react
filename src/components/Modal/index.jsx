import React from "react";

import api from "../../services/api";
import { Container, Background } from "./styles"
import { useEffect, useState } from "react";

function Modal({ movieId, setShowModal }) {
    const [movie, setMovie] = useState()
    useEffect(() => {
        async function getMovies() {
            const {
                data: { results },
            } = await api.get(`/movie/${movieId}/videos`);

            setMovie(results[0]);
        }
        getMovies()
    }, [])

    return (
        <Background onClick={() => setShowModal(false)}>
            {movie && (
                <Container>
                    <iframe
                        src={`https://www.youtube.com/embed/${movie.key}`}
                        title="YouTube Video Player"
                        height="500px"
                        width="100%"
                    ></iframe>
                    <div>{movieId}</div>
                </Container>
            )}
        </Background>
    )

}

export default Modal