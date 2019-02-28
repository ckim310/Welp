export const createReaction = (businessId, reviewId, reaction) => {
  return $.ajax({
    method: 'POST',
    url: `api/businesses/${businessId}/reviews/${reviewId}/reactions`,
    data: { reaction }
  });
}; 

export const deleteReaction = (businessId, reviewId, id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/businesses/${businessId}/reviews/${reviewId}/reactions/${id}`
  });
};

export const fetchAllReactions = (businessId, reviewId) => {
  return $.ajax({
    method: 'GET',
    url: `api/businesses/${businessId}/reviews/${reviewId}/reactions`
  });
};

// export const fetchReaction = (businessId, reviewId) => {
//   return $.ajax({
//     method: 'GET',
//     url: `api/businesses/${businessId}/reviews/${reviewId}/reactions`
//   });
// };