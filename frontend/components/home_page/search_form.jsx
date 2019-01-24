import React from 'react';
import { connect } from 'react-redux';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      find: "",
      near: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {

    return (
      <div className="search-form-wrapper">
        <form className="search-form" onClick={this.handleSubmit}>
          <ul className="search-fields">
            <li className="search find">
              <input
                type="text"
                value={this.state.find}
                onChange={this.handleInput('find')}
                placeholder="burgers, barbers, spas, handymen..."/>
            </li>

            <li className="search near">
              <input
                type="text"
                value={this.state.near}
                onChange={this.handleInput('near')}
                placeholder="New York, NY"/>
            </li>
          </ul>

          <div className="search-submit">
            <button className="btn" id="search-submit">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}


export default connect(null, null)(SearchForm)
