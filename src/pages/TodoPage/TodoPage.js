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
    const clickedTodoIndex = todos.findIndex(todo => todo.id === id)

    setTodos(prevState => {
      const newState = [...prevState]
      const clickedTodo = newState[clickedTodoIndex]
      const updatedTodo = {...clickedTodo}
      updatedTodo.done = !updatedTodo.done

      // newState.splice(clickedTodoIndex, 1, updatedTodo)
      newState[clickedTodoIndex] = updatedTodo

      return newState
    })
  }

  const removeTodoHandler = (id) => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id))
  }

  const addTodoHandler = (newTodo) => {
    setTodos(prevState => [newTodo, ...prevState])
  }

  return (
    <Container>
      <h1>Todo page</h1>

      <TodoForm onNewTodo={addTodoHandler} />

      <TodoList onTodoRemove={removeTodoHandler} onTodoDone={doneTodoHandler} data={todos} />
    </Container>
  )
}

export default TodoPage

