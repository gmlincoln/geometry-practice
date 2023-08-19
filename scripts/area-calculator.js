//Get Value By ID using function
function getValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValueStr = inputField.value;
    const inputValue = parseFloat(inputValueStr);
    inputField.value = '';
    return inputValue;
}

// Set Value By ID using Function
function setValueById(elementId, elementValue) {
    const displayElement = document.getElementById(elementId);
    displayElement.innerText = elementValue;
}


// Triangle Area Calculation Function
function triangleCalculator() {
    const triangleBaseValue = getValueById('triangle-base');
    const triangleHeightValue = getValueById('triangle-height');
    const triangleArea = 0.5 * triangleBaseValue * triangleHeightValue;
    setValueById('triangle-display', triangleArea);
    setValueById('display-area', triangleArea);
}

// Triangle Area Calculation
function rectangleCalculator() {
    const rectangleWidthValue = getValueById('rectangle-width');
    const rectangleLengthValue = getValueById('rectangle-length');
    const rectangleArea = rectangleWidthValue * rectangleLengthValue;
    setValueById('rectangle-display', rectangleArea);
    setValueById('display-area', rectangleArea);

}
// Parallelogram Area Calculation
function parallelogramCalculator() {
    const parallelogramBaseValue = getValueById('parallelogram-base');
    const parallelogramHeightValue = getValueById('parallelogram-height');
    const parallelogramArea = parallelogramBaseValue * parallelogramHeightValue;
    setValueById('parallelogram-display', parallelogramArea);
    setValueById('display-area', parallelogramArea);
}