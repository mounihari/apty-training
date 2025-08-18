function goToUrl() {
    const url = document.getElementById('url').value;
    if(url) window.location.href = url;
}

function goToPage1() {
    window.location.href = 'page-1.html';
}

function goBack() {
    window.history.back();
}

function goForward() {
    window.history.forward();
}

function reloadPage() {
    window.location.reload();
}
