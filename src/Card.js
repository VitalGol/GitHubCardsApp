import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    const profile = this.props;
    return (
      <div className="profil">
        <img src={profile.avatar_url} alt={profile.login} />
        <div className="info">
          <div className="name">{profile.login}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

export default Card;
