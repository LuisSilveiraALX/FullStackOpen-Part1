import { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}


const Button = ({ handleClick, text }) => {
  return (<button onClick={handleClick}>
    {text}
  </button>
  )
      
}

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne  = () => setCounter(counter -1)
  const resetClick = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
        <Button 
          text='+1' 
            handleClick={increaseByOne}
        />

      <Button 
          text='-1' 
            handleClick={decreaseByOne}
        />

      <Button 
      text='reset' 
          handleClick={resetClick}
        />
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)