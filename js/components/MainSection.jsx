import React, { Component, PropTypes } from 'react'
import TodoItem from './TodoItem.jsx'
import List from './List.jsx'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ListActions from '../actions/lists'
import * as TodosActions from '../actions/todos'
import reduxConnector from '../util/reduxConnector'
// import Footer from './Footer'
// import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'
//
// const TODO_FILTERS = {
//   [SHOW_ALL]: () => true,
//   [SHOW_ACTIVE]: todo => !todo.completed,
//   [SHOW_COMPLETED]: todo => todo.completed
// }

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
    // this.state = { filter: SHOW_ALL }
  }

  handleClearCompleted() {
    const atLeastOneCompleted = this.props.todos.some(todo => todo.completed)
    if (atLeastOneCompleted) {
      this.props.actions.clearCompleted()
    }
  }

  handleShow(filter) {
    this.setState({ filter })
  }

  // renderToggleAll(completedCount) {
  //   const { todos, actions } = this.props
  //   if (todos.length > 0) {
  //     return (
  //       <input className="toggle-all"
  //              type="checkbox"
  //              checked={completedCount === todos.length}
  //              onChange={actions.completeAll} />
  //     )
  //   }
  // }

  // renderFooter(completedCount) {
  //   const { todos } = this.props
  //   const { filter } = this.state
  //   const activeCount = todos.length - completedCount
  //
  //   if (todos.length) {
  //     return (
  //       <Footer completedCount={completedCount}
  //               activeCount={activeCount}
  //               filter={filter}
  //               onClearCompleted={this.handleClearCompleted.bind(this)}
  //               onShow={this.handleShow.bind(this)} />
  //     )
  //   }
  // }

  componentDidMount() {
    const { actions } = this.props
    actions.fetchLists()
  }

  render() {
    const { lists, actions } = this.props
    // const { filter } = this.state
    if(!lists) {
      return (
        <section className="main">
          <ul className="todo-list">
            No Items
          </ul>
        </section>
      )
    }
    return (
      // {this.renderToggleAll(completedCount)}
      <section className="main">
        <ul className="todo-list">
          {lists.map(list =>
            <List list={list}/>
          )}
        </ul>
      </section>
      // {this.renderFooter(completedCount)}
    )
  }
}

MainSection.propTypes = {
  lists: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}
function mapStateToProps(state) {
  return {
    lists: state.lists
  }
}

export default reduxConnector(MainSection, mapStateToProps, ListActions)
