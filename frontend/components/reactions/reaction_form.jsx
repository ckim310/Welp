import React from 'react';
import { connect } from 'react-redux';
import { createReaction, fetchAllReactions, removeReaction } from '../../actions/reaction_actions';
import { Redirect } from 'react-router-dom';

class ReactionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      reactionsCount: this.props.reviewReactions.length,
    };
  }

  componentDidMount() {
    const { businessId, reviewId } = this.props;
    this.props.fetchAllReactions(businessId, reviewId);
  }

  componentDidUpdate(prevProps) {
    const { businessId, reviewId } = this.props;
    if (businessId !== prevProps.businessId && businessId && reviewId) {
      this.props.fetchAllReactions(businessId, reviewId)
      .then(
        this.setState({ reactionsCount: this.props.reviewReactions.length })
      );
    }
  }

  handleClick(reactionType) {
    return (e) => {
      e.preventDefault();
      const { businessId, reviewId, currentUserId } = this.props;
      const reaction = {
        reaction_type: reactionType,
        user_id: currentUserId,
        review_id: reviewId,
      };

      if (e.currentTarget.classList[0] === "reaction-show") {
        const reactionId = parseInt(e.currentTarget.classList[1]);
        this.props.removeReaction(businessId, reviewId, reactionId)
        .then(() => {
          this.setState({ reactionsCount: this.state.reactionsCount - 1 });
        });
      } else {
        this.props.createReaction(businessId, reviewId, reaction)
        .then(() => {
          this.setState({reactionsCount: this.state.reactionsCount + 1});
        });
      }
    };
  }

  render() {
    const { currentUserId, reactions, reviewId } = this.props;

    let usefulCount = 0;
    let funnyCount = 0;
    let coolCount = 0;

    let useful = [];
    let funny = [];
    let cool = [];

    let usefulClicked = "not-clicked";
    let funnyClicked = "not-clicked";
    let coolClicked = "not-clicked";
    
    let reactionText;
    reactions.forEach(reaction => {
      if (reaction.user_id === currentUserId && reaction.review_id === reviewId) {
        if (reaction.reaction_type === "useful") {
          usefulClicked = `reaction-show ${reaction.id}`;
        } else if (reaction.reaction_type === "funny") {
          funnyClicked = `reaction-show ${reaction.id}`;
        } else if (reaction.reaction_type === "cool") {
          coolClicked = `reaction-show ${reaction.id}`;
        }
      }

      if (reaction.review_id === reviewId) {
        if (reaction.reaction_type === "useful") {
          useful.push(reaction.id);
        } else if (reaction.reaction_type === "funny") {
          funny.push(reaction.id);
        } else if (reaction.reaction_type === "cool") {
          cool.push(reaction.id);
        }

        if (useful.length > 0) {
          usefulCount = useful.length;
        }
        if (funny.length > 0) {
          funnyCount = funny.length;
        }
        if (cool.length > 0) {
          coolCount = cool.length;
        }
      }
  
    });

    const totalCount = this.state.reactionsCount;
    if (totalCount !== 0) {

      if (totalCount === 1) {
        reactionText = <div className="reaction-text-content">
          {totalCount} vote for this review
          </div>
      } else {
        reactionText = <div className="reaction-text-content">
          {totalCount} votes for this review
          </div>
      }
    } else {
      reactionText = <div className="reaction-text-content">
        Was this review...?
        </div>
      usefulCount = null;
      funnyCount = null;
      coolCount = null;
    };

    return (
      <div className="reactions-container">
      
        <div className="reactions-content">
          <div className="reactions-text">
            {reactionText}
          </div>

          <div className="reactions-buttons-container">
            <div className="reaction-useful">
              <button className={usefulClicked} onClick={this.handleClick('useful')}>
                <i className="fas fa-lightbulb"></i>
                <span className="reaction-text">Useful</span>
                <span className="reaction-count">{usefulCount}</span>
              </button>
            </div>

            <div className="reaction-funny">
              <button className={funnyClicked} onClick={this.handleClick('funny')}>
                <i className="far fa-grin-tears"></i>
                <span className="reaction-text">Funny</span>
                <span className="reaction-count">{funnyCount}</span>
              </button>
            </div>

            <div className="reaction-cool">
              <button className={coolClicked} onClick={this.handleClick('cool')}>
                <i className="far fa-grin-stars"></i>
                <span className="reaction-text">Cool</span>
                <span className="reaction-count">{coolCount}</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const reviewId = ownProps.props.review.id;
  const reviewReactions = state.entities.reviews[reviewId].reactions || [];
  const businessId = ownProps.props.review.business_id;
  const reactions = Object.values(state.entities.reactions);
  const currentUserId = state.session.currentUserId;

  return {
    reactions,
    reviewId,
    reviewReactions,
    businessId,
    currentUserId,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createReaction: (businessId, reviewId, reaction) => dispatch(createReaction(businessId, reviewId, reaction)),
    fetchAllReactions: (businessId, reviewId) => dispatch(fetchAllReactions(businessId, reviewId)),
    removeReaction: (businessId, reviewId, id) => dispatch(removeReaction(businessId, reviewId, id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactionForm);