import Container from '../../Components/Container/Container'
import { v4 as uuid } from 'uuid'
import TodoList from '../../Components/TodoPageComponents/TodoList/TodoList'
import { useState } from 'react'
import TodoForm from '../../Components/TodoPageComponents/TodoForm/TodoForm'

const TodoPage = () => {
  const initialData = [
    {
      id: uuid(),
      date: '2023-10-16',
      title: 'Task 1',
      description: 'Description 1',
      done: false,
      dueDate: '2023-10-18',
      updatedDate: null,
    },
    {
      id: uuid(),
      date: '2023-10-15',
      title: 'Task 2',
      description: 'Description 2',
      done: true,
      dueDate: '2023-11-01',
      updatedDate: null,
    },
    {
      id: uuid(),
      date: '2023-10-10',
      title: 'Pradėti sportuoti',
      description: 'Description 3',
      done: false,
      dueDate: '2024-01-01',
      updatedDate: null,
    },
  ]

  const [todos, setTodos] = useState(initialData)

  const doneTodoHandler = (id) => {
    console.log(id)
  }

  return (
    <Container>
      <h1>Todo page</h1>

      <TodoForm />

      <TodoList onTodoDone={doneTodoHandler} data={todos} />
    </Container>
  )
}

export default TodoPage

// 2. Kiekviena sukurta užduotis turi turėti:
// 2.1. Unikalų id (prisideda automatiškai)
// 2.2. Sukūrimo datą (prisideda automatiškai)
// 2.3. Pavadinimą
// 2.4. Aprašymą
// 2.5. Done (nurodo ar užduotis jau atlikta)
// 2.6. Data iki kada užduotį reikia atlikti