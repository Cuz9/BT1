function displayMyNumber() {
    let myNumber = document.getElementById("myNumber").value;
    document.getElementById("myNumberOutput").innerText = "Giá trị của biến myNumber là: " + myNumber;
}

function displayStringLength() {
    let myString = document.getElementById("myString").value;
    document.getElementById("stringLengthOutput").innerText = "Độ dài của chuỗi là: " + myString.length;
}

function displayGenderInfo() {
    let isMale = document.getElementById("isMale").value;
    let genderInfoOutput = document.getElementById("genderInfoOutput");
    if (isMale === "true") {
        genderInfoOutput.innerText = "Người này là nam giới";
    } else if (isMale === "false") {
        genderInfoOutput.innerText = "Người này không phải là nam giới";
    } else {
        genderInfoOutput.innerText = "Giá trị không hợp lệ";
    }
}

function checkEvenOrOdd() {
    let number = document.getElementById("checkEvenOdd").value;
    let evenOddOutput = document.getElementById("evenOddOutput");
    if (number % 2 === 0) {
        evenOddOutput.innerText = "Số chẵn";
    } else {
        evenOddOutput.innerText = "Số lẻ";
    }
}

function checkPositiveInteger() {
    let number = document.getElementById("checkPositiveInteger").value;
    let positiveIntegerOutput = document.getElementById("positiveIntegerOutput");
    if (number > 0 && Number.isInteger(Number(number))) {
        positiveIntegerOutput.innerText = "Số nguyên dương";
    } else {
        positiveIntegerOutput.innerText = "Không phải số nguyên dương";
    }
}

function checkLeapYear() {
    let year = document.getElementById("checkLeapYear").value;
    let leapYearOutput = document.getElementById("leapYearOutput");
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        leapYearOutput.innerText = year + " là năm nhuận";
    } else {
        leapYearOutput.innerText = year + " không phải là năm nhuận";
    }
}

function sumToN() {
    let n = document.getElementById("sumToN").value;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    document.getElementById("sumToNOutput").innerText = "Tổng các số từ 1 đến " + n + " là: " + sum;
}

function calculateFactorial() {
    let n = document.getElementById("factorial").value;
    let factorial = 1;
    let i = 1;
    while (i <= n) {
        factorial *= i;
        i++;
    }
    document.getElementById("factorialOutput").innerText = "Giai thừa của " + n + " là: " + factorial;
}

function printMultiplicationTable() {
    let multiplicationTableOutput = document.getElementById("multiplicationTableOutput");
    multiplicationTableOutput.innerText = "";
    for (let i = 2; i <= 9; i++) {
        multiplicationTableOutput.innerText += "Bảng cửu chương của " + i + ":\n";
        for (let j = 1; j <= 10; j++) {
            multiplicationTableOutput.innerText += i + " x " + j + " = " + i * j + "\n";
        }
        multiplicationTableOutput.innerText += "\n";
    }
}
