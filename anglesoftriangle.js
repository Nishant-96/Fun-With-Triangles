var angles = document.querySelectorAll(".angles");
var checkButton = document.querySelector("#check-button");
var outputBox = document.querySelector("#output-box")
var errorBox = document.querySelector("#error-box")

checkButton.addEventListener("click", clickHandler)


function clickHandler() {
    var angleOne = Number(angles[0].value);
    var angleTwo = Number(angles[1].value);
    var angleThree = Number(angles[2].value);

    errorBox.style.display = "none";
    outputBox.style.display = "none";


    if (angleOne > 0 && angleTwo > 0 && angleThree > 0) {
        var sumOfAngles = calculateSum(angleOne, angleTwo, angleThree);
        console.log(sumOfAngles);
        if (sumOfAngles === 180) {
            outputBox.style.display = "block";
            outputBox.innerText = "yayy!  The given angles form a triangle.";
        } else {
            outputBox.style.display = "block";
            outputBox.innerText = "Oops! The given angles fail to form a triangle.";
        }
    } else {
        errorBox.style.display="block";
        errorBox.innerText = "Please Enter Valid values in both the fields.";
    }

}

function calculateSum(a, b, c) {
    var sum = a + b + c;
    return sum;
}