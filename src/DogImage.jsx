// @ts-check

// 動作において imageUrl は問題はstation8時点では発生していない。このままでクリアした。
export const DogImage = ({ imageUrl }) => {
  return (
    <img src={imageUrl} className='image'></img>
  );
};

export default DogImage
