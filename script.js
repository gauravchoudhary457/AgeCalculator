function calculateAge() {
    const today = new Date();
    const birthDateInput = document.getElementById("birthdate").value;

    const birthDateParts = birthDateInput.split("-");

    const birthYear = birthDateParts[0];
    const birthMonth = birthDateParts[1] - 1;
    const birthDay = birthDateParts[2];

    const birthDate = new Date(birthYear, birthMonth, birthDay);

    console.log("Input:", birthDateInput);
    console.log("Parts:", birthDateParts);
    console.log("Birth Date:", birthDate);

    const ageInMilliSeconds = today - birthDate;
    const ageInSeconds = Math.floor(ageInMilliSeconds / 1000);
    const ageInMinutes = Math.floor(ageInSeconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDays = Math.floor(ageInHours / 24);
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInMonths = Math.floor(ageInDays / 30.436875);
    const ageInYears = Math.floor(ageInDays / 365.25);
    const resultContainer = document.getElementById("resultContainer");

    const result = document.getElementById("result");
    result.innerHTML = `
                <div class="resultItems">
                    <h3>Age:</h3>
                    <p>${ageInYears} Years ${ageInMonths%12} Months ${ageInDays%30} Days</p>
                </div>

                <div class="resultItems">
                    <h3>Months Passed:</h3>
                    <p>${ageInMonths} Months</p>
                </div>
                <div class="resultItems">
                    <h3>Weeks Passed:</h3>
                    <p>${ageInWeeks} Weeks</p>
                </div>
                <div class="resultItems">
                    <h3>Days Passed:</h3>
                    <p>${ageInDays} Days</p>
                </div>
                    <h3>Hours Passed:</h3>
                    <p>${ageInHours} Hours</p>
                </div>
                </div>
                    <h3>Minutes Passed:</h3>
                    <p>${ageInMinutes} Minutes</p>
                </div>
                </div>
                    <h3>Seconds Passed:</h3>
                    <p>${ageInSeconds} Seconds</p>
                </div>

    `;


}

const ageCalculaterForm = document.getElementById("ageCalculator");
ageCalculaterForm.addEventListener("submit", (Event) => {


    Event.preventDefault();
    calculateAge();
})