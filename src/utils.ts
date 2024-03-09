export function calculateExperience() {
  // Define the start date (September 2020)
  const startDate: any = new Date("2020-09-03");

  // Get the current date
  const currentDate: any = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate - startDate;

  // Convert milliseconds to years (assuming an average year length of 365.25 days)
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
  const years = timeDifference / millisecondsInYear;

  // Round to 1 decimal point
  const roundedYears = Math.round(years * 10) / 10;

  return roundedYears;
}
