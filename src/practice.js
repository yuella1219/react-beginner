import { useEffect, useState } from "react"
import styles from "./index.module.css"

function Practice(){
//프라미스, async, await 써 보기
//네이버 오픈 api - img검색결과 새 창 띄우기
//검색값 넣을 input 만들기
//submit 할 버튼과 form 만들기

  const [word, setWord] = useState("");
  const [search, setSearch] = useState([]);

  const newWord = (event)=> {
    setWord(event.target.value);
  }

  const naverAPI = async () => {
    const imgSearch = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)).json();
      setSearch(imgSearch.data);
      console.log(search)
  }
  const naverSearch = (event)=>{
    event.preventDefault();
  }

    useEffect(()=>{
      naverAPI();
      console.log('complete');
    }, [])

  return(
    <div>
      <form onSubmit={naverSearch}>
        <input type="text" onChange={newWord}/>
        <button type="button" className={styles.btn_default}>검색하기</button>
      </form>
    </div>
  )
}

export default Practice;
