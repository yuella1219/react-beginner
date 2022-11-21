import PropTypes from "prop-types";
import styles from "./index.module.css"

function Button({text}){
    return(
        <div className={styles.btn_wrap}>
            <button className={styles.btn_default}>{text}</button>
        </div>
    )
}

Button.propTypes ={ //그놈의 대소문자
    text : PropTypes.string
}

export default Button;
//다른 파일에 연결 해 쓸 거면 항상 export(내보내기) 해 주기