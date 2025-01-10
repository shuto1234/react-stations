// DO NOT DELETE

import './App.css'
import React,{useState} from 'react'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {

  const [dogUrl, setDocUrl] = useState("https://images.dog.ceo/breeds/hound-plott/hhh-23456.jpg")

  return (
    <>
      <header>Dogアプリ</header>
      <body>
        <p>犬の画像を表示するサイトです</p>
        <img src={dogUrl}></img>
        <p>
          <button onClick={() => setDocUrl("https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg")}>クリック</button>
        </p>
      </body>
    </>
  )
}
