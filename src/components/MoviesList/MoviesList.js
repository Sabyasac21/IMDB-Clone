import React, {useEffect, useState} from "react"
import "./moviesList.css"
import { useParams } from "react-router-dom"
import Card from "../header/card/Card"

// Here this movieList component is reusing cards component to display the cards with specific type..


const MoviesList=()=>{
    const [moviesList, setMoviesList] = useState([])
    const {type} = useParams()

    useEffect(()=>{
        getData()
    }, [])

    useEffect(()=>{
        getData()
    }, [type])

    function getData(){
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMoviesList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type?type:"POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    moviesList.map(movie=>{return <Card  key={movie.id} movie={movie}/>}
                        
                    )
                }
            </div>
        </div>
    )
}

export default MoviesList;