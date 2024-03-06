export const SCREENS = {
  MAIN_TASKS: 'FIrst Screen',
  TASKS: 'Tasks',
  SEARCH: 'Search',
  STATS: 'Stats',
  PROFILE: 'Profile',
  DETAIL: 'Detail',
};

export const numberToDayMap: {[key: number]: string} = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thrusday',
  5: 'Friday',
  6: 'Saturday',
};

export const numberToMonthMap: {[key: number]: string} = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};

export enum HeaderLevel {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  Large = 'Large',
}
