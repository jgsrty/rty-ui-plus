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
  let dayList = [];
  let lastMonthTarget = 1;
  let currentMonthTarget = 1;
  let nextMonthTarget = 1;
  // 根据日期组件的天数布局，共计42天，包含上月剩余天数+当月天数+下月初始天数
  let calendarCount = 42;
  for (let i = 0; i < calendarCount; i++) {
    // 上个月需要渲染的个数，以及对应的值
    if (lastMonthTarget <= currentMonthFirstDayWeek) {
      dayList.unshift({
        value: lastMonthDays--,
        disabled: true,
        date: `${year}-${month - 1}-${lastMonthDays + 1}`,
        index: i,
      });
      lastMonthTarget++;
    } else if (currentMonthTarget <= currentMonthDays) {
      let today = new Date();
      // 当月
      dayList.push({
        value: currentMonthTarget++,
        disabled: false,
        active: today.getFullYear() === year && today.getMonth() + 1 === month && currentMonthTarget - 1 === today.getDate(),
        date: `${year}-${month}-${currentMonthTarget - 1}`,
        index: i,
      });
    } else {
      // 下月
      dayList.push({
        value: nextMonthTarget++,
        disabled: true,
        date: `${year}-${month + 1}-${nextMonthTarget - 1}`,
        index: i,
      });
    }
  }
  let res = [];
  let row = 1;
  let i = 0;
  while (row <= 6) {
    let arr = [];
    for (let j = 0; j < 7; j++) {
      arr.push(dayList[i]);
      i++;
    }
    res.push(arr);
    row++;
  }
  return res;
};
