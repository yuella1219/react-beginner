import React from "react";
import PropTypes from "prop-types";

function PracticeMovie({id, year, title, summary, poster, genres}){
    return(
        <div>
            <p>id {id}</p>
            <p>year {year}</p>
            <p>title {title}</p>
            <p>summary {summary}</p>
            <img src={poster} alt={title}/>
            <div>
                {genres.map((id, index) => (<b key={index}>{id}&nbsp;&nbsp;</b>))}
            </div>
        </div>
    )
} 

export default PracticeMovie;