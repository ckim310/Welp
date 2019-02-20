export const fetchBusinesses = (filter) => {
  return $.ajax({
    method: 'GET',
    url: 'api/businesses',
    data: { filter }
  });
};

export const fetchBusiness = id => {
  return $.ajax({
    method: 'GET',
    url: `api/businesses/${id}`
  });
};