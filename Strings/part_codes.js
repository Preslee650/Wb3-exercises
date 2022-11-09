let supplier = 'ACME:123-L';
getSupplier(supplier);
getSupplier(supplier);
getSupplier(supplier);
let supplier2 = 'DI:12345-M';
getProductNumber(supplier2);
getProductNumber(supplier2);
getProductNumber(supplier2);
let supplier3 = 'ACE:1-12';
getSize(supplier3);
getSize(supplier3);
getSize(supplier3);

function getSupplier(supplierInfo) {
    let positionOfColon = supplierInfo.indexOf(':')
    let supplierName= supplierInfo.substring(0, positionOfColon);
    console.log(supplierName)
}


function getProductNumber(supplierInfo) {
    let positionOfColon = supplierInfo.indexOf(':')
    let positionOfMinus = supplierInfo.indexOf('-')
    let supplierNum = supplierInfo.substring(positionOfColon+1, positionOfMinus);
    console.log(supplierNum) 
} 

// searching for everything in string after the minus sign
function getSize(supplierInfo) {
    //index is giving me position of minus sign
    let positionOfMinus = supplierInfo.indexOf('-')
    //substring is breaking up string by searching for what i'm looking for
    let supplierLetterSize = supplierInfo.substring(positionOfMinus+1);
    //displaying output
    console.log(supplierLetterSize)
}
