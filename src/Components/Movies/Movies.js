import React, { useEffect, useState, useContext } from "react";
import Movie from "./Movie";
import { AppContext } from "../../Context/SearchContext";
const API_KEY = "67353b44";
//let series = [];
export default function () {

    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const {state, setState} = useContext(AppContext);

    useEffect(() => {
        setSeries(state);
        const promises = series.map(s => {
            return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${s}`)
            .then(res => res.json())
        });
        Promise.all(promises).then(movie => {
            setMovies(movie.map(currentMovie => currentMovie.Search));
        });
        
    }, [state, series]);
    return <div>
        {movies.flat(2).map(movie => {
            return (movie && <Movie key={movie.imdbID} movie={movie}></Movie>)
        })}
        State is {state}
    </div>
}