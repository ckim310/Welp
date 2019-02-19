import React from 'react';
import { connect } from 'react-redux';
import { createBookmark, removeBookmark } from '../../actions/bookmark_actions';

class BookmarkForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { businessId, currentUserId } = this.props;
    const bookmark = {
      user_id: currentUserId,
      business_id: businessId,
    };

    if (e.currentTarget.classList[0] === "bookmarked") {
      e.currentTarget.classList.remove("bookmarked");
      const bookmarkId = parseInt(e.currentTarget.className);
      this.props.removeBookmark(businessId, bookmarkId).then(
        e.currentTarget.classList.remove(`${bookmarkId}`)
      );
    } else {
      e.currentTarget.classList.remove("not-bookmarked");
      e.currentTarget.classList.add("bookmarked");
      this.props.createBookmark(businessId, bookmark);
    }

  }

  render() {

    const { currentUserId, bookmarks } = this.props;
    let bookmarked = "not-bookmarked";

    bookmarks.forEach(bookmark => {
      if (bookmark.user_id === currentUserId) {
        bookmarked = `bookmarked ${bookmark.id}`;
      }
    });


    return (
      <div className="bookmark-form-container bookmark">
        <div className={bookmarked} id="bookmark" onClick={this.handleClick}>
          <i className="fas fa-bookmark"></i>
          <span className="bookmark-text">Save</span>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.session.currentUserId;
  const businessId = ownProps.props.business.id;
  const bookmarks = Object.values(state.entities.bookmarks)
  return {
    currentUserId,
    businessId,
    bookmarks
  }
};

const mapDispatchToProps = dispatch => {
  return {
    createBookmark: (businessId, bookmark) => dispatch(createBookmark(businessId, bookmark)),
    removeBookmark: (businessId, id) => dispatch(removeBookmark(businessId, id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkForm);