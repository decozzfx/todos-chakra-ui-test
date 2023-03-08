import { useDelteTodo, useUpdateTodo } from './services'

const TodoItem = ({ id, title, completed }) => {
  const {
    isUpdating,
    isErrorUpdating,
    errorUpdating,
    UpdateTodo
  } = useUpdateTodo()

  const {
    isDeleting,
    isErrorDeleting,
    errorDeleting,
    DeleteTodo
  } = useDelteTodo()

  const handleUpdateTodo = (id, completed) => {
    const data = { completed: !completed }
    UpdateTodo({ id, data })
  }

  return (
    <>
      <p className='contents'>
        {isUpdating || isErrorUpdating ? (
          <span>{isUpdating ? 'Updating...' : errorUpdating}</span>
        ) : isDeleting || isErrorDeleting ? (
          <span>{isDeleting ? 'Deleting...' : errorDeleting}</span>
        ) : (
          <>
            <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{title}</span>
            <span>
              <input type='checkbox' checked={completed ? true : false} onChange={() => handleUpdateTodo(id, completed)} />
              <i className="fa-solid fa-trash" onClick={() => DeleteTodo(id)}></i>
            </span>
          </>
        )}
      </p>
      <hr />
    </>
  )
}

export default TodoItem
