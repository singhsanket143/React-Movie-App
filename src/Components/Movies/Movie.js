import React, { useEffect, useState } from "react";

export default function(props) {
    return (
        <div>
            <h2>{props.movie.Title}</h2>
            <img src={props.movie.Poster} />
            <h3>{props.movie.Year}</h3>
        </div>
    )
}