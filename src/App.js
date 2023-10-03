import 'bootstrap-icons/font/bootstrap-icons.css'

import './App.css';
import React, { Fragment, useState } from 'react';
import Main from './Pages/Main/Main';

export const AppContext = React.createContext()

function App() {

  const [library,setLibrary] = useState([])
  const [bag,setBag] = useState([])

  return (
    <AppContext.Provider value={{library,setLibrary,bag,setBag}}>
      <Main/>
    </AppContext.Provider>
  );
}

export default App;
