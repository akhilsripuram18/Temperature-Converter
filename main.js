function checkFields() {
  // Get the field values and check if they are filled
  const temperature = document.getElementById("temperature").value.trim();
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  const convertButton = document.getElementById("convertButton");

  // Enable the button only if all fields are filled
  convertButton.disabled = !(temperature && fromUnit && toUnit);
}

function convertTemperature() {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  let result;

  if (isNaN(temperature)) {
    document.getElementById("result").innerText =
      "Please enter a valid number.";
    return;
  }

  if (fromUnit === toUnit) {
    result = temperature;
  } else if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
    result = (temperature * 9) / 5 + 32;
  } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
    result = temperature + 273.15;
  } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
    result = ((temperature - 32) * 5) / 9;
  } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
    result = ((temperature - 32) * 5) / 9 + 273.15;
  } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
    result = temperature - 273.15;
  } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
    result = ((temperature - 273.15) * 9) / 5 + 32;
  }

  document.getElementById("result").innerText = `Result: ${result.toFixed(
    2
  )}° ${toUnit}`;
}
