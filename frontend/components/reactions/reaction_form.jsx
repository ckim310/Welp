import React from 'react';
import { connect } from 'react-redux';
import { createReaction, fetchReactions } from '../../actions/reaction_actions';
import { Redirect } from 'react-router-dom';

class ReactionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(reactionType) {
    return (e) => {
      e.preventDefault();
      e.currentTarget.classList.add("reaction-show");

      const { businessId, reviewId, currentUserId } = this.props;
      const reaction = {
        reaction_type: reactionType,
        user_id: currentUserId,
        review_id: reviewId,
      };
      this.props.createReaction(businessId, reviewId, reaction);
      this.props.fetchReactions(businessId);
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

      
      if (reaction.userId === currentUserId && reaction.reviewId === reviewId) {
        if (reaction.type === "useful") {
          usefulClicked = "reaction-show";
        } else if (reaction.type === "funny") {
          funnyClicked = "reaction-show";
        } else if (reaction.type === "cool") {
          coolClicked = "reaction-show";
        }
      }

      if (reaction.reviewId === reviewId) {
        if (reaction.type === "useful") {
          useful.push(reaction.id);
        } else if (reaction.type === "funny") {
          funny.push(reaction.id);
        } else if (reaction.type === "cool") {
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

  // debugger

    if ( usefulCount !== 0 || funnyCount !== 0 || coolCount !== 0) {
      reactionText = null;
    } else {
      reactionText = <div className="reaction-text">
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
                <span className="reaction-">Cool</span>
                <span className="reaction-count">{coolCount}</span>
              </button>
            </div>
          </div>

          <div className="reaction-text-count">
            {usefulCount} useful
            {funnyCount} funny
            {coolCount} cool
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const reviewId = ownProps.props.review.id;
  const businessId = ownProps.props.review.business_id;
  const reactions = Object.values(state.entities.reactions);
  const currentUserId = state.session.currentUserId;

  return {
    reactions,
    reviewId,
    businessId,
    currentUserId,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createReaction: (businessId, reviewId, reaction) => dispatch(createReaction(businessId, reviewId, reaction)),
    fetchReactions: (businessId, reviewId) => dispatch(fetchReactions(businessId, reviewId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactionForm);