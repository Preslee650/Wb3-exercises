/* function getSocSecTax(grossPay) {
    let taxRate=.062;
    let socialSecurityTax=taxRate * grossPay;
    return socialSecurityTax
}
//argument
let pay=750;
let socialTax=getSocSecTax(pay);
console.log(socialTax) */

/* function getMedicareTax(grossPay) {
    let taxRate=1.45/100;
    let socialSecurityTax=taxRate * grossPay;
    return socialSecurityTax
}
let pay=1550;
let socialTax=getMedicareTax(pay);
console.log(socialTax) */

function getFederalTax(grossPay, withHoldingCode) {
    let taxRate = 23 / 100;
    let federalTax;
    if (withHoldingCode == 0) {
        federalTax = grossPay * 23 / 100
    }
    else if (withHoldingCode == 1) {
        federalTax = grossPay * 21 / 100
    }
    else if (withHoldingCode == 2) {
        federalTax = grossPay * 19.5 / 100
    }
    else if (withHoldingCode == 3) {
        federalTax = grossPay * 18.5 / 100
        return federalTax;
    }
    else if (withHoldingCode >= 4) {
        let taxRate = parseFloat(.18 - (withHoldingCode - 4) * .005)
        federalTax = grossPay * taxRate;

    }
    return federalTax;
}
let withHoldingCode = 1;
let pay = 1100;
let tax=getFederalTax(pay, withHoldingCode)
console.log(tax)
