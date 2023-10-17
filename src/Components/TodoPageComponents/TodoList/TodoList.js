import TodoItem from "../TodoItem/TodoItem"

const TodoList = ({ data, onTodoDone, onTodoRemove, onTodoEdit }) => {
  if (data.length === 0) {
    return (
      <div>
        <h2>No todos...</h2>
      </div>
    )
  }

  const todoWrapperElement = data.map(item => <TodoItem onTodoEdit={onTodoEdit} onTodoRemove={onTodoRemove} onTodoDone={onTodoDone} key={item.id} data={item} />)

  return (
    <div>
      <h2>Todo list:</h2>

      <div className="todo-list">
        {todoWrapperElement}
      </div>
    </div>
  )
}

export default TodoList