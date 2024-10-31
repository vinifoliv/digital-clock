const $display = document.getElementById('display');

setInterval(updateTime, 1000);

function updateTime() {
    let time = '';

    let hours = new Date().getHours();
    if (hours < 10) hours = '0' + hours;
    time += hours + ':';

    let minutes = new Date().getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    time += minutes + ':';
    
    let seconds = new Date().getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    time += seconds;

    $display.innerHTML = time;
}