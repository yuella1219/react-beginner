import { useEffect, useState } from "react"
import React from 'react';
import styles from "./css/index.module.css"

class Practice extends React.Component{

  state = {
    isLoading : true,
    movies : []
  }

  componentDidMount(){
    //컴포넌트가 렌더링 되기 전
    console.log("react done!");
  }
  componentDidUpdate(){
    //컴포넌트가 업데이트(리렌더링) 될 때
    console.log('i just updated');
  }
  render(){
    console.log('rendered');//컴포넌트를 렌더링 할 때 마다
    const {isLoading} = this.state;
    return (
      <div>
        <h1>{this.state.isLoading ? `Please Wait...` : null}</h1>
      </div>
    )
    
  }
}

export default Practice
