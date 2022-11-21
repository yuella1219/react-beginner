import { useState, useEffect } from "react";
import styles from "../css/index.module.css"
import Movie from '../components/Movie.js';
import LoadingBar from "./LoadingBar.js";

function MovieApp(){

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    // const getMovies = async()=> {
        // await를 쓰기 위한 async. api에서 정보를 불러오기 전 까지 함수실행을 대기시킨다.
    //     const json = await (
    //         await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)).json();
    //         setMovies(json.date.movies);
    //         setLoading(false);
    // }
    const getMovies = async () => {
        const json = await (
          await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)).json();
        setMovies(json.data.movies);
        setLoading(false);
      };

    useEffect(()=> {
        //fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`).then((response)=> response.json()).then((json) => {setMovies(json.data.movies); setLoading(false)});
        //fetch('값을 받아 올 API 주소).then((인자 명) => 인자.json(배열)으로 받아 올 거야()).then((인자) => {변수명(인자의 데이터를 넣기); 변수명(로딩바 종료의 false)})
        getMovies(); 
    },[])


    return(
        <div className={styles.inner_wrap}>
            {loading ? <LoadingBar/> : null}
            <h1 className={styles.com_title}>{loading ? null : `Movie List` }</h1>
            <div className={styles.list_whole_wrap}>
                {movies.map((movie) => (<Movie key={movie.id} poster={movie.medium_cover_image} title={movie.title} id={movie.id} summary={movie.summary} genres={movie.genres}/>))}
            </div>
        </div>
    )
}

export default MovieApp;