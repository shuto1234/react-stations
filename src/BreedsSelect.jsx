// @ts-check
import { useState } from "react";
// @ts-ignore

export const BreedsSelect = ({ breeds, selectBreed, setSelectBreed, onChange }) => {

  const [ selectedBreed, setSelectedBreed ] = useState()
  console.log(breeds);


  const dogs = Object.keys(breeds);
  // const selectDogs = dogs.map((dog) =>
  //   <li key={dog.toString()}>{dogs}</li>
  // );
  console.log("dogs", dogs)
  
  return (
    <>   
      <div>
        <select 
          value={selectedBreed} 
          onChange={onChange
            // (event) => console.log("選択したデータ", event.target.value)
            // setSelectBreed(value)
          }
        >
          {dogs.map((dog) => (
            <option key={dog} value={dog}>
              {dog}
            </option>
            ))}
        </select>
            <p>{selectBreed}わからない</p>
      </div>
    </>
  );
}

export default BreedsSelect
