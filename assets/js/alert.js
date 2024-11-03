let admin;
let name;
name = 'John';
admin = name;
alert(admin)


let Gname = prompt("Введите название города", "Название")
let year = +prompt("Введите год образовния города", "Год")
let people = prompt("Введите численность населения города", 0)
let goda = 2024 - year
alert(`Городу ${Gname} исполнилось ${goda} лет с момента его образования. Население - ${people} человек`)


let Rad = +prompt("Введите радиус круга", 0)
let S = 3.14 * Rad**2
alert(S)

let a = +prompt('Введите первое число', 0);
let b = +prompt('Введите второе число', 0);
alert(a+b);
alert(a-b);
alert(a*b);
alert(a/b);
