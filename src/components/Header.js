import React, { Fragment } from "react";
import { NavLink, withRouter } from "react-router-dom";

class Header extends React.Component {
  onLogOut = event => {
    this.props.logOut();
    this.props.history.push("/");
    event.preventDefault();
  };
  renderNav() {
    if (this.props.user._id) {
      return (
        <React.Fragment>
          <li>
            <NavLink to={"/profile/" + this.props.user._id}>
              {this.props.user.username}
            </NavLink>
          </li>
          <li>
            <button onClick={this.onLogOut}>Déconnexion</button>
          </li>
        </React.Fragment>
      );
    }
    return (
      <Fragment>
        <NavLink to="/sign_up">Créer un compte</NavLink>
      </Fragment>
    );
  }
  render() {
    return (
      <header>
        <h1>leboncoin</h1>
        <ul className="nav-list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/LogIn">Log in</NavLink>
          </li>
          {this.renderNav()}
        </ul>
        <hr />
      </header>
    );
  }
}

export default withRouter(Header);
