function displayMyNumber() {
    const myNumber = document.getElementById("myNumber").value;
    document.getElementById("myNumberOutput").innerText = "Giá trị của biến myNumber là: " + myNumber;
}

function displayStringLength() {
    const myString = document.getElementById("myString").value;
    document.getElementById("stringLengthOutput").innerText = "Độ dài của chuỗi là: " + myString.length;
}

function displayGenderInfo() {
    const isMale = document.getElementById("isMale").value;
    const genderInfoOutput = document.getElementById("genderInfoOutput");
    if (isMale === "true") {
        genderInfoOutput.innerText = "Người này là nam giới";
    } else if (isMale === "false") {
        genderInfoOutput.innerText = "Người này không phải là nam giới";
    } else {
        genderInfoOutput.innerText = "Giá trị không hợp lệ";
    }
}

function checkEvenOrOdd() {
    const number = document.getElementById("checkEvenOdd").value;
    const evenOddOutput = document.getElementById("evenOddOutput");
    if (number % 2 === 0) {
        evenOddOutput.innerText = "Số chẵn";
    } else {
        evenOddOutput.innerText = "Số lẻ";
    }
}

function checkPositiveInteger() {
    const number = document.getElementById("checkPositiveInteger").value;
    const positiveIntegerOutput = document.getElementById("positiveIntegerOutput");
    if (number > 0 && Number.isInteger(Number(number))) {
        positiveIntegerOutput.innerText = "Số nguyên dương";
    } else {
        positiveIntegerOutput.innerText = "Không phải số nguyên dương";
    }
}

function checkLeapYear() {
    const year = document.getElementById("checkLeapYear").value;
    const leapYearOutput = document.getElementById("leapYearOutput");
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        leapYearOutput.innerText = year + " là năm nhuận";
    } else {
        leapYearOutput.innerText = year + " không phải là năm nhuận";
    }
}

function sumToN() {
    const n = document.getElementById("sumToN").value;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    document.getElementById("sumToNOutput").innerText = "Tổng các số từ 1 đến " + n + " là: " + sum;
}

function calculateFactorial() {
    const n = document.getElementById("factorial").value;
    let factorial = 1;
    let i = 1;
    while (i <= n) {
        factorial *= i;
        i++;
    }
    document.getElementById("factorialOutput").innerText = "Giai thừa của " + n + " là: " + factorial;
}

function printMultiplicationTable() {
    const multiplicationTableOutput = document.getElementById("multiplicationTableOutput");
    multiplicationTableOutput.innerText = "";
    for (let i = 2; i <= 9; i++) {
        multiplicationTableOutput.innerText += "Bảng cửu chương của " + i + ":\n";
        for (let j = 1; j <= 10; j++) {
            multiplicationTableOutput.innerText += i + " x " + j + " = " + i * j + "\n";
        }
        multiplicationTableOutput.innerText += "\n";
    }
}