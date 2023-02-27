# Sunrise and Sunset Time Tracker

This is a web application that shows the sunrise and sunset times based on the user's IP address. It makes use of react-bootstrap for styling and lodash for debouncing input changes.

## How to Use

To use the app, simply follow these steps:

1. Enter your IP address in the input field. The app will automatically validate the IP address and show a warning message if it is invalid.
2. The app will display the estimated location based on the IP address you entered.
3. The sunrise and sunset times for your location will be shown in the "Sunrise and Sunset" section of the app.

Note: The sunrise and sunset times are calculated based on the estimated location of your IP address, so they may not be completely accurate. Additionally, if the app is unable to determine your location based on the IP address you entered, it will show "N/A" for the sunrise and sunset times.

## Installation

To install and run the app locally, follow these steps:

1. Clone the repository: git clone https://github.com/changseopOh/sunriseAndSunset.git
2. Install the dependencies: yarn
3. Run the app: yarn start

## Dependencies

This app makes use of the following dependencies:

- react-bootstrap for styling
- lodash for debouncing input changes

## Atomic Design Pattern

This project follows the Atomic Design Pattern to organize its design components. Atomic Design is a methodology for creating design systems by breaking them down into smaller, reusable parts. The five levels of Atomic Design are atoms, molecules, organisms, templates, and pages.

In this project, I've used this pattern to create a scalable and maintainable design system. Each component is organized into one of these levels, based on its complexity and how it is used in the application. This approach promotes consistency and allows for easy extension of the design system as the project grows.

By using the Atomic Design Pattern, I am able to maintain a high level of design quality while ensuring that the design system remains flexible and easy to use.

## Todos
- Replace the config.json file with environment variables by using the dotenv package.
- In production, use cloud provider's environment variables to assign secret key values instead of hardcoding them.
- Implement unit tests to ensure the reliability of the code.
- Add additional error handling to improve the user experience.
- Add the i18n to support the multiple languages.
- Add the atomic design components such as Typography, label, textInput, and etc.

### Time Spent
This project took me about 7 hours to complete.

### Uploaded Video
http://g.recordit.co/157LuYE25u.gif