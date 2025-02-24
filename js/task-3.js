console.log("JS-3 -----------------------------------")
function checkForSpam(message){
    const checkMessage = message;
    if( checkMessage.toLowerCase().includes("spam") || checkMessage.toLowerCase().includes("sale") )
    {
        return true;
    }
    else{
        return false;
    }
}
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
