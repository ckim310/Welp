import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      author_id: this.props.currentUserId,
      business_id: this.props.businessId,
      rating: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

  }

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state);
    this.props.createReview(this.props.match.params.businessId, review);
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    const businessId = this.props.match.params.businessId;
    const  { business } = this.props;

      if (!business) {
        return <Redirect to={`/businesses/${businessId}`} />
      }

    return (
      <div className="review-form-wrapper">
        {business.name}

        <div className="review-form-content">
          <form className="review-form" onSubmit={this.handleSubmit}>
            <div className="review-body-container">
              <div className="review-body-content">
                <div className="review-form-rating">
                  <input
                    type="text"
                    onChange={this.handleInput('rating')}
                    />
                </div>

                <textarea
                  name="review-body"
                  id="review-body"
                  cols="30"
                  rows="10"
                  placeholder="Your review helps others learn about great local businesses.
                  
                  Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees."
                  onChange={this.handleInput('body')}
                  ></textarea>
              </div>
            </div>

            <div className="review-post">
              <button className="review-form-create">Post Review</button>
            </div>
          </form>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const businessId = ownProps.match.params.businessId;
  const business = state.entities.businesses[businessId];
  const currentUserId = state.session.currentUserId;

  return {
    businessId,
    business,
    currentUserId,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createReview: (businessId, review) => dispatch(createReview(businessId, review)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));