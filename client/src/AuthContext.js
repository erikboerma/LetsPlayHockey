import React, { Component } from 'react'

const AuthContext = React.createContext()

class AuthProvider extends Component {
  state = { jwt: "" }

  constructor() {
    super()
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login(token) {
    setTimeout(() => this.setState({ jwt: token }), 1000)
  }

  logout() {
    this.setState({ jwt: "" })
  }

  isNotAuth() {
    if (this.state.jwt === "") {
      return true
    }
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          jwt: this.state.jwt,
          login: this.login,
          logout: this.logout
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }
