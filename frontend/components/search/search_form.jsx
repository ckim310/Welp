import React from 'react';
import { connect } from 'react-redux';
import { searchBusinesses, clearSearchErrors } from '../../actions/search_actions';
import { Redirect, withRouter } from 'react-router-dom';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      find: "",
      near: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSearchErrors();
  }

  handleSubmit(e) {
    e.stopPropagation();

    if ((e.target.className === "btn search-submit") || (e.target.className === "fas fa-search fa-2x")) {
      e.preventDefault();
      if (this.state.find !== "") {
        return this.props.searchBusinesses(this.state.find).then((e) => {
          const that = this;

          if (that.props.history.location.pathname !== "/businesses/search") {
            that.props.history.push("businesses/search");
          }
        });
      } else if (this.state.near !== "") {
        return this.props.searchBusinesses(this.state.near).then((e) => {
          const that = this;

          if (that.props.history.location.pathname !== "/businesses/search") {
            that.props.history.push("businesses/search");
          }
        });
      }
    }
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
      this.props.clearSearchErrors();
    };
  }

  render() {
    let errors;
    if (this.props.match.url !== "/businesses/search") {
      errors = this.props.errors.map((err, idx) => {
        return <li className="search-errors-list" key={idx}>{err}</li>
      })
    } else {
      errors = null;
    }

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
        <div className="search-errors">{errors}</div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const errors = state.errors.search;
  return {
    errors,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchBusinesses: query => dispatch(searchBusinesses(query)),
    clearSearchErrors: () => dispatch(clearSearchErrors()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchForm));