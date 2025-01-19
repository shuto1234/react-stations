// @ts-check
import { useEffect, useState } from "react";


export const DogListContainer = () => {
  const [breeds, setBreeds] = useState()
  
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res1 => {
        console.log("listのデータを受け取った", res1)
        return res1
      })
      .then(res2 => res2.json())
      .then(res3 => {
        console.log("listのJSONのデータを取得", res3)
        return res3
      })
      .then((res4) => 
        {setBreeds(res4.message)}
      );
  },[]);

  console.log("breedsの中身の確認", breeds)

  return (
    <>
      <div>
        <select>
          <option></option>
        </select>
      </div>
    </>
  );
}

export default DogListContainer
