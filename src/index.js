import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { TestProvider } from './TestContext'

// The App component must be wrapped in the TestProvider
// component, so that useContext() will be able to access
// the `value` set in TestProvider.

render(
  <TestProvider>
    <App />
  </TestProvider>,
  document.getElementById('root')
);
