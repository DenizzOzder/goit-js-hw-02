console.log("JS-2 -----------------------------------");

function formatMessage(message, maxLength){
    const messageL = message.length;
    if (messageL <= maxLength){
        return message;
    }
    else
    {
        return message.slice(0,maxLength) + "...";
    }
    
}

console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"