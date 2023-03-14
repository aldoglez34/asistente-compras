export const createRandomDate = () => {
  const today = new Date();
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  const timestampToday = today.getTime();
  const timestampSixMonthsAgo = sixMonthsAgo.getTime();
  const randomTimestamp =
    Math.floor(Math.random() * (timestampToday - timestampSixMonthsAgo)) +
    timestampSixMonthsAgo;
  return new Date(randomTimestamp);
};
