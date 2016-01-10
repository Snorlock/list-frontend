import React from 'react'
import * as ListActions from '../actions/lists'
import reduxConnector from '../util/reduxConnector'

class ListDetails extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }
  componentDidMount() {
    const { actions, params } = this.props
    console.log(this.props)
    actions.fetchList(params.listId)
  }

  render() {
    console.log("LIST DETAILS")
    const { list } = this.props
    if(list) {
        return <div onClick={this.onClick.bind(this)}>Details {list.Title}</div>
    } else {
      return <div>Error occured</div>
    }

  }
  onClick() {

  }
}

export default reduxConnector(ListDetails,ListActions)
