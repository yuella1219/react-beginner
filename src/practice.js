import { useEffect, useState } from "react";
import React from 'react';
import axios from 'axios';
import styles from "./css/index.module.css";
import PracticeMovie from "./components/PracticeMovie.js";

class Practice extends React.Component{

  state = {
    isLoading : true,
    movies : []
  }
  getMovies = async ()=>{
    const {data : {data : {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log(movies);
    this.setState({movies:movies, isLoading : false})
  }
  async componentDidMount(){
    //컴포넌트가 렌더링 되기 전
    console.log("react done!");
    this.getMovies();
  }
  componentDidUpdate(){
    //컴포넌트가 업데이트(리렌더링) 될 때
    console.log('i just updated');
  }
  render() {
    console.log('rendered');//컴포넌트를 렌더링 할 때 마다
    const {isLoading, movies} = this.state;
    return (
      <div>
        <h1>{this.state.isLoading ? `Please Wait...` : `Update was done`}</h1>
        {movies.map(movies => {
          return(
            <PracticeMovie key={movies.id} id={movies.id} summary={movies.summary} year={movies.year} title={movies.title} poster={movies.medium_cover_image} genres={movies.genres}/>
            )
        })}
      </div>
    )
    
  }
}

export default Practice;
