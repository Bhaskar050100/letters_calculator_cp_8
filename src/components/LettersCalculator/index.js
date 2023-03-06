// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  getsearchValue = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    console.log(searchInput)
    return (
      <div className="main-cont">
        <div className="cont">
          <div className="details-cont">
            <h1 className="head">
              Calculate the
              <br />
              Letters you
              <br />
              enters
            </h1>
            <label htmlFor="inputId" className="para">
              Enter the phrase
            </label>
            <input
              type="text"
              className="search-bar"
              placeholder="Enter the phrase"
              onChange={this.getsearchValue}
              value={searchInput}
              id="inputId"
            />
            <p className="btn" type="button">
              No.of Letters: {searchInput.length}
            </p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
