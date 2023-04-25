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
  
    render() {
      const { user } = this.props;
      return (
        <div className="user">
          <h3>{user.name} {user.username}</h3>
          <p>{user.email}</p>
          <button onClick={this.handleUserClick}>POSTS</button>
          {this.state.posts.map(post => (
            <div key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      );
    }
  }
  

export default User
