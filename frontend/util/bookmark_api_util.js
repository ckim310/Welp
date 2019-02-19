export const createBookmark = (businessId, bookmark) => {
  return $.ajax({
    method: 'POST',
    url: `api/businesses/${businessId}/bookmarks`,
    data: { bookmark }
  });
};

export const deleteBookmark = (businessId, id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/businesses/${businessId}/bookmarks/${id}`
  });
};