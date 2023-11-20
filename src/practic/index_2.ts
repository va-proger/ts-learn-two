const electricityUserData = {
    readings: 95,
    units: "kWt",
    mode: "double",
};

const waterUserData = {
    readings: 3,
    units: "m3",
};

const elRate: number = 0.45;
const wRate: number = 2;

const monthPayments: number[] = [0, 0]; // [electricity, water]

const calculatePayments = (
    {readings, mode} : { readings: number, mode: string },
    {readings: userReadings} : { readings: number },
    elRate: number,
    wRate: number): void => {
    if (mode === "double" && readings < 50) {
        monthPayments[0] = readings * elRate * 0.7;
    } else {
        monthPayments[0] = readings * elRate;
    }

    monthPayments[1] = userReadings * wRate;
};

calculatePayments(electricityUserData, waterUserData, elRate, wRate);

const sendInvoice = (
    [electricCost, waterCost] = monthPayments,
     {readings, units}:{readings:number, units:string},
     {readings: userReadings, units: userUnits}:{readings: number, units: string}
): string => {
    const text: string = `    Hello!
    This month you used ${readings} ${units} of electricity
    It will cost: ${electricCost}€
    
    This month you used ${userReadings} ${userUnits} of water
    It will cost: ${waterCost}€`;

    return text;
};

console.log(sendInvoice(monthPayments, electricityUserData, waterUserData));