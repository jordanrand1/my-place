import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts } from '../reducers/posts'
import { getUsers } from '../reducers/users';
import { Container, Header, Feed, Icon } from 'semantic-ui-react';

class Posts extends React.Component {
  componentDidMount() {
    this.props.dispatch(getUsers())
    this.props.dispatch(getPosts())
  }

  users = () => {
    const { users } = this.props
    if (users[0] === undefined) {
      return(
        <h1>Empty</h1>
      )
    } else {
      return users.map( user => 
        <a>{user.name}</a>
      )
    }
  }

  posts = () => {
    const { users } = this.props

    this.props.posts.map( post => {
      let user_name = ''
      let user_id = 0

      users.map( user => {
        if (user.id === post.user_id) 
          user_name = user.name   
          user_id = user.id
      })
    })

      return(
        <Feed.Event>
          <Feed.Label/>
          <Feed.Content>
            <Feed.Summary>
              <Link to={`/user/${user_id}`}>{user_name}</Link>
              <Feed.Date>{ new Date(post.created_at).toLocaleTimeString() }</Feed.Date>
            </Feed.Summary>
            <Feed.Extra text>
              { post.body }
            </Feed.Extra>
            <Feed.Meta>
              <Feed.Like>
                <Icon name='like' />
                {post.likes} Likes
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>
      )
    }

  render() {
    return (
      <Container>
        <Header as="h3" textAlign="center">Posts</Header>
        {this.posts()}
      </Container>
    )
  }
}

  const mapStateToProps = (state) => {
    return { users: state.users, posts: state.posts }
  }

export default connect(mapStateToProps)(Posts);