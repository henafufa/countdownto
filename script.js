// querying elements
const title = document.querySelector('input');
const background= document.querySelector('body');
const titleDisplay= document.getElementById('eventTitle');
const dateInput= document.getElementById('countdownDate');

// set calendar to specific time that we want to count for
var eventDate = "1 jan 2022";
function countdown(){
    const currentDate = new Date();
    console.log("Current day:", currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds());
    
    const gradutionYearsDate= new Date(eventDate);

    const totalSeconds=  (gradutionYearsDate - currentDate ) / 1000;
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor(totalSeconds % (3600 * 24) / 3600);
    const minutes = Math.floor(totalSeconds % 3600 / 60);
    const seconds =Math.floor(totalSeconds % 60);
    console.log(days,hours,minutes,seconds);
    
    const dayPrint= days > 0 ? days + ( days == 1 ? ' day, ':' days, '):"";
    const hourPrint= hours > 0 ? hours + ( hours == 1 ? ' hour,':' hours, ') : "";
    const minutePrint= minutes > 0? minutes + (minutes == 1 ? ' minute, ':' minutes, '): "";
    const secondPrint= seconds > 0? seconds + (seconds == 1 ? ' second, ':' seconds, '): "";
    console.log('Timer:',dayPrint,hourPrint,minutePrint,secondPrint);
    
    return [days,hours,minutes,seconds];
}
function standardTimeFormat(time){
    return time < 10 ? `0${time}`: time;

}
function PopulateCounterTime(){
    // get elements from Ui template 
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement= document.getElementById('minutes');
    const secondsElement= document.getElementById('seconds');
 
    // populate the value to template elements
    var countDownValues = countdown();
    daysElement.innerHTML = countDownValues[0];
    hoursElement.innerHTML = standardTimeFormat(countDownValues[1]);
    minutesElement.innerHTML = standardTimeFormat(countDownValues[2]);
    secondsElement.innerHTML = standardTimeFormat(countDownValues[3]);
}
function populateCountDownTitle(){
    if(title.value == ""){
        titleDisplay.innerText = "Graduation Day"
    }
    else{
        titleDisplay.innerText= title.value;
    }
    console.log(titleDisplay.value);
}

function BackgoundBasedOnInput(){
    console.log(titleDisplay.innerText,background);
    switch(titleDisplay.innerText){
        case 'gradution':
            background.style.backgroundImage="url('./images/bg5.jpg')";
        case 'wedding':
            background.style.backgroundImage="url('./images/bg2.jpg')";
        case 'birthday':
            background.style.backgroundImage="url('./images/bg4.jpg')";
        default:
            background.style.backgroundImage="url('./images/bg8.jpg')";
    }
}

function setEventDate(){
    var defaultVal = dateInput.defaultValue;
    var currentVal = dateInput.value;
    if(defaultVal !== currentVal){
        eventDate= currentVal;
    }
    else{
        eventDate= defaultVal;
    }
    console.log(defaultVal,currentVal);
    
}
// initial call
PopulateCounterTime();
BackgoundBasedOnInput();
setInterval(PopulateCounterTime,1000);
