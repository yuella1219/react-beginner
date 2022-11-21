import styles from "../css/index.module.css"

function LoadingBar(){
    return (
        <div className={styles.dimBox}>
            <div className={styles.loader}></div>
        </div>
    )
}

export default LoadingBar;