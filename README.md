This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# About this project
This is demo for creating react app with firebase as backend,
authentication and database included.

## Step by step
### 1. Build basic routes
* `npm install react-router-dom`
* `npm install @types/react-router-dom -D`
* add routes file: `src/constants/routes`
* add basic pages

### 2. Add firebase
* `npm install firebase`
* `npm install -g firebase-tools`
* login to firebase and go to console
* add new project
* go to setting icon > project setting
* select location for your project
* select: **add app > web**
* follow firebase wizard steps. Since we're using react, no need to add the script manually as suggested in the wizard
* on `firebase init` mark: firestore and hosting. do not overwrite `public/index.html` 
* add script to **package.json**: `deploy: firebase deploy`

### 3.
* On firebase console go to **Authentication** > Set up sign in methods, and enable google provider
* `npm install react-with-firebase-auth`
* add firebase authentication HOC (see `firebase.app.ts`);

## Resources
* [A Firebase in React Tutorial for Beginners](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial#firebase-in-react-setup)

# Create-react-app auto generated docs

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
