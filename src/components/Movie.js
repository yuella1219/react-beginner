import PropTypes from "prop-types";
import styles from "../css/index.module.css"
import {Link} from "react-router-dom";

function Movie({poster, title, summary, genres, id}){
    Movie.propTypes ={
        title : PropTypes.string.isRequired,
        poster : PropTypes.string.isRequired,
        summary : PropTypes.string.isRequired,
        genres : PropTypes.arrayOf(PropTypes.string).isRequired,
        id : PropTypes.number.isRequired,
    }
    return (
    <Link to={`/movie/${id}`}>
        <div className={styles.box}>
            <div className={styles.img_wrap}>
                    <img src={poster} alt={title + `'s poster`} />
            </div>
            <div className={styles.info_wrap}>
                <h2 className={styles.title_hover}>{title}</h2>
                <p className={styles.info_txt}>{summary}</p>
                <ul className={styles.genres_list}>
                    {genres.map((g) => (<li key={g} className={styles.list_icon}>{g}</li>))}
                </ul>
            </div>
        </div>
    </Link>
    );
}
//Link src 작성 법 > {`/경로/${불러 올 data값}` }
export default Movie;