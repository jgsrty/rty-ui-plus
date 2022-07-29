// 当前月份的天数
const getCurrentMonthDays = (year, month) => {
  return new Date(year, month, 0).getDate();
};

// 当前月份1号是周几
const getCurrentMonthFirstDayWeek = (year, month) => {
  return new Date(year, month - 1, 1).getDay();
};

export const generateDateData = ([year, month]) => {
  // 上月天数
  let lastMonthDays = getCurrentMonthDays(year, month - 1);
  // 当前月天数
  let currentMonthDays = getCurrentMonthDays(year, month);
  // 当月1号是周几
  let currentMonthFirstDayWeek = getCurrentMonthFirstDayWeek(year, month);
  console.log(lastMonthDays)
  console.log(currentMonthDays)
  console.log(currentMonthFirstDayWeek)
};
