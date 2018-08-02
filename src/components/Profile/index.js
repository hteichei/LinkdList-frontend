import React, { Component } from 'react';
import propTypes from 'prop-types';
import ProfileCard from '../ProfileCard';
import Header from '../../containers/Header';

export default class Profile extends Component {
  componentDidMount() {
    // fetch the user based on the username
  }
  render() {
    console.log('profile props', this.props);
    const user = this.props.currentUser;
    return (
      <div>
        <Header />
        <h1>Profile</h1>
        <ProfileCard
          first={user.first_name}
          last={user.last_name}
          username={user.username}
          currCompany={user.current_company}
          img={user.photo}
        />
      </div>
    );
  }
}
