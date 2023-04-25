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
          <h3 className="username">Username: {user.username}</h3>
          <h4>Name: {user.name}</h4>
          <p>Email: {user.email}</p>
          <p>User address: {user.address.street} street, {user.address.suite}, {user.address.city}</p>
          <p>User zipcode: {user.address.zipcode}</p>
          <p>User geolocation: {user.address.geo.lat}  {user.address.geo.lng}</p>
          <button onClick={this.handleUserClick}>Posts</button>
          <button onClick={this.closePostClick}>Close posts</button>
          {this.state.posts.map(post => (
            <div key={post.id}>
                <div className="post">
                <h4 className="post_title">{post.title}</h4>
                <p>{post.body}</p>
                </div>
            </div>
          ))}
        </div>
      );
    }
  }
  

export default User
