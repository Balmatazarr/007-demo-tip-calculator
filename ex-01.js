// Калькулятор чаевых
let people;
let moneySum;
while (true) {
    people = prompt("Введите количество людей: ");

    if (people == "" || people <= 0) {
        alert("Введите корректное количество людей!");
        continue;
    } else {
        moneySum = prompt("Введите потраченную людьми сумму: ");
        break;
    }
}

let tip = Math.ceil((moneySum * 1.1) / people);

alert(`Каждый из посетителей должен заплатить по: ${tip} руб.`);