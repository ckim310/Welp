import React from 'react';
import { connect } from 'react-redux';
import { searchBusinessesFind, clearSearchErrors, searchBusinessesNear } from '../../actions/search_actions';
import { Redirect, withRouter } from 'react-router-dom';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      find: "",
      near: "New York",
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
      if (this.state.find !== "" && this.state.near !== "") {
        return (this.props.searchBusinessesFind(this.state.find, this.state.near)).then((e) => {
          const that = this;

          if (that.props.match.path === "/businesses/:businessId") {
            that.props.history.push(`search?queryFind=${this.state.find}&queryNear=${this.state.near}`);
          } else if (that.props.history.location.pathname !== "/businesses/search") {
            that.props.history.push(`businesses/search?queryFind=${this.state.find}&queryNear=${this.state.near}`);
          }
        });
      } else if (this.state.near !== "") {
        return this.props.searchBusinessesNear(this.state.near).then((e) => {

          const that = this;

          if (that.props.match.path === "/businesses/:businessId") {
            that.props.history.push(`search?queryNear=${this.state.near}`);
          } else if (that.props.history.location.pathname !== "/businesses/search") {
            that.props.history.push(`businesses/search?queryNear=${this.state.near}`);
          }
        });
      }
    }
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });

      if (this.props.errors.length !== 0) {
        this.props.clearSearchErrors();
      }
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
                      placeholder="burger, barbers, cava..."/>
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
                      placeholder="address or city"
                      />
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
    searchBusinessesFind: (queryFind, queryNear) => dispatch(searchBusinessesFind(queryFind, queryNear)),
    searchBusinessesNear: queryNear => dispatch(searchBusinessesNear(queryNear)),
    clearSearchErrors: () => dispatch(clearSearchErrors()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchForm));
