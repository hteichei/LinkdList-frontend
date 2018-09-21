import React, { Component } from 'react';
import './style.css';
import companyImage from '../../images/company_placeholder.png';

class Card extends Component {
  render() {
    // const { logo, title, salary, equity, company } = this.props.jobs;
    return (
      <div className="card">
        <img className="img" src={companyImage} alt="company logo" />
        <div>
          <p>
            {this.props.title} @{this.props.company}
          </p>
          <p>
            ${this.props.salary} | {this.props.equity}% Equity
          </p>
        </div>
        <button>APPLY</button>
      </div>
    );
  }
}

export default Card;
