# SauceDemo testing with Cypress

This project contains end-to-end tests for a SauceDemo application using Cypress.

![Cypress Logo](https://www.cypress.io/images/layouts/cypress-logo.svg)

## 🚀 Getting Started

### Prerequisites
- Node.js and npm: Ensure you have Node.js and npm installed. If not, you can download and install them from [nodejs.org](https://nodejs.org/).

### Installation
1. Clone this repository:
   ```
   git clone https://github.com/MateuszKoziel/saucedemo.git
   ```
2. Navigate to the project directory:
   ```
   cd saucedemo
   ```
3. Install the dependencies:
   ```
   npm install
   ```

4. (Optional) Update the `cypress.config.ts` with your application's URL or any other configurations you might want to change.

## 🏃‍♀️ Running the tests
Execute the following command:
```
npm run cy:run
```

To open Cypress and run tests interactively:
```
npm run cy:open
```

## 📜 Features Tested
- Log in with standard user
- Adding products to the cart
- Removing products from the cart
- Verifying number of products in the cart
- Verifying validation of empty fields in checkout form

## 🛠️ Built With
- [Cypress](https://www.cypress.io/) - End-to-end testing framework
- [ESLint](https://eslint.org/) - Linting tool for maintaining code quality

## 📖 Documentation
For more details on Cypress commands and best practices, refer to the [Cypress documentation](https://docs.cypress.io/).

## 👩‍💻 Contributors
- **Mateusz Koziel** - [MateuszKoziel](https://github.com/MateuszKoziel)

## 📄 License
This project is licensed under the ISC License.
