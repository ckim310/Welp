export const createReview = (businessId, review) => {
  return $.ajax({
    method: 'POST',
    url: `api/businesses/${businessId}/reviews`,
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