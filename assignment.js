// 1st Function ====== (Kilometer To Meter)
function kilometerToMeter(kilometer) {
    if (kilometer >= 0) {
        var meter = kilometer * 1000;
        return meter;
    } else {
        return "Invalid Number"
    }
}
var totalMeter = kilometerToMeter(-5);
console.log(totalMeter);


// 2nd Function ====== (Budget Claculator)
function budgetCalculator(clock, phone, laptop) {
    var clockPrice = 50; //Taka
    var phonePrice = 100; //Taka
    var laptopPrice = 300; //Taka

    if (clock >= 0 && phone >= 0 && laptop >= 0) {
        var totalPrice = (clock * clockPrice) + (phone * phonePrice) + (laptop * laptopPrice); //Taka
        return totalPrice;
    } else {
        return "Invalid Number"
    }
}
var totalBudget = budgetCalculator(1, 2, 3);
console.log(totalBudget);



// 3rd Function ====== (Hotel Cost)
function hotelCost(day) {
    var totalCost = 0;

    if (day <= 10) {
        totalCost = day * 100;
        return totalCost;
    } else if (day <= 20) {
        var first10 = 10 * 100;
        var remaining = day - 10;
        var second10 = remaining * 80;
        totalCost = first10 + second10;
        return totalCost;
    } else {
        var first10 = 10 * 100;
        var second10 = 10 * 80;
        var remaining = day - 20;
        var thirdToInfinity = remaining * 50;
        totalCost = first10 + second10 + thirdToInfinity;
        return totalCost;
    }
}
var result = hotelCost(17);
console.log(result);




// 4th Function ====== (Mega Friend)
function megaFriend(names) {
    var bigName = "";
    for (var i = 0; i < names.length; i++) {
        var element = names[i];
        if (element.length > bigName.length) {
            bigName = element;
        }
    }
    return bigName;
}
var allNames = megaFriend(["Arif", "Abul", "Aleya", "Rabeya"]);
console.log(allNames);