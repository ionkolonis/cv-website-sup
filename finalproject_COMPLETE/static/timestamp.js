// timestamp javascript with help from AI and javascript documentation

function updateAthensTime() {
    let now = new Date();

    let athensTime = now.toLocaleString('en-GB', {
        timeZone: 'Europe/Athens',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    document.getElementById('timestamp').innerHTML = athensTime + ' ATH';
}

updateAthensTime();
setInterval(updateAthensTime, 1000);
