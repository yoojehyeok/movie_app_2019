import React from "react";
import Movie from "./Movies";
import axios from "axios"; 

class App extends React.Component {
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
      return <Movie key={movie.id} id={movie.id} url={movie.url} title={movie.title}/>
    })}
    </div>;
  }
}

export default App;
