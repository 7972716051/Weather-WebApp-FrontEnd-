# Weather-WebApp-FrontEnd-
Weather App
A simple weather app that fetches weather data from the OpenWeatherMap API based on a user's inputted city name. The app displays the weather conditions, temperature, humidity, and an appropriate weather icon.
Description:
This project allows users to input a city name and fetch the weather details such as temperature, humidity, and weather condition using the OpenWeatherMap API. The app supports switching between Celsius and Fahrenheit units.
Usage
1.	Enter a city name in the text input box.
2.	Click the Get Weather button or press Enter.
3.	The weather details for the entered city will be displayed, including:
o	Temperature
o	Humidity
o	Weather condition
o	A weather icon
4.	You can toggle between Celsius and Fahrenheit by clicking the Switch to °F/°C button.
________________________________________
Approach
•	HTML: The user interface is built using HTML to structure the form and display elements.
•	CSS: Simple styles were applied for layout and presentation of the weather data.
•	JavaScript:
o	I used JavaScript to handle the logic of fetching weather data from the OpenWeatherMap API.
o	I also implemented event listeners to handle form submission, unit toggle, and error handling.
o	For API requests, I used the XMLHttpRequest method to fetch the weather data.
o	The app toggles between Celsius and Fahrenheit units.
________________________________________
Challenges and Solutions
1. Handling City Not Found Error
Challenge: The app needed to handle cases where the user inputs an invalid or non-existent city name. 
Solution: I used the cod property in the API response, which returns 404 if the city is not found. I displayed an error message to inform the user.

2. City Name Encoding
Challenge: Some city names might contain special characters or spaces (e.g., "New York", "São Paulo"). Solution: I used encodeURIComponent to properly encode the city name before making the API request to ensure that special characters are correctly handled.
