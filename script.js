const date = new Date();
let  today = date.getDay();
switch (today) {
    case 1:
        today = 'Monday';
        break;
    case 2:
        today = 'Tuesday';
        break;
    case 3: 
        today = 'Wednessday';
        break;
    case 4:
        today = 'Thursday';
        break;
    case 5: 
        today = 'Friday';
        break;
    case 6: 
        today = 'Saturday';
        break;
    case 7:
        today = 'Sunday'
        break; 
    default:
        break;
}

const days = document.getElementById("today");
const currentTime = document.getElementById("utc-time")
days.textContent = today;

function timeUpdate(){
    const time = date.getUTCMilliseconds()
    currentTime.textContent = time; 
}

setInterval(timeUpdate, 1000); 