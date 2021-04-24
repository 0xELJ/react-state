import React, { Component } from "react";

export default class Authenticator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    // Sintaxis para pasar función a componente hijo
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.setState({ isLoggedIn: true });
  }

  logout() {
    this.setState({ isLoggedIn: false });
  }
  
  render() {
    return (
      <div>
        <p>{this.state.isLoggedIn ? "Sesión iniciada" : "Sesión cerrada"}</p>
        {
          this.state.isLoggedIn 
          ? <button onClick={this.logout}>Cerrar sesión</button>
          : <button onClick={this.login}>Iniciar sesión</button>
        }
      </div>
    );
  }
}