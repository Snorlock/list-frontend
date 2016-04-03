import React, { PropTypes, Component } from 'react'

class NewTodo extends Component {
  handleSave(e) {
    e.preventDefault()
    this.props.handleSave(this.refs.text.value);
    this.refs.text.value = ""

  }

  constructor(props, context) {
    super(props, context)
  }


  render() {
    return (
      <div>
        <input ref={"text"} type="textarea"/>
        <button onClick={this.handleSave.bind(this) }>Submitzzz</button>
      </div>
    )
  }
}


export default NewTodo
