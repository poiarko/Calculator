var numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    DecimalBtn = document.getElementById('decimal'),
    ClearBtns = document.querySelectorAll('.clearBtn'),
    display = document.getElementById('display'),
    CurrentNumber = 0,
    NewNumber = false,
    PendingOperation = '';


for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    number.addEventListener('click', function (e) {
        numberPress(e.target.textContent);
    });
}

function numberPress(number) {
    if (NewNumber) {
        display.value = number;
        NewNumber = false;
    } else {
        if (display.value === '0') {
            display.value = number;
        } else {
            display.value += number;
        };
    };
};

for (var i = 0; i < operations.length; i++) {
    var operationBtn = operations[i];
    operationBtn.addEventListener('click', function (e) {
        operation(e.target.textContent);
    });
}

function operation(op) {
    var localOperationMemory = display.value;
    if (NewNumber && PendingOperation !== '=') {
        display.value = CurrentNumber;
    } else {
        NewNumber = true;
        if (PendingOperation === '+') {
            CurrentNumber += parseFloat(localOperationMemory);
        } else if (PendingOperation === '-') {
            CurrentNumber -= parseFloat(localOperationMemory);
        } else if (PendingOperation === '×') {
            CurrentNumber *= parseFloat(localOperationMemory);
        } else if (PendingOperation === '÷') {
            CurrentNumber = CurrentNumber / parseFloat(localOperationMemory);
        }
        else if (PendingOperation === 'ⅹⁿ') {
            CurrentNumber = Math.pow(CurrentNumber, localOperationMemory);
        }
        else {
            CurrentNumber = parseFloat(localOperationMemory);
        };
        display.value = CurrentNumber;
        PendingOperation = op;
    };
};


for (var i = 0; i < ClearBtns.length; i++) {
    var clearBtn = ClearBtns[i];
    clearBtn.addEventListener('click', function (e) {
        clear(e.srcElement.id);
    });
};

function clear(id) {
    if (id === 'ce') {
        display.value = '0';
        NewNumber = true;
    } else if (id === 'c') {
        display.value = '0';
        NewNumber = true;
        CurrentNumber = 0;
        PendingOperation = '';
    };
};

var arr1 = [];
var arr2 = [];
function mrc() {
    if (arr2.length > 0) {
        arr2.reverse();
        var a = arr2.shift();
        document.getElementById('display').value = a;
    }
}

function mcPlus() {
    if (arr2.length <= arr1.length && arr1.length > 0) {
        var a = arr1.pop();
        var c = arry1.push(a);
    }
}

function percent() {
    display.value = (parseFloat(display.value) / 100) * parseFloat(CurrentNumber);
}

function sqrt() {
    var localNumberMemory = display.value;
    display.value = Math.sqrt(localNumberMemory);
}

DecimalBtn.addEventListener('click', decimal);
function decimal() {
    var localDecimalMemory = display.value;

    if (NewNumber) {
        localDecimalMemory = '0.';
        NewNumber = false;
    } else {
        if (localDecimalMemory.indexOf('.') === -1) {
            localDecimalMemory += '.';
        }
    };
    display.value = localDecimalMemory;
};

function delet() {
    var del = display.value;
    del = del.substring(0, del.length - 1);
    display.value = del;
}





