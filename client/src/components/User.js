import React from 'react'
import { connect } from 'react-redux'
import { showUser } from '../reducers/users'

class User extends React.Component {
  componentDidMount() {
    const id = parseInt(this.props.location.pathname.split('/')[2])
    this.props.dispatch(showUser(id))
  }

  render() {
    const { showUser } = this.props
    return(
      <h1>Nope</h1>
    )
  }
}

const mapStateToProps = (state) => {
  return { showUser: state.showUser }
}

export default connect(mapStateToProps)(User)