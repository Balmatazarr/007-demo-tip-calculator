// Калькулятор чаевых
let people;
let moneySum;
while (true) {
    people = prompt("Введите количество людей: ");

    if (people === "" || people <= 0 || isNaN(people)) {
        alert("Введите корректное количество людей!");
        continue;
    } else {
        moneySum = prompt("Введите потраченную людьми сумму: ");
    };

    if (moneySum < 0 || isNaN(moneySum) || moneySum === "") {
        alert("Введите корректную сумму затраченных средств!");
        continue;
    } else {
        break;
    };
};

let tip = Math.ceil((moneySum * 1.1) / people);

alert(`Каждый из посетителей должен заплатить по: ${tip} руб.`);