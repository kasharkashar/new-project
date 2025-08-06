document.addEventListener("DOMContentLoaded", function() {
    var myCollapseElement = document.getElementById('mainNavbar')
    var bsCollapse = new bootstrap.Collapse(myCollapseElement, {
        toggle: false
    });
    document.getElementById('myToggle').addEventListener('click', function() {
        bsCollapse.toggle();
    });
});
// timer  
let futureTime = new Date().getTime() + (2 * 24 * 60 * 60 * 1000)
setInterval (function() {
    let now = new Date().getTime();
    let remaining = futureTime - now;
    if (remaining <= 0) {
        document.getElementById("days").innerText = 0;
        document.getElementById("hours").innerText = 0;
        document.getElementById("minutes").innerText = 0;
        document.getElementById("seconds").innerText = 0;
    }else{
        let days = Math.floor(remaining / (1000 * 60 * 60  * 24));
        let hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((remaining % (1000 *60) / 1000));

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }
}, 1000);