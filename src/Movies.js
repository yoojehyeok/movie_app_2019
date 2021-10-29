import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

function Movies({key, id, url, title}){
   return(
    <div>
      <h5>id : {id}</h5>
      <h5>url : {url}</h5>
      <h5> title : {title}</h5>
    </div>
   )
   
}


Movies.propTypes = {
    id : PropTypes.number.isRequired,
    url : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired
}

export default Movies;