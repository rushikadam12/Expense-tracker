const DateFormat = (Userdate) => {
  const newDate = new Date(Userdate);
  const NewDate = newDate.toISOString().slice(0, 10);
  return NewDate;
};

export default DateFormat;
