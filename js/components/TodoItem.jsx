import React from 'react'

class TodoItem extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      editing: false
    }
  }
  render() {
    const { todo } = this.props
    return <div onClick={this.onClick.bind(this)}>{todo.text}</div>
  }
  onClick() {
    console.log(this.props)
    const { todo, deleteTodo } = this.props
    console.log("deleting todo");
    deleteTodo(todo.id)

  }
}

export default TodoItem
