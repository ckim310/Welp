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
      ratingOver: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  componentDidMount() {
    if (this.props.formType === "Post Review") {
      this.props.fetchBusiness(this.state.business_id);
    }
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
        this.setState({ ["ratingOver"]: rating });
        break;
        case 'two':
        rating = 2;
        this.setState({ [field]: rating });
        this.setState({ ["ratingOver"]: rating });
        break;
        case 'three':
        rating = 3;
        this.setState({ [field]: rating });
        this.setState({ ["ratingOver"]: rating });
        break;
        case 'four':
        rating = 4;
        this.setState({ [field]: rating });
        this.setState({ ["ratingOver"]: rating });
        break;
        case 'five':
        rating = 5;
        this.setState({ [field]: rating });
        this.setState({ ["ratingOver"]: rating });
        break;
        default:
        rating = 0;
        this.setState({ [field]: rating });
        this.setState({ ["ratingOver"]: rating });
        break;
      }
    };
  }

  handleMouseOver(value) {
    return (e) => {
      this.setState({ ["ratingOver"]: value});
    };
  }

  handleMouseOut(e) {
    e.preventDefault();
    this.setState({ ["ratingOver"]: null || this.state.rating });
  }

  renderRatingText() {
    let ratingText = 'Select your rating';

    switch (this.state.ratingOver) {
      case 5:
        ratingText = "Woohoo! As good as it gets!";
        break;
      case 4:
        ratingText = "Yay! I'm a fan.";
        break;
      case 3:
        ratingText = "A-OK.";
        break;
      case 2:
        ratingText = "Meh. I've experienced better.";
        break;
      case 1:
        ratingText = "Eek! Methinks not.";
        break;
      default:
        ratingText = 'Select your rating';
        break;
    }

    return ratingText;
  }

  render() {
    const  { business, businessId, formType, review } = this.props;

      if (review.body === null) {
        return <Redirect to={`/businesses/${businessId}`} />
      }

      if (!business) {
        return null;
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
                <Link to={`/businesses/${this.state.business_id}`}>
                  {business.name}
                </Link>
              </h2>
            </div>

            <div className="review-form-content">
              <form className="review-form" onSubmit={this.handleSubmit}>
                <div className="review-body-container">
                  <div className="review-body-content">
                    <div className="review-form-rating">
                      <div className="review-form-star-text">&nbsp; {this.renderRatingText()}</div>
                      <div className="review-form-stars">
                        <div
                          className={"rating-big" + (this.state.rating === 5 ? " show-star" : " ") + (this.state.rating === 5 ? " showing-star" : " ")}
                          id="five"
                          value="5"
                          onClick={this.handleRating("rating")}
                          onMouseOver={this.handleMouseOver(5)}
                          onMouseOut={this.handleMouseOut}/>
                        <div
                          className={"rating-big" + (this.state.rating === 4 ? " show-star" : " ") + (this.state.rating >= 4 ? " showing-star" : " ")}
                          id="four"
                          value="4"
                          onClick={this.handleRating("rating")}
                          onMouseOver={this.handleMouseOver(4)}
                          onMouseOut={this.handleMouseOut}/>
                        <div
                          className={"rating-big" + (this.state.rating === 3 ? " show-star" : " ") + (this.state.rating >= 3 ? " showing-star" : " ")}
                          id="three"
                          value="3"
                          onClick={this.handleRating("rating")}
                          onMouseOver={this.handleMouseOver(3)}
                          onMouseOut={this.handleMouseOut}/>
                        <div
                          className={"rating-big" + (this.state.rating === 2 ? " show-star" : " ") + (this.state.rating >= 2 ? " showing-star" : " ")}
                          id="two"
                          value="2"
                          onClick={this.handleRating("rating")}
                          onMouseOver={this.handleMouseOver(2)}
                          onMouseOut={this.handleMouseOut}/>
                        <div
                          className={"rating-big" + (this.state.rating === 1 ? " show-star" : " ") + (this.state.rating >= 1 ? " showing-star" : " ")}
                          id="one"
                          value="1"
                          onClick={this.handleRating("rating")}
                          onMouseOver={this.handleMouseOver(1)}
                          onMouseOut={this.handleMouseOut}/>
                      </div>
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