import React from "react"


class Login extends React.Component {
  render() {
    return(
      <div className="Log">
        <form>
          <h3 className="Loginn">Login form</h3>
          <p className="Log1">Username: <input placeholder="Your Username" /></p>
          <p className="Log1">Password: <input placeholder="Your Name" /></p>
          <button type="submit" className="btn"> Submit </button>
        </form>
      </div>
    )
  }
}

export default Login