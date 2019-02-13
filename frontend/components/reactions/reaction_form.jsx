import React from 'react';
import { connect } from 'react-redux';
import { createReaction, fetchReactions } from '../../actions/reaction_actions';

class ReactionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { businessId, reviewId } = this.props;
    this.props.fetchReactions(businessId);
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

    let usefulClicked = "not-clicked";
    let funnyClicked = "not-clicked";
    let coolClicked = "not-clicked";
    
    let reactionText;
    reactions.forEach(reaction => {
      // usefulCount = 0;
      // funnyCount = 0;
      // coolCount = 0;
      if (reaction.reviewId === reviewId && reaction.type === "useful") {
        usefulCount += 1;
      }
      if (reaction.reviewId === reviewId && reaction.type === "funny") {
        funnyCount += 1;
      }
      if (reaction.reviewId === reviewId && reaction.type === "cool") {
        coolCount += 1;
      }
      // if (reaction.reviewId === reviewId) {
      //   usefulCount = 0;
      //   funnyCount = 0;
      //   coolCount = 0;
      //   if (reaction.type === "useful") {
      //     usefulCount += 1;
      //   }
      //   if (reaction.type === "funny") {
      //     funnyCount += 1;
      //   }
      //   if (reaction.type === "cool") {
      //     coolCount += 1;
      //   } 
      // }

      if (reaction.userId === currentUserId && reaction.reviewId === reviewId) {
        if (reaction.type === "useful") {
          usefulClicked = "reaction-show";
          const reactionBtn = document.getElementsByClassName("reaction-show");
          reactionBtn.disabled = true;
        } else if (reaction.type === "funny") {
          funnyClicked = "reaction-show";
        } else if (reaction.type === "cool") {
          coolClicked = "reaction-show";
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
              </button>
            </div>

            <div className="reaction-funny">
              <button className={funnyClicked} onClick={this.handleClick('funny')}>
                <i className="far fa-grin-tears"></i>
                <span className="reaction-text">Funny</span>
              </button>
            </div>

            <div className="reaction-cool">
              <button className={coolClicked} onClick={this.handleClick('cool')}>
                <i className="far fa-grin-stars"></i>
                <span className="reaction-">Cool</span>
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