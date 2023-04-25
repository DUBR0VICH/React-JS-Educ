import React from "react"


class Header extends React.Component {
  render() {
    return(
      <header className="header">
        {this.props.title}
        <h8 className="REACTAPP">REACT APP</h8>
      </header>
    )
  }
}

export default Header