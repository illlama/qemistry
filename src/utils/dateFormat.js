const dateFormat = (date) => {
  if (date === null) {
    date = new Date();
  }
  const year = date.year;
  let month = date.month;
  month = month >= 10 ? month : '0' + month;
  let day = date.day;
  day = day >= 10 ? day : '0' + day;
  return year + '-' + month + '-' + day;
};

export default dateFormat;
