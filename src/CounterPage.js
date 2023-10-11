import { useState } from 'react'
import Container from './Components/Container/Container'

const CounterPage = () => {
  const initialNum = 5
  const [num, setNum] = useState(initialNum)
  const [grades, setGrades] = useState([10, 5, 1, 6, 7])

  const counterButtonsHandler = numDifference => setNum(prevNum => prevNum + numDifference)
  const resetHandler = () => setNum(initialNum)
  const inputHandler = event => {
    // setNum(event.target.valueAsNumber)
    setNum(Number(event.target.value))
  }

  const addGradeHandler = () => {
    setGrades(prevState => {
      const newState = [...prevState]
      newState.unshift(num)
      return newState
    })
  }

  const color = num < 5 ? 'red' : 'green'

  return (
    <Container>
      <input
        type='number'
        min={1}
        max={10}
        value={num}
        onChange={inputHandler}
      />

      <h3 style={{ color }}>{num}</h3>
      <button onClick={() => counterButtonsHandler(-5)} disabled={num <= 5}>-5</button>
      <button onClick={() => counterButtonsHandler(-2)} disabled={num <= 2}>-2</button>
      <button onClick={() => counterButtonsHandler(-1)} disabled={num <= 1}>-1</button>
      <button onClick={resetHandler}>Reset</button>
      <button onClick={() => counterButtonsHandler(1)} disabled={num > 9}>+1</button>
      <button onClick={() => counterButtonsHandler(2)} disabled={num > 8}>+2</button>
      <button onClick={() => counterButtonsHandler(5)} disabled={num > 5}>+5</button>
      <button onClick={addGradeHandler}>Add Grade</button>

      <div>
        <h4>Grades:</h4>
        <ul>
          {grades.map((grade, index) => (
            <li key={index}>
              {grade}
              <button>X</button>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}

export default CounterPage