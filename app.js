function toggleTheme() {
    var theme = document.getElementsByTagName('link')[0];
    var check = document.getElementById('cb');
    if (theme.getAttribute('href') == 'nightStyle.css') { 
        theme.href = 'style.css';
    } else { 
        theme.href = 'nightStyle.css';
    }
}

var theme = document.getElementsByTagName('link')[0];
if (document.getElementById('cb').checked ==  true) {
    theme.href = 'style.css';
}
else {
    theme.href = 'nightStyle.css';
}