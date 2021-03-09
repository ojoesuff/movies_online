import React from "react";

const MovieCard = (props) => {
    return (
    <div>
        <h2>Title: {props.movie.title}</h2>
        <h3>Year: {props.movie.year}</h3>
        <h4>Rating: {props.movie.rating}</h4>
    </div>        
    )
}

export default MovieCard