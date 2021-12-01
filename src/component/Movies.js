import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";
import { Link } from 'react-router-dom';

function Movies({key, id, url, title, summary}){
   return(
    <Link to={{
      pathname:'./about',
      state : {
        summary : summary
      }
    
    }}>
    <div>
      <h5>id : {id}</h5>
      <h5>url : {url}</h5>
      <h5> title : {title}</h5>
    </div>
    </Link>
   )
   
}


Movies.propTypes = {
    id : PropTypes.number.isRequired,
    url : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired
}

export default Movies;