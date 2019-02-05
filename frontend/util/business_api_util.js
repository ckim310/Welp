export const fetchBusinesses = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/businesses',
  });
};

export const fetchBusiness = id => {
  return $.ajax({
    method: 'GET',
    url: `api/businesses/${id}`
  });
};

export const searchBusinesses = query => {
  return $.ajax({
    method: 'GET',
    url: 'api/businesses/search',
    data: { query }
  });
};