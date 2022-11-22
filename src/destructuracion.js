import ReactDOM from 'react-dom'

const Hello = ({ name, age }) => {

const bornYear = () => {
    return new Date().getFullYear() - age
  }

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

ReactDOM.render(<Hello name='Luis Silveira' age='24'/>, document.getElementById('root')) 