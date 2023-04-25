import React from "react";
import User from "./user";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentUserId: null,
      posts: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }))
      .catch((error) => console.log(error));
  }

  handleUserClick = (userId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data, currentUserId: userId }))
      .catch((error) => console.log(error));
  };

  handleShowPostsClick = (userId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data, currentUserId: userId }))
      .catch((error) => console.log(error));
  };

  render() {
    const { users, currentUserId, posts } = this.state;

    return (
      <div>
        {users.length > 0 ? (
          users.map((user) => (
            <User
              key={user.id}
              user={user}
              handleUserClick={this.handleUserClick}
              currentUserId={currentUserId}
              handleShowPostsClick={this.handleShowPostsClick}
            />
          ))
        ) : (
          <div className="user">
            <h3>Пользователей нет</h3>
          </div>
        )}

        {posts.length > 0 && (
          <div>
            <h3>Посты пользователя</h3>
            <ul>
              {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Users;
