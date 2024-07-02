import React from "react";
import { useState, useEffect } from "react";

import Button  from "../../components/Button";
import Modal from "../../components/Modal";
import Slider from "../../components/slider";
import api from "../../services/api";
import { getImages } from '../../utils/getImages';
import { Background, Container, ContainerButtons, Info, Poster } from "./styles.js";



function Home() {
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [topPeople, setTopPeople] = useState();

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results },
      } = await api.get("/movie/popular");

      setMovie(results[4]);
    }

    async function getTopMovies() {
      const {
        data: { results },
      } = await api.get("/movie/top_rated");
      
      setTopMovies(results);
    }

    async function getTopSeries() {
      const {
        data: { results },
      } = await api.get("/tv/top_rated");
      
      setTopSeries(results);
    }

    async function getPopularSeries() {
      const {
        data: { results },
      } = await api.get("/tv/popular");
      
      setPopularSeries(results);
    }

    async function getTopPeople() {
      const {
        data: { results },
      } = await api.get("/person/popular");
      
      setTopPeople(results);
    }    
    
    getMovies();
    getTopMovies();
    getTopSeries();
    getPopularSeries();
    getTopPeople();
  }, []);

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)} >
          { showModal && ( 
            <Modal movieId={movie.id} setShowModal={setShowModal}/>
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button red>
                  Assista Agora
                </Button>
                <Button onClick={() => (setShowModal(true))} >
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img 
                alt="capa-do-filme" 
                src={getImages(movie.poster_path)} />
            </Poster>

          </Container>

        </Background>
      )}
      { topMovies && <Slider info={topMovies} title={'Top Filmes'}/> }
      { topSeries && <Slider info={topSeries} title={'Top Series'}/> }
      { popularSeries && <Slider info={popularSeries} title={'Series Populares'}/> }
      { topPeople && <Slider info={topPeople} title={'Artistas Populares'}/> }
      
    </>
  );
}
export default Home;
