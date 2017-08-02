# The react-hot-load example project

This project is to reproduce an issue with react-hot-loader where calling setState() from an event handler fails
with the following error: "Warning: setState(...): Can only update a mounted or mounting component. This usually means you called setState() on an unmounted component. This is a no-op."

This issue is captured in the issue [https://github.com/gaearon/react-hot-loader/issues/593].

## Steps to reproduce
1. Clone this project
2. Run `npm install`
3. Run `npm start`. Webpack will compile and open a browser window.
4. Enter some text in the input field.
5. Look in the console tab. You will see the warning message displayed.
