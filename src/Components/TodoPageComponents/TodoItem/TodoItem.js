const TodoItem = ({ data, onTodoDone, onTodoRemove }) => {
  const { title, description, date, done, dueDate, id, updatedDate } = data

  if (!title) {
    return
  }

  const descriptionElement = description && <p className="todo-description">{description}</p>

  return (
    <div className="todo-item">
      <h3 className="todo-title">{title}</h3>
      <span className="todo-date">Task created: {date} {updatedDate ? `(updated ${updatedDate})` : ''}</span>
      {descriptionElement}
      <span className="todo-due-date">Due Date: {dueDate}</span>

      <div className="form-control">
        <input 
          type="checkbox"
          id={`todo-${id}`}
          name="todo-done"
          checked={done}
          onChange={() => onTodoDone(id)}
        />

        <label htmlFor={`todo-${id}`}>{done ? 'Task done' : 'Task is not completed yet'}</label>
      </div>

      <button onClick={() => onTodoRemove(id)}>Remove</button>
    </div>
  )
}

export default TodoItem