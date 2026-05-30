

// function calculateWindChill(tempC, windKmh) {
//   return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
// }



// //Static weather values
// const temperature = 8;    
// const windSpeed   = 20;  

// const windChillEl = document.getElementById('wind-chill');

// if (windChillEl) {
//   if (temperature <= 10 && windSpeed > 4.8) {
//     const chill = calculateWindChill(temperature, windSpeed);
//     windChillEl.textContent = `${chill.toFixed(1)} °C`;
//   } else {
//     windChillEl.textContent = 'N/A';
//   }
// }



document.getElementById("lastModified").innerHTML = document.lastModified;
document.getElementById("currentyear").textContent = new Date().getFullYear();



// Task 2.2: Define static variables matching your displayed HTML values

const temp = 8;        // Example static temperature (<= 10 °C)
const windSpeed = 15;  // Example static wind speed (> 4.8 km/h)
const units = "C";

/**
 * Task 2.3: Calculate wind chill factor using international standard formulas
 * @param {number} t - Air temperature
 * @param {number} v - Wind speed
 * @returns {number} Calculated wind chill factor
 */
function calculateWindChill(t, v) {
  // Returns calculation in a strict single-line format per requirements
  return units === "C" 
    ? 13.12 + 0.6215 * t -  11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)
    : 35.74 + 0.6215 * t - 35.75 * Math.pow(v, 0.16) + 0.4275 * t * Math.pow(v, 0.16);
}


function displayWindChill() {
  const windChillDisplay = document.querySelector("#wind-chill");
  let finalResult = "N/A";

  const isMetricValid = (units === "C" && temp <= 10 && windSpeed > 4.8);
  const isImperialValid = (units === "F" && temp <= 50 && windSpeed > 3);

  if (isMetricValid || isImperialValid) {
    finalResult = `${calculateWindChill(temp, windSpeed).toFixed(1)} °${units}`;
  }

  if (windChillDisplay) {
    windChillDisplay.textContent = finalResult;
  }
}



window.addEventListener("DOMContentLoaded", displayWindChill);
window.addEventListener("resize", displayWindChill);


// Task 2.1 & 2.4: Validate thresholds before execution, then display the outcome
// window.addEventListener("DOMContentLoaded", () => {
//   const windChillDisplay = document.querySelector("#wind-chill");
//   let finalResult = "N/A";

//   // Check boundaries for Metric vs Imperial ranges respectively
//   const isMetricValid = (units === "C" && temp <= 10 && windSpeed > 4.8);
//   const isImperialValid = (units === "F" && temp <= 50 && windSpeed > 3);

//   if (isMetricValid || isImperialValid) {
//     // Round to 1 decimal place for clean visual presentation
//     finalResult = `${calculateWindChill(temp, windSpeed).toFixed(1)} °${units}`;
//   }

//   // Inject the calculated result or "N/A" into your weather container
//   if (windChillDisplay) {
//     windChillDisplay.textContent = finalResult;
//   }
// });