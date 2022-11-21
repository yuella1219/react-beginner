import { useState, useEffect } from "react";
import styles from "./index.module.css"

function CoinApp(){
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([])
    useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers").then((response) => response.json()).then((json) => {setCoins(json); setLoading(false)});
    }, [])
    return(
        <div>
            <h1>The Coins {loading ? null : coins.length}</h1>
            {loading ? <strong>Loading...</strong> : null}
            <ul className={styles.border_box}>
                {coins.map((coins)=> <li key={coins.id} className={styles.list_item}>{coins.name} | <span className={styles.symbol_wrap}>{coins.symbol}</span> | {coins.quotes.USD.price}</li>)}
            </ul>
        </div>
    )
}

export default CoinApp;