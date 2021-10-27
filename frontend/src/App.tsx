import React from 'react';
import './App.css';
import GetCustomers from './components/Customers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Invoice App
        </h1>
        <p>
          This is invoice-app
        </p>
        <p>
        <GetCustomers/>
        </p>
      </header>      
    </div>
  );
}

export default App;
