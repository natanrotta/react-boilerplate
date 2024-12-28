
# React Boilerplate Project with TypeScript, Bootstrap, and Styled-Components

This project provides a basic structure to build scalable front-end applications using React, TypeScript, Bootstrap, and Styled-Components. It follows modern design patterns and best practices to keep the code modular, reusable, and easy to maintain.

![React Badge](https://img.shields.io/badge/-React-blue)
![Typescript Badge](https://img.shields.io/badge/-Typescript-blue)
![Yarn Badge](https://img.shields.io/badge/-Yarn-blue)
![Bootstrap Badge](https://img.shields.io/badge/-Bootstrap-lightblue)
![Styled Components Badge](https://img.shields.io/badge/-Styled%20Components-purple)

&nbsp;

## ⚙️ How to Run

**Dependencies:** You need to have some dependencies installed before continuing:

- Node.js and NPM
- Yarn

&nbsp;

## ⏳ Steps

### 0. Install project dependencies

Open the terminal inside the project folder and run:

```bash
yarn install
```

This will install all necessary dependencies, including React, TypeScript, `styled-components`, and Bootstrap.

### 1. Create a `.env` file (Optional)

If you have environment-specific configurations, create a `.env` file at the root of the project and add the required configurations. 

Example `.env` file:

```bash
REACT_APP_API_URL=http://api.example.com
```

### 2. Start the development server

Run the following command to start the development server using Webpack:

```bash
yarn start
```

This will open the application in your default browser at `http://localhost:3000`.

### 3. Build the project for production

To create a production build of the application, run:

```bash
yarn build
```