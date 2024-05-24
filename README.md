# Simplistic Demo of useContext

React Context provides an elegant way of sharing data between components.

See the demo [here](https://funforks.github.io/useContext-demo).

In its simplest form, a React Context is an object which contains two properties: Provider and Consumer.

The Provider gives other components access to whatever is stored in its `value` property. By customizing the Provider's `value` property, you can share data and functions with multiple components.

If you work with function components, then you can ignore the Consumer property and use the `useContext` React method instead.

This app contains a `TestContext.jsx` script which:
1. Calls `React.createContext()` to create a barebones `TestContext` object
2. Creates a `TestProvider` component, which customizes the `value` property of `TestContext.Provider`.

In order to make the custom data available in other components, you need to:

1. Wrap any components which need access to the custom data in the `<TestProvider>` component (see index.js).
2. Import the `TestContext` object into any script that creates an accessor component (see App.js).
3. Call `useContext(TestComponent)` inside the accessor component, to access the `value` of the `<TestProvider>` wrapper component (see the App and SubComponent components).

---

In this example app, the TestProvider gives access to a `variable` and a `setVariable` function which work together with `useState`. The value of `variable` can thus be used and set in any component that is a child of the `<TestProvider>` component.

In a real project, you will create a custom Provider components with multiple entries in the `value` object, and use a different selection of these entries in different rendered components.

You might also use more than one Context, especially if each Context deals with a completely separate data set.
