import React from "react"
import { connect } from "react-redux"
import { addUser } from "../reducers/actions"

class Register extends React.Component {
  
  handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      username: event.target.elements.username.value,
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      address: event.target.elements.address.value,
      zipcode: event.target.elements.zipcode.value,
      geolocation: event.target.elements.geolocation.value
    }
    this.props.addUser(user);
  }

  render() {
    return(
      <div className="Reg">
        <form onSubmit={this.handleSubmit}>
          <h3 className="Regist">Registration form</h3>
          <p className="Reg1">Username: <input name="username" placeholder="Your Username" /></p>
          <p className="Reg1">Name: <input name="name" placeholder="Your Name" /></p>
          <p className="Reg1">Email: <input name="email" placeholder="Your Email" /></p>
          <p className="Reg1">Address: <input name="address" placeholder="Your address" /></p>
          <p className="Reg1">Zipcode: <input name="zipcode" placeholder="Your zipcode" /></p>
          <p className="Reg1">Geolocation: <input name="geolocation" placeholder="Your geolocation" /></p>
          <button type="submit" className="btn"> Submit </button>
        </form>
      </div>
    )
  }
}

export default connect(null, { addUser })(Register);