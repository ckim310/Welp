export const searchBusinessesFind = (queryFind, queryNear) => {
  return $.ajax({
    method: 'GET',
    url: `api/businesses/search?queryFind=${queryFind}&queryNear=${queryNear}`,
    data: { queryFind, queryNear }
  });
};

export const searchBusinessesNear = queryNear => {
  return $.ajax({
    method: 'GET',
    url: `api/businesses/search?queryNear=${queryNear}`,
    data: { queryNear }
  });
};