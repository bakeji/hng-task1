const currentDayOfTheWeek = document.querySelector ('[data-testid="currentDayOfTheWeek"]');
const currentUtcTime = document.querySelector('[data-testid="currentUTCTime"]');

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate =new  Date();
const day = currentDate.getDay();
const currentDay = daysOfWeek[day];
const currentTime = currentDate.getUTCMilliseconds()

currentUtcTime.textContent = currentTime;
currentDayOfTheWeek.textContent = currentDay;

