// @ts-check
import { useState } from "react";
// @ts-ignore

export const BreedsSelect = ({ breeds, selectedBreed, onChange, dogList, clickChange }) => {


  console.log(breeds);


  const dogs = Object.keys(breeds);
  console.log("dogs", dogs)

  const imageDogs = Object.values(dogList)
  console.log("imageDogs", imageDogs)
  

  return (
    <>   
      <div>
        <h3 className="h3">選択してください</h3>
        <div className="flex">
          <select 
            value={selectedBreed} 
            onChange={onChange
              // (event) => console.log("選択したデータ", event.target.value)
              // setSelectBreed(value)
            }
          >
              <option>select</option>
            {dogs.map((dog) => (
              <option key={dog} value={dog}>
                {dog}
              </option>
              ))}
          </select>
          <button className="button2" onClick={clickChange} >表示</button>
        </div>
      </div>
      <div className="imageDogs">
        {imageDogs.map((imageDog) => (
          <img src={imageDog} className="imageDog"/>
        ))}
      </div>
    </>
  );
}

export default BreedsSelect
