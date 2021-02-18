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
if (document.getElementById('cb').checked ==  true) {
    theme.href = 'style.css';
}
else {
    theme.href = 'nightStyle.css';
}