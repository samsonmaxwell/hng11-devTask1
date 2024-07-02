const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("currentDay").innerHTML = day;

const now = new Date();
const utcHours = now.getUTCHours().toString().padStart(2, '0');
const utcMinutes = now.getUTCMinutes().toString().padStart(2, '0');
const utcSeconds = now.getUTCSeconds().toString().padStart(2, '0');

const utcTime = `${utcHours}:${utcMinutes}:${utcSeconds}`;
document.getElementById("currentTimeUTC").innerHTML = utcTime;

