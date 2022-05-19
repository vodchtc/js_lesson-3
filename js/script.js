//1)
function max(a, b) {
    return a > b ? a : b;
}

console.log('max(1, 2)', max(1, 2));
console.log('max(333, 111)', max(333, 111));

//2)
function pow(x, n) {
    let result = 1;

    if (n === 0) {
        return result;
    }

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

console.log('pow(3, 2)', pow(3, 2));
console.log('pow(5, 2)', pow(5, 2));
console.log('pow(10, 3)', pow(10, 3));

//3)
function howManyDays(month) {
    let days;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;

        case 2:
            days = 28;
            break;
    }

    return days;
}

console.log('howManyDays(12)', howManyDays(12));
console.log('howManyDays(2)', howManyDays(2));

//4)
function calculate(firstNumber, secondNumber, oddCb, evenCb) {
    const result = firstNumber * secondNumber;
    const isOdd = result % 2 === 0;

    if (isOdd) {
        oddCb(result);
    } else {
        evenCb(result);
    }
}

function showOdd(number) {
    console.log(number, ' четное');
}

function showEven(number) {
    console.log(number, ' нечетное');
}

calculate(3, 4, showOdd, showEven);
calculate(3, 0, showOdd, showEven);


//5)
function showNumbers() {
    let value = prompt('Введите число от 1 до 18');
    if (value === null) {
        console.log('Ввод значения отменен');
        return;
    }

    const numberValue = +value;

    if (numberValue >= 1 && numberValue <= 18) {
        for (i = 1; i <= numberValue; i++) {
            if (i % 2 === 0) {
                console.log(i);
            }
        }
    } else {
        console.log('Введено некорретное значение');
    }
}

showNumbers();