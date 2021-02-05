import React from 'react';
import PropTypes from 'prop-types';

function Movies({id,year,title,summary,poster,genres}){
    return (
    <div className="movie">
        <img src={poster} alt={title} title={title}></img>
        <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="movie_genre">  
             {genres.map((genre,index)=>{
             console.log(genre);
              return  <li key={index}className="movie_genre_item">{genre}</li>}
                )}
            </ul>
          <p className="movie_summary">{summary}</p>
            
        </div>
    </div>
    );
}

Movies.propTypes={
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movies;