<h1 align="center">Netflix clone with React</h1>
<img src="https://github.com/jonasdevzero/Netflix/blob/master/readmeFiles/presentationImageForGitHub.png" alt="image presentation" align="center" />
<img src="https://github.com/jonasdevzero/Netflix/blob/master/readmeFiles/presentation-part1.gif" alt="gif presentation part 1" align="center" />
<img src="https://github.com/jonasdevzero/Netflix/blob/master/readmeFiles/presentation-part2.gif" alt="gif presentation part 2" align="center" />

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Contact](#contact)
* [knowledge acquired.](#knowledge-acquired)



<!-- ABOUT THE PROJECT -->
## About The Project

This project is a netflix clone created with react, firebase and styled-components. contains four pages: home, signin, signup and browse. signin and signup methods, auth routes. custom hooks, compound components disgn pattern, and more!!!. If you want do this project from scratch, accsses this video: https://www.youtube.com/watch?v=x_EEwGe-a9o.

### Built With
* [React](https://reactjs.org/)
* [styled-components](https://styled-components.com/)
* [Firebase](https://firebase.google.com/)
* [Normilize.css](https://github.com/necolas/normalize.css/)
* [fuse.js](https://fusejs.io/)


<!-- GETTING STARTED -->
## Getting Started
To get a local copy up and running follow these simple example steps or accsses this video for more details: /- comming soon -/ .

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
4. Configure Firebase in the lib folder
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

Email  [![Gmail Badge](https://img.shields.io/badge/-jonasdevzero@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jonasdevzero@gmail.com)](mailto:jonasdevzero@gmail.com)

LinkdeIn  [![Linkedin Badge](https://img.shields.io/badge/-Jonas%20%20de%20Oliveira-blue?style=flatsquare&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jonas-de-oliveira-0561961ab/)](https://www.linkedin.com/in/jonas-de-oliveira-0561961ab/)  





<!-- ACKNOWLEDGEMENTS -->
## knowledge acquired.

- Auth routes
- Styled-components
- React hooks: useEffect, useHistory, createContext, useContext.
- Custom hooks
- Compound components design pattern
