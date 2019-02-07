import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';
import NavBarRight from '../nav_bar/nav_bar_right_container';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.review.body,
      author_id: this.props.currentUserId,
      business_id: this.props.businessId,
      rating: this.props.review.rating,
      reviewId: this.props.reviewId,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    this.props.clearReviewErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const { businessId } = this.props.match.params;
    const review = Object.assign({}, this.state);

    this.props.action(businessId, review).then(() => this.props.history.push(`/businesses/${businessId}`));
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleRating(field) {
    return (e) => {
      let rating;
      switch(e.currentTarget.id) {
        case 'one':
        rating = 1;
        this.setState({ [field]: rating });
        break;
        case 'two':
        rating = 2;
        this.setState({ [field]: rating });
        break;
        case 'three':
        rating = 3;
        this.setState({ [field]: rating });
        break;
        case 'four':
        rating = 4;
        this.setState({ [field]: rating });
        break;
        case 'five':
        rating = 5;
        this.setState({ [field]: rating });
        break;
        default:
        rating = 0;
        this.setState({ [field]: rating });
        break;
      }
    };
  }

  render() {
    const businessId = this.props.match.params.businessId;
    const  { business, formType, review } = this.props;

      if (!business || review.body === null) {
        return <Redirect to={`/businesses/${businessId}`} />
      }

    const errors = this.props.errors.map((err, idx) => {
      return <li className="review-errors-list" key={idx}>{err}</li>
    });

    return (
      <div className="review-form-page">
        <div className="review-form-top">
          <div className="review-form-header">
            <div className="review-form-header-title">
              <h1 className="home-logo">
                <Link to="/">welp<i className="fab fa-yelp"></i></Link>
              </h1>
              <div className="write-review-title">
                Write A Review
              </div>
            </div>
            <NavBarRight />
          </div>
        </div>

        <div className="review-form-container">
          <div className="review-form-wrapper">


            <div className="review-title">
              <h2 className="review-business-name">
                <Link to={`/businesses/${business.id}`}>
                  {business.name}
                </Link>
              </h2>
            </div>

            <div className="review-form-content">
              <form className="review-form" onSubmit={this.handleSubmit}>
                <div className="review-body-container">
                  <div className="review-body-content">
                    <div className="review-form-rating">
                      &nbsp; Select your rating
                      <div className={"rating-big" + (this.state.rating === 5 ? " show-star" : " ")} id="five" value="5" onClick={this.handleRating("rating")}></div>
                      <div className={"rating-big" + (this.state.rating === 4 ? " show-star" : " ")} id="four" value="4" onClick={this.handleRating("rating")}></div>
                      <div className={"rating-big" + (this.state.rating === 3 ? " show-star" : " ")} id="three" value="3" onClick={this.handleRating("rating")}></div>
                      <div className={"rating-big" + (this.state.rating === 2 ? " show-star" : " ")} id="two" value="2" onClick={this.handleRating("rating")}></div>
                      <div className={"rating-big" + (this.state.rating === 1 ? " show-star" : " ")} id="one" value="1" onClick={this.handleRating("rating")}></div>
                    </div>

                    <textarea
                      name="review-body"
                      id="review-body"
                      placeholder="Your review helps others learn about great local businesses.

                      Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees."
                      value={this.state.body}
                      onChange={this.handleInput('body')}
                      ></textarea>

                    <div className="review-errors">
                      {errors}
                    </div>
                  </div>
                </div>

                <div className="review-post">
                  <button className="review-form-create">{formType}</button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default withRouter(ReviewForm);