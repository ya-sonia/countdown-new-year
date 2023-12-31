const newyear="1/1/2024";


const daysEl=document.querySelector(".day");
const hourEl=document.querySelector(".hour");
const minutesEl=document.querySelector(".minutes");
const secondEl=document.querySelector(".second");

function timecountdown()
{
    const nowdate=new Date();
    const newyeardate=new Date(newyear);
    const totalseconds=(newyeardate - nowdate)/1000;


    const days=Math.floor(totalseconds /3600/24);
    const hours =Math.floor(totalseconds /3600 )% 24;
    const minutes=Math.floor(totalseconds /60)%60;
    const seconds =Math.floor(totalseconds )% 60;


    daysEl.textContent = formatTime(days);
    hourEl.textContent = formatTime(hours);
    minutesEl.textContent = formatTime(minutes);
    secondEl.textContent = formatTime(seconds);
}
function formatTime(time)
{
    return time >10 ? time : `0${time}`;
}

timecountdown()
{
    setInterval(timecountdown,1000);
}