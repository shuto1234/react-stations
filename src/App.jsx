// DO NOT DELETE

import './App.css'
import React,{useEffect, useState} from 'react'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {

  
  // fetch("https://dog.ceo/api/breeds/image/random")
  //   .then(response => {
    //     console.log("データを受け取った。", response)
    //   })
  // fetch("https://dog.ceo/api/breeds/image/random")
  //   .then((res) => res.json())
  //   .then((json) => {
  //     console.log("データを受け取った", json);
  //   })

  const [dogUrl, setDocUrl] = useState("https://images.dog.ceo/breeds/hound-plott/hhh-23456.jpg")
  
  function loadedDog () {
    // useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => {
              console.log("データを受け取った。", response)
              return response
            })
        .then(res => res.json())
        .then(response => {
          console.log("JSONに変換されたデータを受け取った", response);
          return response
        })
        .then((result) => 
            // setDocUrl(result)
            {
            setDocUrl(result.message);
          },
          (error) => {
            setDocUrl(error);
          }); 
      // },[]);
  }

  return (
    <>
      <header>Dogアプリ</header>
      <body>
        <p>犬の画像を表示するサイトです</p>
        <img src={dogUrl}></img>
        <p>
          <button onClick={loadedDog}>クリック</button>
        </p>
        <div>
          {dogUrl}
        </div>
      </body>
    </>
  )
}
