// Function to Calculate Wind Chill
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (
            13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temp * Math.pow(windSpeed, 0.16)
        ).toFixed(0); // Rounded to nearest whole number
    } else {
        return "N/A";
    }
}

// DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", function () {
    // Static Weather Data
    const temp = 10; // Celsius
    const windSpeed = 6; // km/h

    // Calculate and Display Wind Chill
    const windChill = calculateWindChill(temp, windSpeed);
    document.getElementById("windChill").textContent = windChill;

    // Display Current Year
    const currentYear = new Date().getFullYear();
    document.getElementById("year").textContent = currentYear;

    // Display Last Modified Date
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;
});
