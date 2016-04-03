import React from 'react'
import config from '../config'
import {pushPath} from 'redux-simple-router'

class List extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.list = this.props.list
    this.state = {}
    this.click = () => this.onClick()
  }

  render() {
    return <div onClick={this.click}>{this.list.Title}</div>
  }
  onClick() {
    pushPath('/list/'+this.list.Id)
    console.log("PATH PUSHED")
  }
}

export default List
