import React, { PropTypes, Component } from 'react'

class Header extends Component {

  render() {
    return (
      <header className="header">
          <h1>todoszzz</h1>
          <div className="newTodo" onClick={this.logout.bind(this)}>Log out</div>
      </header>
    )
  }
  logout() {
    this.props.logout()
  }
}

export default Header
