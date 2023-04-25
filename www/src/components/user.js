import React from "react"

class User extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: []
      };
    }

    handleUserClick = () => {
      const userId = this.props.user.id;
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((response) => response.json())
        .then((data) => this.setState({ posts: data }))
        .catch((error) => console.log(error));
    }
    closePostClick = () => {
        this.setState({posts: []})
    }
  
    render() {
      const { user } = this.props;
      return (
        <div className="user">
          <h3>{user.name} {user.username}</h3>
          <p>{user.email}</p>
          <button onClick={this.handleUserClick}>Posts</button>
          {this.state.posts.map(post => (
            <div key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ))}
          <button onClick={this.closePostClick}>Close posts</button>
        </div>
      );
    }
  }
  

export default User
