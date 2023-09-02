const useCreateDate = () => {
  const dateObj = new Date();
  // const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  // const monthName = months[dateObj.getMonth()];
  const monthName = dateObj.toLocaleString('en-US', { month: 'short' });

  const time = `[${dateObj.getHours()}:${dateObj.getMinutes()}]`;
  const date = `${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()} ${time}`;
  return date;
};

export default useCreateDate;