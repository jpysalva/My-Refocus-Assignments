function toHours(seconds){
    let hours = Math.floor(seconds / 3600);
    let remainder = (seconds % 3600)
    return {hours: hours, remainder: remainder};
}

function toMinutes(seconds){
    let minutes = Math.floor(seconds / 60);
    let remainder = (seconds % 60)
    return {minutes: minutes, remainder: remainder};
}

function humanDuration(duration){
    var hoursObject = toHours(duration);
    var minutesObject = toMinutes(hoursObject.remainder);
    var seconds = minutesObject.remainder;

    return `The formatted duration of ${duration} is ${hoursObject.hours} ${hoursObject.hours > 1? "Hours": "Hour"}, 
    ${minutesObject.minutes} ${minutesObject.minutes > 1? "Minutes": "Minute"} and ${seconds} ${seconds > 1? "Seconds":"Second"}.`;
}

console.log(humanDuration(4800));
console.log(humanDuration(5212));
console.log(humanDuration(300));


