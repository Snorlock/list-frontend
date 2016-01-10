import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export default function connectComp(Component, mapStateToProps, ...actions) {
  var obj = Object.assign({}, null);
  actions.map(action => {
    Object.assign(obj, action);
  })
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(obj, dispatch)
    }
  }
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)

}
