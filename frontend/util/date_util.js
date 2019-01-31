export const formatDate = date => {
 
  const obj = new Date(date);
  const month = obj.getMonth() + 1;
  const day = obj.getDate();
  const year = obj.getFullYear();

  return `${month}/${day}/${year}`;
}