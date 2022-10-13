const clickedButton = document.getElementById("btn");
const metersToFeet = document.getElementById("meters_to_feet")
const litersToGallons = document.getElementById("liters_to_gallons")
const kilosToPounds = document.getElementById("kilos_to_pounds")
let input = document.getElementById("entered")


clickedButton.addEventListener("click", () => {
    let enteredValue = document.getElementById("entered").value

    if (
        enteredValue === "1"
    ) {
        metersToFeet.textContent = `${enteredValue} meter = ${(enteredValue *
            3.28084).toFixed(3)} feet | ${enteredValue} foot = ${(enteredValue * 0.3048).toFixed(3)} meters`

        litersToGallons.textContent = `${enteredValue} liter = ${(enteredValue *
            0.2641720524).toFixed(3)} gallons | ${enteredValue} gallon = ${(enteredValue * 3.785411784).toFixed(3)} liters`

        kilosToPounds.textContent = `${enteredValue} kilo = ${(enteredValue *
            2.20462).toFixed(3)} pounds | ${enteredValue} pound = ${(enteredValue * 0.453592).toFixed(3)} kilos`
    }

    else if (!enteredValue) {

        metersToFeet.textContent = "Please enter a valid number to convert"
        litersToGallons.textContent = "Please enter a valid number to convert"
        kilosToPounds.textContent = "Please enter a valid number to convert"

    } else if (
        enteredValue < 0
    ) {
        metersToFeet.textContent = "Please enter a positive number to convert"
        litersToGallons.textContent = "Please enter a positive number to convert"
        kilosToPounds.textContent = "Please enter a positive number to convert"
    }

    else {
        metersToFeet.textContent = `${enteredValue} meters = ${(enteredValue *
            3.28084).toFixed(3)} feet | ${enteredValue} feet = ${(enteredValue * 0.3048).toFixed(3)} meters`

        litersToGallons.textContent = `${enteredValue} liters = ${(enteredValue *
            0.2641720524).toFixed(3)} gallons | ${enteredValue} gallons = ${(enteredValue * 3.785411784).toFixed(3)} liters`

        kilosToPounds.textContent = `${enteredValue} kilos = ${(enteredValue *
            2.20462).toFixed(3)} pounds | ${enteredValue} pounds = ${(enteredValue * 0.453592).toFixed(3)} kilos`
    }
})

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        clickedButton.click()
    }
})