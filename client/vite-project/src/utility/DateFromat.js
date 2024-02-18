// const DateFormat = (Userdate) => {
//   const newDate = new Date(Userdate);
//   const NewDate = newDate.toISOString().slice(0, 10);
//   return NewDate;
// };

// export default DateFormat;

const DateFromat = (Userdate) => {
    
    const formatDate=new Date(Userdate).toLocaleDateString('en-UB')
    return formatDate
}

export default DateFromat