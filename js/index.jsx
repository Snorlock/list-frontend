import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/app.jsx'
import ListDetails from './components/ListDetails.jsx'
import MainSection from './components/MainSection.jsx'
import NotFound404 from './components/NotFound404.jsx'
import configureStore from './store/configureStore'
import { Router, Route, IndexRoute, NotFoundRoute, browserHistory } from 'react-router';
import { syncReduxAndRouter } from 'redux-simple-router'

const store = configureStore()

syncReduxAndRouter(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={MainSection} />
        <Route path="list/:listId" component={ListDetails}/>
      </Route>
      <Route path="*" component={NotFound404}/>
    </Router>
  </Provider>
  ,document.getElementById('container')
);
