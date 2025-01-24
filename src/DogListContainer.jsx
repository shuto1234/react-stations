// @ts-check
import { useEffect, useState } from "react";
import BreedsSelect from "./BreedsSelect";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState("")
  const [ selectedBreed, setSelectedBreed ] = useState()
  const [ dogList, setDogList ] = useState("")
  function onChange(e) {
    setSelectedBreed(e.target.value);
    console.log("selectedBreedの確認", selectedBreed)
    fetch('selectedBreed')
    // .then(res1 => {
    //   console.log("selectedBreed", res1)
    //   return res1
    // })
    // console.log("dogBreedUrlの確認", dogBreedUrl)
  }
  
  function clickChange () {
    const dogBreedUrl = `https://dog.ceo/api/breed/${selectedBreed}/images/random/12`;
    // const dogBreedUrl = `https://dog.ceo/api/breed/hound/images/random/3`;
    // setDogList(dogBreedUrl.toString())
    fetch(dogBreedUrl)
      .then(res1 => {
        console.log("dogBreedUrlデータを受け取った", res1)
        return res1
      })
      .then(res2 => res2.json())
      .then(res3 => {
        console.log("dogBreedUrlのJSONのデータを取得", res3)
        return res3
      })
      .then((res4) => 
        {setDogList(res4.message)}
      );
    
    // const dogImage = new URL(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
      // fetch(dogImage)
      // .then(res1 => {
      //   console.log("データを受け取った", res1)
      //   return res1
      // })
      // .then(res2 => res2.json())
      // .then(res3 => {
      //   console.log("JSONのデータを取得", res3)
      //   return res3
      // })
      // .then((res4) => dogImage = res4);
  }
  
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
      <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} onChange={onChange} dogList={dogList} clickChange={clickChange} />
    </>
  );
}

export default DogListContainer
