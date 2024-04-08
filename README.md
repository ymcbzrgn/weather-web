# Weather App

A simple web application that fetches weather data from the OpenWeatherMap API. This application allows users to search for weather conditions in a city and displays relevant weather details including temperature, humidity, wind speed, and more.

## Features

- **City Search**: Input a city name to retrieve and display the weather conditions for that location.
- **Dark Mode**: Toggle between light and dark mode for ease of reading regardless of ambient lighting.
- **Responsive Design**: Works on both desktop and mobile devices thanks to responsive CSS.

## Prerequisites

Before running this project, you need to have a basic environment with a web server that supports HTML, CSS, and JavaScript. Modern browsers such as Google Chrome, Mozilla Firefox, or Safari are recommended for the best experience.

## Setup

To run this project, follow these steps:

1. Clone the repository to your local machine.
2. Open the `index.html` file in a browser to view the app.

## Usage

To use the app:

1. Enter the city name in the search box.
2. Click on the "Search" button or press enter.
3. View the weather information that appears below the search box.

## Configuration

To change the API used or keys associated with external resources, modify the `apiUrl` variable inside the `script.js` file:

```javascript
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[YOUR_API_KEY]&units=metric`;
```

Replace [YOUR_API_KEY] with your personal API key from OpenWeatherMap.

## Technologies Used

- HTML
- CSS
- Javascript

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- [Yamaç Bezirgan](https://github.com/ymcbzrgn) - As a developer passionate about creating intuitive and impactful software solutions, I invite you to explore my projects and collaborate. Visit my [GitHub profile](https://github.com/ymcbzrgn) for more.

## Contributing

Contributions are what make the open-source community an incredible place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments

- Thanks to OpenWeatherMap for providing the free API used in gathering the weather data.
- A nod to anyone whose code was used
- Inspired by the open-source community





