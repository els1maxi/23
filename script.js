function convertTime(minutes) {
    if (isNaN(minutes)) {
        return "Введіть число!";
    }

    if (minutes < 0) {
        return "Введіть додатнє число!";
    }

    if (minutes >= 1440) {
        return "Введіть менше 1440 хвилин (24 години)!";
    }

    const hours = Math.floor(minutes / 60);
    const remainderMinutes = minutes % 60;

    let timeString = "";

    if (hours > 0) {
        timeString += hours === 1 ? "1 година" : `${hours} години`;
    }

    if (remainderMinutes > 0) {
        timeString += hours > 0 ? " " : ""; 
        timeString += remainderMinutes === 1 ? "1 хвилина" : `${remainderMinutes} хвилин`;
    }

    return timeString;
}

function convertAndDisplay() {
    const minutesInput = document.getElementById("minutesInput").value;
    const minutes = parseInt(minutesInput);
    const result = convertTime(minutes);

    document.getElementById("result").innerText = result;
}
