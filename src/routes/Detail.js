import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/index.module.css"
import LoadingBar from "./LoadingBar.js"


function Detail(){
    const {id} = useParams();

    const [movie_detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
    const movie_info = async () => {
        const info_detail = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
          ).json();
        setDetail(info_detail.data.movie);
        setLoading(false);
    };
    
        movie_info();
    }, [])

    return(
        <div className={styles.detail_wrap}>
            {loading ? <LoadingBar/> : null}
            <h1 className={styles.detail_title}>{movie_detail.title}</h1>
            <div className={styles.detail_img}>
                <img src={movie_detail.large_cover_image} alt={movie_detail.title}/>
            </div>
            <p className={styles.detail_date}><span>{movie_detail.year}</span> . <span>{movie_detail.rating}</span></p>
            <p className={styles.detail_date}>Full Runtime : {movie_detail.runtime} min</p>
            <p className={styles.detail_des}>{movie_detail.description_intro}</p>
            
            <ul>
                {movie_detail.genres && movie_detail.genres.map((g) => <li className={styles.detail_genres} key={g}>{g}</li>)}
            </ul>
            <div className={styles.bg_img}>
                <img src={movie_detail.background_image_original} alt=""/>
            </div>
        </div>
    )
}

export default Detail;
