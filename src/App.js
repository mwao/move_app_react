import { render } from '@testing-library/react';
import React from 'react';
import axios from "axios";
import Movies from './Movies';
import './App.css'
import PropTypes from 'prop-types';

class App extends React.Component{
  state={
    isLoading:true,
    movies:[]
  };
  getMovies=async ()=>{
    const {data:{data:{movies}}}=await axios.get("https://yts.mx/api/v2/list_movies.json");
    this.setState({movies,isLoading:false});
  }
  componentDidMount(){
    this.getMovies();  
  }
  render(){
    const {isLoading,movies}=this.state;
      return (
          <section className="container">
            {isLoading?<div className="loader">
<span className="loader_text">Loading</span>
            </div>:<div className="movies">{movies.map(movie=>{
              //console.log(movie);
              return <Movies key={movie.id} id={movie.id} year={movie.year} genres={movie.genres}title={movie.title} summary={movie.summary} poster={movie.medium_cover_image}/>;
  
            })}</div>
            }
          </section>
      );
  }
}

export default App;
