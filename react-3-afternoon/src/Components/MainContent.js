import React, { Component } from "react";
import data from "../data";
import "./mainContent.css";

export default class MainContent extends Component {
  constructor() {
    super();

    this.state = {
      i: 0
    };

    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  handleNext() {
    if (this.state.i >= 24) {
      this.setState({ i: this.state.i = 0})
    } else if (this.state.i >= 0) {
      this.setState({ i: this.state.i + 1 });
    }
  }

  handlePrev() {
    if (this.state.i <= 0) {
      this.setState({ i: this.state.i = 24})
    } else if (this.state.i >= 0) {
      this.setState({ i: this.state.i - 1 });
    }
  }

  render() {
    return (
      <div className="black-container">
        <div className="main-content-holder">
          <section className="main-text">
            <div className="slides">{`${this.state.i + 1}/25`}</div>
            <div className="full-name">
              {data[this.state.i].name.first} {data[this.state.i].name.last}
            </div>
            <div className="employee-info-top">
              <div>
                <b>From:</b> {data[this.state.i].city},{" "}
                {data[this.state.i].country}
              </div>

              <div>
                <b>Job Title:</b> {data[this.state.i].title}
              </div>
              <div>
                <b>Employer:</b> {data[this.state.i].employer}
              </div>
            </div>
            <article className='employee-info-bottom'>
            <div>
              {" "}
              <b>Favorite Movies:</b>{" "}
            </div>
            <section className='ol'>
            <div>1. {data[this.state.i].favoriteMovies[0]}</div>
            <div>2. {data[this.state.i].favoriteMovies[1]}</div>
            <div>3. {data[this.state.i].favoriteMovies[2]}</div>
            </section>
            </article>
          </section>
          <section className="footer">
            <div className="left">
              <button
                onClick={() => this.handlePrev()}
                className="nav-buttons"
              >{`< Prev`}</button>
            </div>
            <div className="center">
              <button className="center-buttons"> Edit</button>
              <button className="center-buttons"> Delete </button>
              <button className="center-buttons"> New </button>
            </div>
            <div className="right">
              <button
                onClick={() => this.handleNext()}
                className="nav-buttons"
              >{`Next >`}</button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}


