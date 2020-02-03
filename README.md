# Subject

BananesExport est une entreprise d'exportation de bananes qui est en pleine croissance et recrute fortement dans le monde entier.
Malheureusement les employés se plaignent de plus en plus de la lourdeur du processus d’accueil et de fourniture de poste de travail.
BananesExport souhaiterait une expérience utilisateur interactive innovante à travers un portail web et mobile en self service dans lequel: 
- un employé peut planifier le jour d'arrivée d’un nouvel employé 
- un employé peut composer un poste de travail pour un nouvel arrivant par rapport à son futur rôle dans l’entreprise avec un aperçu du budget en temps réel 
- un employé peut définir un rôle pour le nouvel arrivant:     
  - Commercial     
  - Trader     
  - Développeur 
- un employé peut composer un poste de travail pour un nouvel arrivant par rapport à son futur rôle:      
- Ordinateur [1 maximum par personne]:         
  - ordinateur portable à 1800€,         
  - ordinateur fixe+écran  2200€,     
  - station d’accueil d’ordinateur portable 400€ [1 maximum par personne si ordinateur portable],     
  - écran supplémentaire avec socle de fixation 250€ [3 maximum par personne],     
- Téléphonie [1 maximum par personne]:         
    - smartphone 600€,         
    - téléphone fixe 100€,     
    - micro-casque sans fil 250€ [dans la limite du budget] 
  
- un employé peut à tout moment consulter et modifier la composition de son propre poste de travail 

* * *
 Il existe des règles sur l’attribution de matériel: 
 - Pour les commerciaux qui sont la plupart du temps en clientèle et qui n’ont pas de bureau fixe:
      - n’utilisent que des ordinateurs portables
      - possèdent toujours un téléphone portable
      - 3000€ maximum de budget 
      
 - Pour les traders qui sont sédentaires rivés à leurs écrans:
      - n’utilisent que ordinateurs fixes     
      - possèdent minimum 3 écrans     
      - pas de limite de budget
       
 - Pour les développeurs qui collaborent entre eux régulièrement
      - 3000€ maximum de budget 

BananesExport souhaiterait une expérience utilisateur fluide et responsive qui ne permette pas de configuration 
incohérente tout en permettant aux utilisateurs de visualiser au maximum leur futur environnement de travail. 


## Contraintes techniques 
- Le front sera développé en REACT 
- Pour la partie stockage des données, le choix est laissé libre (pas besoin de persistance, un stockage en mémoire est suffisant) 
- La production d’un backend n’est pas nécessaire

# Installation
run on terminal or your command invite:
```
yarn install
```

if you don't install `Yarn package manager`, you can install `yarn` with this URL: `https://legacy.yarnpkg.com/fr/`.

You will need to install `json-server` with command: 
```
npm i -g json-server
```

`json-server` allow you for launch the faker api.

# Starting
1 - Open your terminal or command invite for launch json-server with command:
```
json-server --watch db.json
```

It create a server on `localhost:3000` 

2 - Open another terminal or command invite and type the command:
```
yarn start
```

It create a server on `localhost:3001` after type `Y` because the port 3000 is busy.

3 - On your browser, type `localhost:3001`.

Happy hacking !!!


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
