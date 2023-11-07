// Prompt user for input
const input = prompt("Please enter a comma separated list of flavors");

// Split array 
const flavors = input.split(",");

// Function to separate the array into flavors and quantities
function separateArrayIntoFlavorsAndQuantities(flavors) {
    const result = {};
    flavors.forEach(flavor => {
        if (result[flavor]) {
            result[flavor] += 1;
        } else {
            result[flavor] = 1;
        }
    });
    return result;
}

// Declare constant for output
const flavorsAndQuantities = separateArrayIntoFlavorsAndQuantities(flavors);

// Log the result
console.log(flavorsAndQuantities);
