import React from 'react'
import PropTypes from 'prop-types'

const style = {
    
    "list-style-type" : "none"
  }

const Todo = ({ onClick, completed, text }) => (



    <li
    
    
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
        style={style}
    >
        {text}
    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo