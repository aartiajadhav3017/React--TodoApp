import React from 'react'

const TodoList = (props) => {
  return (
    <div>

    <ul>
    <li className="list-item">
        {props.item}
        <span className='icons'>
        <i class="fa-solid fa-trash" 
        onClick={e=>{props.delete(props.index)}}></i>
        </span>
    </li>
    </ul>
    </div>
  )
}

export default TodoList