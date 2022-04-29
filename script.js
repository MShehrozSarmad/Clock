const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalClock = document.querySelector('.digitalClock');

function setDate(){
    const now = new Date;

    const seconds = now.getSeconds();
    const secDeg = ((seconds/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secDeg}deg)`;

    const minutes = now.getMinutes();
    const minDeg = ((minutes/60) * 360) + 90;
    minsHand.style.transform = `rotate(${minDeg}deg)`;

    let hours = now.getHours();
    const hourDeg = ((hours/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

    // newHours = now.toLocaleString('en-US', { hour: 'numeric', hour12: true });
    digitalClock.innerHTML = `
       <span class="hour"> ${(hours%12) == 0 ? hours = 12 : hours = (hours%12)} </span>  : 
       <span class="minute"> ${minutes} </span> : 
       <span class="second"> ${seconds} </span>
       <span class="amPm"> ${(hours%12) >= 12 ? 'AM' : 'PM'} </span>
    `;
}

setInterval(setDate, 1000);
setDate(); 