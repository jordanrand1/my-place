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
    let name = ''
    return this.props.posts.map( post =>
      <Feed.Event>
        {
          users.map( user => {
          if (user.id === post.user_id) 
            name = user.name   
          })
        }
      <Feed.Label image='/images/avatar/small/joe.jpg' />
      <Feed.Content>
        <Feed.Summary>
          {name} posted on his page
          <Feed.Date>{ new Date(post.created_at).toLocaleTimeString() }</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
          { post.body }
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            {Math.floor(Math.random() * 100)} Likes
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