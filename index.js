/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const unitEl = document.getElementById("unit-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function() {
    const inputValue = unitEl.value
    
    if (inputValue) {
        lengthEl.textContent = `${inputValue} Meters =  ${(inputValue * 3.281).toFixed(3)} Feet | ${inputValue} Feet = ${(inputValue / 3.281).toFixed(3)} Meters`
        volumeEl.textContent = `${inputValue} Liters = ${(inputValue * 0.264).toFixed(3)} Gallons | ${inputValue} Gallons = ${(inputValue / 0.264).toFixed(3)} Liters`
        massEl.textContent = `${inputValue} Kilos = ${(inputValue * 2.204).toFixed(3)} Pounds | ${inputValue} Pounds = ${(inputValue / 2.204).toFixed(3)} Kilos`
    }
})