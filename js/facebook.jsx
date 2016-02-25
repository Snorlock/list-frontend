import React from 'react';
import ReactDOM from 'react-dom'
import Request from 'superagent'
import Auth from './auth'
import config from './config';

class Facebook extends React.Component {
    render () {
        return <div>
          <div onClick={this.authFacebook.bind(this)}>Loginzz facebook</div>
        </div>
    }
    authFacebook () {
      Auth(config.api.host,'facebook', token => {
        this.props.actions.loggedIn(token);
      })
    }


}
export default Facebook;
