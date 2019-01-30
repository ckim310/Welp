export const fetchReviews = businessId => {
  return $.ajax ({
    method: 'GET',
    url: `api/businesses/${businessId}`
  });
};

export const createReview = (businessId, review) => {
  return $.ajax({
    method: 'POST',
    url: `api/businesses/${businessId}`,
    data: { review }
  });
};

export const updateReview = (businessId, review) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/businesses/${businessId}/reviews/${review.id}/edit`,
    data: { review }
  });
};

export const deleteReview = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/reviews/${id}`
  });
};