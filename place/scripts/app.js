function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (
            13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temp * Math.pow(windSpeed, 0.16)
        ).toFixed(2);
    } else {
        return "N/A";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const temp = 10;
    const windSpeed = 6;

    const windChill = calculateWindChill(temp, windSpeed);
    document.getElementById("windChill").textContent = windChill;

    const currentYear = new Date().getFullYear();
    document.getElementById("year").textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;
});
