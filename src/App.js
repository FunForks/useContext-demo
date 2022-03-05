import { useContext } from 'react'
import { TestContext } from './TestContext'


// The <App /> component is wrapped by the <TestProvider />
// component which gives access to TestContext.Provider. All of
// the <App /> component's children therefore have access to
// the `value` of TestContext.Provider, through
// useContext(TestContext).


const App = () => {
  // useContext must be used in each component that requires
  // access to the context members
  const { variable } = useContext(TestContext)

  return (
    <div className="App">
      Variable is: "{variable}"
      <br />
      <SubComponent />
    </div>
  );
}


export default App;



const SubComponent = () => { 
  // useContext must be used in each component that requires
  // access to the context members
  const { variable, setVariable } = useContext(TestContext)

  return (
    <label htmlFor="variable">
      Set variable:
      <input
        id="variable"
        type="text"
        value={variable}
        onChange={event => setVariable(event.target.value)}
      />
    </label>
  )
}