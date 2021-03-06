function toggleTheme() {
    var theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == 'nightStyle.css') {
        theme.href = 'style.css';
    } else {
        theme.href = 'nightStyle.css';
    }

    // Saves the value of checkbox
    var check = document.getElementById('cb');
    localStorage.setItem("cb", check.checked);
}

// Loading the saved value of checkbox
var checked = JSON.parse(localStorage.getItem("cb"));
document.getElementById("cb").checked = checked;

var theme = document.getElementsByTagName('link')[0];
if (document.getElementById('cb').checked == true) {
    theme.href = 'style.css';
}
else {
    theme.href = 'nightStyle.css';
}

function navSideOpen() {
    document.getElementById("mymenu").style.width = "100%";
    document.getElementById("content").style.width = "0%";
}

function navSideClosed() {
    document.getElementById("mymenu").style.width = "0";
    document.getElementById("content").style.width = "100%";
}

document.addEventListener('keydown', function (e) {
    if (e.key === "Escape") {
        document.getElementById("mymenu").style.width = "0";
        document.getElementById("content").style.width = "100%";
    }
});

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xStart = null;

function getTouches(e) {
    return e.touches ||
        e.originalEvent.touches;
}

function handleTouchStart(e) {
    const firstTouch = getTouches(e)[0];
    xStart = firstTouch.clientX;
};

function handleTouchMove(e) {
    if (!xStart) {
        return;
    }

    var xEnd = e.touches[0].clientX;

    var difference = xStart - xEnd;


    //if (difference > 15) {
        //document.getElementById("mymenu").style.width = "100%";
        //document.getElementById("content").style.width = "0%";
    //}
    if (difference < -15){
        document.getElementById("mymenu").style.width = "0";
        document.getElementById("content").style.width = "100%";
    }
    xStart = null;
};
