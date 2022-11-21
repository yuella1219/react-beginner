import styles from "../css/index.module.css"
import { useState, useEffect} from "react"
import PropTypes from "prop-types";

function LoadingBar(){
    return (
        <div className={styles.dimBox}>
            <div className={styles.loader}></div>
        </div>
    )
}

export default LoadingBar;