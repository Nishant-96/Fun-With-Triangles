var base = document.querySelector("#base");
var height = document.querySelector("#height");
var calculateButton = document.querySelector("#calculate-button");
var outputBox = document.querySelector("#output-box");
var errorBox = document.querySelector("#error-box");


calculateButton.addEventListener("click", clickHandler);

function clickHandler() {
    var baseOfTriangle = Number(base.value);
    var heightOfTriangle = Number(height.value);


    errorBox.style.display = "none";
    outputBox.style.display = "none";

    if (baseOfTriangle > 0 && heightOfTriangle > 0) {
        var areaOfTriangle = calculateArea(baseOfTriangle, heightOfTriangle);

        outputBox.style.display = "block";
        outputBox.innerText = "The Area of the triangle is: " + areaOfTriangle;
    } else {
        errorBox.style.display = "block";
        errorBox.innerText = "Please Enter Valid values in both the fields."
    }
}

function calculateArea(b, h) {
    var area = (b * h) / 2;
    return area;
}