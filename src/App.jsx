import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import UserInfo from './components/UserInfo.jsx';
import { useState } from 'react';
import Examples from './components/Examples/Examples.jsx';

function App() {

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        </main>
        <UserInfo />
    </>
  );
}

export default App;