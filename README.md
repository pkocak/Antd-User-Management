# ANTD EXAMPLE USER MANAGEMENT APP

Ant Design React User Management Project with Path Control according to Auth Roles including Redux and Redux Saga.

## Description

### `Auth Roles`

There are two roles named `user` and `moderator`. Moderator can update the information of any user.

### `Path Control`

Authentication page automatically leads to `/login` path from any other paths. If authorized, user can only use allowed paths according to auth role. Any other path leads to `/error-page`.

## `Dashboard Page`

There is a table which allows moderator to go `/details` page to update a user' information. A chart which automatically calculates the number of people per city, is also included in dashboard page. Data is stored in local storage and managed with Redux.

## `Details Page`

Moderator can update the information of a user in this page.

## Authentication

### `moderator`

email: moderator@example.com
password: `1q2w3E**`

### `user`

email: user@example.com
password: `1q2w3E**`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
