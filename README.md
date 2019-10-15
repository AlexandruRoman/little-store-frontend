<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/AlexandruRoman/little-store-frontend">
    <img src="logo.png" alt="Logo" width="120" height="120">
  </a>

  <h3 align="center">Little Store</h3>

  <p align="center">
    An e-commerce web app based on react
    <br />
    <br />
    <a href="https://github.com/AlexandruRoman/little-store-frontend/issues">Report Bug</a>
    ·
    <a href="https://github.com/AlexandruRoman/little-store-frontend/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

<!-- ABOUT THE PROJECT -->

## About The Project

Today, the vast majority of e-commerce frameworks are using PHP as their main programming language. And that's a little bit ironical when you think that the language of the web is not the language of e-commerce.

That's how this project began: as a React alternative to the PHP world of e-commerce.

### Built With

- [React](https://reactjs.org)
- [Redux](https://redux.js.org)
- [redux-first-router](https://github.com/faceyspacey/redux-first-router)
- [redux-saga](https://github.com/redux-saga/redux-saga)
- [TypeScript](https://www.typescriptlang.org)
- [SocketIO](https://socket.io)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- [Install Node.js](https://nodejs.org/en/download/)

### Installation

1. Clone the repo

```sh
git clone https://github.com/AlexandruRoman/little-store-frontend.git
```

2. Install NPM packages

```sh
npm install
```

3. Enter your API url in `src/AppNode/_brain/api.ts`

```JS
const api = axios.create({
    baseURL: 'YOUR API URL',
    ...
})
```

<!-- USAGE EXAMPLES -->

## Usage

Running the app in dev mode:

```sh
npm start
```

Creating a production build of the app:

```sh
npm run build
```

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/AlexandruRoman/little-store-frontend/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License.

<!-- CONTACT -->

<!-- ACKNOWLEDGEMENTS -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/AlexandruRoman/little-store-frontend.svg?style=flat-square
[contributors-url]: https://github.com/AlexandruRoman/little-store-frontend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AlexandruRoman/little-store-frontend.svg?style=flat-square
[forks-url]: https://github.com/AlexandruRoman/little-store-frontend/network/members
[stars-shield]: https://img.shields.io/github/stars/AlexandruRoman/little-store-frontend.svg?style=flat-square
[stars-url]: https://github.com/AlexandruRoman/little-store-frontend/stargazers
[issues-shield]: https://img.shields.io/github/issues/AlexandruRoman/little-store-frontend.svg?style=flat-square
[issues-url]: https://github.com/AlexandruRoman/little-store-frontend/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/alexandru-daniel-roman/
[product-screenshot]: screenshot.png
