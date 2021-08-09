var perpendicular = document.querySelector("#perpendicular");
var base = document.querySelector("#base");
var calculateButton = document.querySelector("#calculate-button")
var outputBox = document.querySelector("#output-box");
var errorBox = document.querySelector("#error-box");

calculateButton.addEventListener("click", clickHandler)

function clickHandler() {

    var perpendicularLength = Number(perpendicular.value);
    var baseLength = Number(base.value);


    errorBox.style.display = "none";
    outputBox.style.display = "none";

    if (baseLength > 0 && perpendicularLength > 0) {
        var hypotenuse = calculateHypotenuse(perpendicularLength, baseLength)

        outputBox.style.display = "block";
        outputBox.innerText = "The length of Hypotenuse for given sides is: " + hypotenuse;
    } else {
        alert("Input Value Error: Input should be a number and more than zero.");
        errorBox.style.display = "block";
        errorBox.innerText = "Please Enter Valid values in both the fields."
    }

}

function calculateHypotenuse(p, b) {
    var hypotenuse = Math.sqrt(p * p + b * b);
    return hypotenuse.toFixed(3);
}