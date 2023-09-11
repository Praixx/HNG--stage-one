
const dateContainer = document.querySelector(".day");
const timeContainer = document.querySelector(".time");


function day(){
    const currentDay = new Date();
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayIndex = currentDay.getDay();
    dateContainer.innerHTML = `The current day of the week: ${weekDays[dayIndex]}`;
}

day();


function updateTime(){

    const currentDay = new Date();
    const timeMilliseconds = currentDay.getTime();

    timeContainer.innerHTML = `Current UTC time in milliseconds: ${timeMilliseconds}`;
}

setInterval(updateTime, 1000);

updateTime();