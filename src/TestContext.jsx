import { createContext, useState } from "react";


// Import TestContext into components, then use
// const { de, structured, props } = useContext(TestContext)
// to get access to the entries in `value` below.
export const TestContext = createContext()


// Import TestProvider into a parent component, and wrap the
// children in <TestProvider><...></TestProvider>
// so that useContext(TestContext) will work.
export const TestProvider = ({ children }) => {
  const [ variable, setVariable ] = useState("initial")

  // The value property can have any value. Here, we use an
  // object containing multiple variables and functions. All
  // of these members will be available to all the children
  // and their descendants.
  return (
    <TestContext.Provider
      value={{
        variable,
        setVariable
      }}
    >
      {children}  
    </TestContext.Provider>
  )
}