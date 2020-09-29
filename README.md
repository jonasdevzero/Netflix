<h1 align="center">Netflix clone with React</h1>
<img src="https://github.com/jonasdevzero/Netflix/blob/master/public/images/misc/presentationImageForGitHub.png" alt="image presentation" align="center" />

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

More soon...

### Built With
* [React](https://reactjs.org/)
* [styled-components](https://styled-components.com/)
* [Firebase](https://firebase.google.com/)
* [Normilize.css](https://github.com/necolas/normalize.css/)
* [fuse.js](https://fusejs.io/)


<!-- GETTING STARTED -->
## Getting Started
To get a local copy up and running follow these simple example steps.

### Prerequisites
* npm
* node

### Installation

1. create a project in firebase and enable email authentication
2. Clone the repo
```sh
git clone https://github.com/jonasdevzero/Netflix.git
```
3. Install NPM packages
```sh
npm install
```
4. Configure Firebase
```JS
  import Firebase from 'firebase'
  import 'firebase/firestore'
  import 'firebase/auth'
  // import { seedDatabase } from '../seed'

  const config = { your firebase settings }

  const firebase = Firebase.initializeApp(config)

  // seedDatabase(firebase)

  export { firebase }
```
5. uncomment and run the seed once

<!-- CONTRIBUTING -->
## Contributing
Contributions are welcome :smile:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->
## Contact

Jonas de Oliveira - jonasdevzero@gmail.com

Project Link: [https://github.com/jonasdevzero/Netflix](https://github.com/jonasdevzero/Netflix)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
More soon...
