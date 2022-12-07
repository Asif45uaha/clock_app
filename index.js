const Hour = document.querySelector('.hour');
const Min = document.querySelector('.minute');
const Sec = document.querySelector('.second');

const updateTime = () => {
    const currentDate = new Date();
    setTimeout(updateTime,1000);
    const hour = currentDate.getHours();
    const min = currentDate.getMinutes();
    const sec = currentDate.getSeconds();
    const hourDeg = (hour/12)* 360;
    Hour.style.transform = `rotate(${hourDeg}deg)`
    const minDeg = (min/60)* 360;
    Hour.style.transform = `rotate(${minDeg}deg)`
    const secDeg = (sec/60)* 360;
    Hour.style.transform = `rotate(${secDeg}deg)`
}
updateTime()