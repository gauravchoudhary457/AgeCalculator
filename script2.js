// 👇 Ye function age calculate karta hai jab form submit hota hai
function calculateAge() {
    // Aaj ki tareekh aur samay ka Date object banaya
    const today = new Date();

    // User ne jo birth date input me diya usey liya
    const birthDateInput = document.getElementById("birthdate").value;

    // Birth date ko "-" se tod kar alag-alag part (YYYY, MM, DD) banaye
    const birthDateParts = birthDateInput.split("-");

    // Year, Month, Day ko number me convert kiya
    const birthYear = parseInt(birthDateParts[0]);
    const birthMonth = parseInt(birthDateParts[1]) - 1; // JS months 0 based
    const birthDay = parseInt(birthDateParts[2]);

    // Birth date object banaya
    const birthDate = new Date(birthYear, birthMonth, birthDay);

    // 👇 Accurate calendar based age calculation
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // 👇 Total days ka approx calculation
    const timeDiff = today.getTime() - birthDate.getTime();
    const totalSeconds = Math.floor(timeDiff / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;

    // 👇 Result element fetch kiya
    const result = document.getElementById("result");

    // 👇 Final output structure jaisa aap chahte ho
    result.innerHTML = `
        <div class="resultItems">
            <h3>Age:</h3>
            <p>${years} Years ${months} Months ${days} Days</p>
        </div>
        <div class="resultItems">
            <h3>Months Passed:</h3>
            <p>${totalMonths} Months</p>
        </div>
        <div class="resultItems">
            <h3>Weeks Passed:</h3>
            <p>${totalWeeks} Weeks</p>
        </div>
        <div class="resultItems">
            <h3>Days Passed:</h3>
            <p>${totalDays} Days</p>
        </div>
        <div class="resultItems">
            <h3>Hours Passed:</h3>
            <p>${totalHours} Hours</p>
        </div>
        <div class="resultItems">
            <h3>Minutes Passed:</h3>
            <p>${totalMinutes} Minutes</p>
        </div>
        <div class="resultItems">
            <h3>Seconds Passed:</h3>
            <p>${totalSeconds} Seconds</p>
        </div>
    `;
}

// 👇 Form submit hone par calculateAge function call hoga
const ageCalculaterForm = document.getElementById("ageCalculator");

// 👇 Form submit hone par page reload na ho isliye preventDefault lagaya
ageCalculaterForm.addEventListener("submit", (Event) => {
    Event.preventDefault();
    calculateAge();
});
