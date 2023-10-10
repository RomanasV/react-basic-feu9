import { useState } from 'react'
import Container from './Components/Container/Container'

const CounterPage = () => {
  const [num, setNum] = useState(5);

  const minus1Handler = () => {
    setNum(num - 1)
  }

  const plus1Handler = () => {
    setNum(num + 1)
  }

  return (
    <Container>
      <h3>{num}</h3>
      <button onClick={minus1Handler}>-1</button>
      <button onClick={plus1Handler}>+1</button>
    </Container>
  )
}

export default CounterPage