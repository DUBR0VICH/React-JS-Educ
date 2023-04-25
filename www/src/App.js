import React from "react"
import Header from "./components/header"
import Users from "./components/users"
import Register from "./components/Register"

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Header title="Site was made by DUBROVICH" />
        <main>
          <Users />
        </main>
        <aside>
          <Register />
        </aside>
      </div>
    )
  }
}

export default App
