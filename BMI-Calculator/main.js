const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const resultBox = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
    const weight = parseFloat(document.getElementById("weight").value);
    const heightCm = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        alert("Please enter valid positive numbers for both weight and height.");
        return;
    }

    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);
    let category = "";
    let colorClass = "";

    if (bmi < 18.5) {
        category = "Underweight";
        colorClass = "bg-blue-500 text-white";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal";
        colorClass = "bg-green-500 text-white";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
        colorClass = "bg-red-500 text-white";
    } else {
        category = "Obese";
        colorClass = "bg-yellow-300 text-white";
    }

    resultBox.className = `mt-6 p-4 rounded ${colorClass}`;
    resultBox.innerHTML = `
    <h2 class="text-xl font-bold mb-2">Your BMI Result</h2>
    <p class="text-4xl font-bold mb-2">${bmi}</p>
    <p class="text-lg font-semibold mb-2">${category}</p>
    <p class="text-sm text-white">
      <strong>Underweight:</strong> BMI &lt; 18.5<br>
      <strong>Normal weight:</strong> 18.5 – 24.9<br>
      <strong>Overweight:</strong> 25 – 29.9<br>
      <strong>Obesity:</strong> BMI of 30 or greater
    </p>
  `;
    resultBox.classList.remove("hidden");
});

resetBtn.addEventListener("click", () => {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    resultBox.classList.add("hidden");
});