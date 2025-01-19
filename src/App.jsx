// DO NOT DELETE

import './App.css'
import Description from './Description'
import DogListContainer from './DogListContainer'
import Header from './Header'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {  
  return (
    <>
      <Header />
      <Description />
      <DogListContainer />
    </>
  )
}
