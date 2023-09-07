const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUtcTime = document.querySelector('[data-testid="currentUTCTime"]');

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate =new  Date();
const day = currentDate.getDay();
const currentDay = daysOfWeek[day];

const startTime= performance.now();
const currentTime = startTime-startTime;
    

setTimeout(() => {
    const endTime = performance.now();
    const currentTime = endTime - startTime;
    currentUtcTime.textContent = `Current UTC Time: ${currentTime} milliseconds`;
  }, 100);


currentDayOfTheWeek.textContent = `Current Day of the Week:${currentDay}`;

