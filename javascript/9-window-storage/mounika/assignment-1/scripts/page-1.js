function goToUrl() {
    const url = document.getElementById('url').value;
    if(url) window.location.href = url;
}

function goToPage2() {
    window.location.href = 'page-2.html';
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
