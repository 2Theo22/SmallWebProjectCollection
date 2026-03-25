

window.onload = function() {
    let count = localStorage.getItem('pageVisitCount');
    if (count === null) {
        count = 0;
    }
    count = parseInt(count) + 1;

    localStorage.setItem('pageVisitCount', count);


    document.getElementById('number').innerText = `# ${count}`;
};
