import React from 'react'

class List extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }
  render() {
    const { list } = this.props
    return <div onClick={this.onClick.bind(this)}>{list.Title}</div>
  }
  onClick() {
    
  }
}

export default List
