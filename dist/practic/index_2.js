"use strict";
const electricityUserData = {
    readings: 95,
    units: "kWt",
    mode: "double",
};
const waterUserData = {
    readings: 3,
    units: "m3",
};
const elRate = 0.45;
const wRate = 2;
const monthPayments = [0, 0]; // [electricity, water]
const calculatePayments = ({ readings, mode }, { readings: userReadings }, elRate, wRate) => {
    if (mode === "double" && readings < 50) {
        monthPayments[0] = readings * elRate * 0.7;
    }
    else {
        monthPayments[0] = readings * elRate;
    }
    monthPayments[1] = userReadings * wRate;
};
calculatePayments(electricityUserData, waterUserData, elRate, wRate);
const sendInvoice = ([electricCost, waterCost] = monthPayments, { readings, units }, { readings: userReadings, units: userUnits }) => {
    const text = `    Hello!
    This month you used ${readings} ${units} of electricity
    It will cost: ${electricCost}€
    
    This month you used ${userReadings} ${userUnits} of water
    It will cost: ${waterCost}€`;
    return text;
};
console.log(sendInvoice(monthPayments, electricityUserData, waterUserData));
