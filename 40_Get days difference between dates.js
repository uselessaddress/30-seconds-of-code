// Calculate the difference (in days) between to Date objects.
const getDaysDiffBetweenDates = (dateInitial, dateFinal) => (dateFinal - dateInitial) / (1000 * 3600 * 24);

console.log(getDaysDiffBetweenDates(new Date('2017-12-13'),new Date('2017-12-22')))