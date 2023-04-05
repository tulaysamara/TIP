function convertToNum(value) {
    if (value === "" ) {
        alert("please fill in values");
    }
    return Number(value);
}
function buttonPress() {

    let billAmount = convertToNum(document.getElementById("billAmount").value);
    let tipAmount = document.getElementById("tip-amount").value;
    let numOfGuest = convertToNum(document.getElementById("guestNum").value);

   

    let billTotal = 0;
    if (billAmount >= 0) {
        billTotal = (billAmount * tipAmount + billAmount) / numOfGuest
    };
    document.getElementById("total").textContent = billTotal;

};

let button = document.getElementById("button");
button.addEventListener("click", buttonPress);

let input = document.getElementById("container");

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("button").click();
    }
});
