import React from 'react';
import { fetchBusiness } from '../../actions/business_actions';
import { connect } from 'react-redux';

class BusinessPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return (
      this.props.fetchBusiness(this.props.business.id)
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.businessId !== prevProps.match.params.businessId) {
      return this.props.fetchBusiness(this.props.business.id);
    }
  }

  render() {
    const { business } = this.props;
    
    return(
      <div className="business-page-container">
        <div className="business-page-wrapper">
          <div className="top">
          
            <div className="top-container">
              <div className="top-header">
                <div className="top-header-left">
                  <div className="top-header-title">
                    <h1 className="title-name">{business.name}</h1>
                    <div className="title-claim">
                      <i className="fas fa-check-circle"></i>
                       Claimed
                    </div>
                  </div>

                  <div className="top-header-avg-rating">
                  </div>
                </div>

                <div className="top-header-right">
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const businessId = ownProps.match.params.businessId;
  const business = state.entities.businesses[businessId];

  return {
    business,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBusiness: (id) => dispatch(fetchBusiness(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessPage);