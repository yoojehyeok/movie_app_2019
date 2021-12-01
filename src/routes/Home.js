import React from "react";
import Movie from "../component/Movies";
import axios from "axios"; 
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");

    this.setState({
      movies,
      isLoading : false
    });

  };
  componentDidMount() {
    this.getMovies();
    
  }

  render() {
    const { isLoading, movies } = this.state;
    return <div>{isLoading ? "Loading" : movies.map(movie =>{
      console.log(movie);
      return <Movie key={movie.id} id={movie.id} url={movie.url} title={movie.title} summary = {movie.summary}/>
    })}
    </div>;
  }
}

export default Home;
