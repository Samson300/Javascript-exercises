// Hello
function hello(name="World") {
    console.log(`Hello ${name}.`);
}

hello("Samson");
hello();

// madlib
function madlib(name, subject) {
    return `${name}'s favorite subject in school is ${subject}.`;
}

console.log(madlib("Samson", "Math"));

// Tip Calculator
function tipAmount(bill, service) {
    let tip = 0;
    if (service === "good") {
        tip = .20;
    } else if (service === "fair") {
        tip = .15;
    } else if (service === "bad") {
        tip = .10;
    }
    return tip * bill;
}

console.log(`Bill amount`);
console.log(100);
console.log("Tip amount");
console.log(tipAmount(100, "good"));

// Tip Calculator2
function totalAmount(bill, service) {
    if (service === "good") {
        return bill * .20 + bill;
    } else if (service === "fair") {
        return bill * .15 + bill;
    } else if (service === "bad") {
        return bill * .10 + bill;
    }
}

console.log("Total amount");
console.log(totalAmount(100, "good"));

// Tip Calculator3
function splitAmount(bill, service, numPeople) {
    if (service === "good") {
        return ((.20 * bill) + bill) / numPeople;
    } else if (service === "fair") {
        return ((.15 * bill) + bill) / numPeople;
    } else if (service === "bad") {
        return ((.10 * bill) + bill) / numPeople;
    }
}

console.log("Split amount");
console.log(splitAmount(100, "good", 2));