// Weather App
const weatherForm = document.getElementById("weather-form");
const locationInput = document.getElementById("location-input");
const weatherContainer = document.getElementById("weather-container");

weatherForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent page refresh

  const location = locationInput.value;
  
  // Call your async function and wait for it to finish
  await fetchWeatherData(location);
});

async function fetchWeatherData(location) {
  const apiKey = "YOUR_VISUAL_CROSSING_KEY_HERE"; // Replace with your actual API key
  const url = `https://weather.visualCrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;

  try {
    const response = await fetch(url);
    
    // Check if the city name was valid
    if (!response.ok) {
      throw new Error(`City not found: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data); // Check your console to see the full weather object!
    
    displayWeather(data); // Call a function to show it on the UI

  } catch (error) {
    console.error("Error:", error);
    weatherContainer.innerHTML = `<p style="color: red;">Could not fetch weather. Please check the city name.</p>`;
  }
}

// Basic function to display data on the screen
function displayWeather(data) {
  // Visual Crossing puts current conditions in data.currentConditions
  const temp = data.currentConditions.temp;
  const conditions = data.currentConditions.conditions;
  const resolvedAddress = data.resolvedAddress;

  weatherContainer.innerHTML = `
    <h2>${resolvedAddress}</h2>
    <p>Temperature: ${temp}°F</p> <!-- Note: Visual Crossing defaults to Fahrenheit unless specified -->
    <p>Conditions: ${conditions}</p>
  `;
}