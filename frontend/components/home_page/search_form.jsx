import React from 'react';
import { connect } from 'react-redux';
import { searchBusinesses } from '../../actions/search_actions';

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
    if (this.state.find !== "") {
      return this.props.searchBusinesses(this.state.find);
    } else if (this.state.near !== "") {
      return this.props.searchBusinesses(this.state.near);
    }
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
            <div className="div-search find">
              <label className="search-items">
                <div className="search-contents">
                  <div className="search-find">
                    <span>Find</span>
                    <input
                      type="text"
                      className="find"
                      value={this.state.find}
                      onChange={this.handleInput('find')}
                      placeholder="burgers, barbers, spas, handymen..."/>
                  </div>
                </div>
              </label>
            </div>

            <div className="vl"></div>

            <div className="div-search near">
              <label className="search-items">
                <div className="search-contents">
                  <div className="search-near">
                    <span>Near</span>
                    <input
                      type="text"
                      className="near"
                      value={this.state.near}
                      onChange={this.handleInput('near')}
                      placeholder="address, neighborhood, city, or zip"/>
                  </div>
                </div>
              </label>
            </div>
          </ul>

          <div className="search-submit">
            <button className="btn search-submit">
              <i className="fas fa-search fa-2x"></i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchBusinesses: query => dispatch(searchBusinesses(query)),
  }
}

export default connect(null, mapDispatchToProps)(SearchForm)
