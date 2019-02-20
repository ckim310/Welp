export const searchBusinessesFind = (queryFind, queryNear) => {
  return $.ajax({
    method: 'GET',
    url: `api/businesses/search`,
    data: { queryFind, queryNear }
  });
};

export const searchBusinessesNear = queryNear => {
  return $.ajax({
    method: 'GET',
    url: `api/businesses/search`,
    data: { queryNear }
  });
};