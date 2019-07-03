// Task #1
var city = {
    'Zarephath': 728375,
    'Reinerton': 864402,
    'Spelter': 340533,
    'Henrietta': 932557,
    'Dyckesville': 421758,
    'Yettem': 250492,
    'Gracey': 551885,
    'Floris': 216435,
    'Davenport': 290139,
    'Tioga': 653031
}
var max = 0;
var maxCity = '';
for (var key in city) {
    if (max < city[key]) {
        max = city[key];
        maxCity = key;
    }
}
console.log(maxCity + ' - the city with the most population');




// Task 2
class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days;
    }
}
var worker = new Worker('Іван', 'Іванов', 10, 31);

console.log (worker.name); 
console.log (worker.surname); 
console.log (worker.rate); 
console.log (worker.days); 
console.log(worker.getSalary());