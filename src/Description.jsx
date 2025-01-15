// @ts-check 
// import DogImage from "./DogImage"
import { useState } from "react";
import DogImage from "./DogImage";

export const Description = () => {
  const [dogUrl, setDocUrl] = useState("https://images.dog.ceo/breeds/hound-plott/hhh-23456.jpg")

  function loadedDog () {
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
          {
          setDocUrl(result.message);
        },
        (error) => {
          setDocUrl(error);
        }); 
  };

  return (
    <section>
      <div className='explanation'>犬の画像を表示するサイトです</div>
      <div className='imagePage'>
        <DogImage imageUrl={dogUrl} />
        <p>
          <button className="button" onClick={loadedDog}>クリック</button>
        </p>
      </div>
    </section>    
  )
};

export default Description
