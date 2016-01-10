import React from 'react'
import Header from '../components/Header.jsx'
import MainSection from '../components/MainSection.jsx'
import Facebook from '../facebook.jsx'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AuthActions from '../actions/auth'
import * as RequestActions from '../actions/request'
import reduxConnector from '../util/reduxConnector'

class App extends React.Component {
  render() {
    const { authorized, actions } = this.props
    console.log(this.props)
    if(!authorized) {
      return (
        <div><Facebook actions={actions}/></div>
      )
    }
    
    return (
      <div>
        <Header logout={actions.loggedOut} />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  authorized: React.PropTypes.bool.isRequired,
  request: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    authorized: state.auth.authorized,
    request: state.request
  }
}

export default reduxConnector(App, mapStateToProps, AuthActions, RequestActions)
