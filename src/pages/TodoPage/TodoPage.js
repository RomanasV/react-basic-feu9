import Container from '../../Components/Container/Container'
import axios from 'axios'
import TodoList from '../../Components/TodoPageComponents/TodoList/TodoList'
import { useState } from 'react'
import TodoForm from '../../Components/TodoPageComponents/TodoForm/TodoForm'
import { useEffect } from 'react'
import { API_URL } from '../../config'
import { toast } from 'react-toastify'

const TodoPage = () => {
  // const initialData = [
  //   {
  //     id: uuid(),
  //     date: '2023-10-16',
  //     title: 'Task 1',
  //     description: 'Description 1',
  //     done: false,
  //     dueDate: '2023-10-18',
  //     updatedDate: null,
  //   },
  //   {
  //     id: uuid(),
  //     date: '2023-10-15',
  //     title: 'Task 2',
  //     description: 'Description 2',
  //     done: true,
  //     dueDate: '2023-11-01',
  //     updatedDate: null,
  //   },
  //   {
  //     id: uuid(),
  //     date: '2023-10-10',
  //     title: 'Pradėti sportuoti',
  //     description: 'Description 3',
  //     done: false,
  //     dueDate: '2024-01-01',
  //     updatedDate: null,
  //   },
  // ]

  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null)

  useEffect(() => {
    const getTodos = async () => {
      const { data } = await axios(`${API_URL}/todos?_sort=id&_order=desc`)
      setTodos(data)
    }

    getTodos()
  }, [])

  const doneTodoHandler = (id) => {
    const clickedTodoIndex = todos.findIndex(todo => todo.id === id)
    const clickedTodo = todos[clickedTodoIndex]

    axios.patch(`${API_URL}/todos/${id}`, { done: !clickedTodo.done })

    setTodos(prevState => {
      const newState = [...prevState]
      const updatedTodo = {...clickedTodo}
      updatedTodo.done = !updatedTodo.done

      // newState.splice(clickedTodoIndex, 1, updatedTodo)
      newState[clickedTodoIndex] = updatedTodo

      return newState
    })

    const toastMessage = !clickedTodo.done ? `${clickedTodo.title} is done` : `${clickedTodo.title} is not done`
    toast.success(toastMessage)
  }

  const removeTodoHandler = (id) => {
    axios.delete(`${API_URL}/todos/${id}`)
    setTodos(prevState => prevState.filter(todo => todo.id !== id))
    toast.error('Todo was removed')
  }

  const addTodoHandler = async newTodo => {
    if (editTodo) {
      const { data } = await axios.put(`${API_URL}/todos/${editTodo.id}`, newTodo)

      setTodos(prevState => {
        const editId = data.id
        const editIndex = todos.findIndex(todo => todo.id === editId)
        const newState = [...prevState]
        newState[editIndex] = data

        setEditTodo(null)
        return newState
      })
      
      toast.success('Todo was edited')
    } else {
      const { data } = await axios.post(`${API_URL}/todos`, newTodo)
      setTodos(prevState => [data, ...prevState])
      toast.success('Todo was created')
    }
  }

  const editTodoHandler = (id) => {
    const selectedEditTodo = todos.find(todo => todo.id === id)
    setEditTodo(selectedEditTodo)
  }

  return (
    <Container>
      <h1>Todo page</h1>

      <TodoForm editData={editTodo} onNewTodo={addTodoHandler} />

      <TodoList onTodoEdit={editTodoHandler} onTodoRemove={removeTodoHandler} onTodoDone={doneTodoHandler} data={todos} />
    </Container>
  )
}

export default TodoPage

