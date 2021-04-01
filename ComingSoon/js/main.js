const countdown = document.querySelector('.countdown');

//set launch date
const launchDate = new Date('Jan 1, 2022 13:00:00').getTime();

//interval update every second
const intv1 = setInterval(function() {
//todays date and time in ms
    const now = new Date().getTime();

    //distance from now to the launch date ms
    const distance = launchDate - now;
    
    //time calculation (days, hours etc)
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / ( 1000 * 60 * 60));
    const mins =  Math.floor((distance % (1000 * 60 * 60)) / ( 1000 * 60));
    const seconds =  Math.floor((distance % (1000 * 60)) / 1000);

    //display the result
    countdown. innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
`;

//if launch date passed 
if (distance < 0) {
    //stop the countdown
    clearInterval(intvl);
    //style and output text launched
    countdown.style.color = '#17a2b8';
    countdown.innerHTML = 'Launched';
}

}, 1000);