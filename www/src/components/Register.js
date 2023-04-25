import React from "react"


class Register extends React.Component {
  render() {
    return(
      <div className="Reg">
        <form>
          <h3 className="Regist">Registration form</h3>
          <p className="Reg1">Username: <input placeholder="Your Username" /></p>
          <p className="Reg1">Name: <input placeholder="Your Name" /></p>
          <p className="Reg1">Email: <input placeholder="Your Email" /></p>
          <p className="Reg1">Address: <input placeholder="Your address" /></p>
          <p className="Reg1">Zipcode: <input placeholder="Your zipcode" /></p>
          <p className="Reg1">Geolocation: <input placeholder="Your geolocation" /></p>
          <button type="submit" className="btn"> Submit </button>
        </form>
      </div>
    )
  }
}

export default Register