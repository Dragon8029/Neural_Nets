//rawData = [{ open: number, high: number, low: number, close: number }]

function scaleDown(step) { // normalize
    return {
        open: step.open / 138, 
        high: step.high / 138,
        low: step.low / 138, 
        close: step.close /138
    };
}

console.log(scaleDown(rawData[0]));