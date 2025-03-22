import './index.css'

const TodoItems = props => {
  const {todoList, onDelteList} = props
  const {id, title} = todoList
  const onDelete = () => {
    onDelteList(id)
  }

  return (
    <li className="todo-item">
      <p className="todo-title"> {title} </p>
      <button
        type="button"
        className=" delete-button delete-button:hover"
        onClick={onDelete}
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItems
